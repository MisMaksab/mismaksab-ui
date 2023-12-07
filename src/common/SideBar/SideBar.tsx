import React, { useCallback, useState } from "react";
import cn from "classnames";

import { SideBarHeader } from "../../common/SideBarHeader/SideBarHeader";
import { SideBarBox } from "../SideBarBox/SideBarBox";
import { LayoutProp } from "../LayoutProp";
import { MobileCN } from "../../styles";
import { sideBar, open } from "./styles";

interface SideBarProps extends LayoutProp {
  title: string;
  data: (
    | {
        title: string;
        svg: any;
        subSvg: any;
        link: string;
        dropdownItems: never[];
      }
    | {
        title: string;
        svg: any;
        dropdownItems: { title: string; link: string }[];
        subSvg?: undefined;
        link?: undefined;
      }
  )[];
  isOpen: boolean;
  onCategoryClick: () => void;
}

export function SideBar({
  title,
  layout,
  data,
  isOpen,
  onCategoryClick,
}: SideBarProps) {
  const [expandedId, setExpadedId] = useState<number | null>(null);
  const changeExpandedIdCb = useCallback(
    (id: number | null) => {
      if (id === expandedId) {
        setExpadedId(null);
      } else {
        setExpadedId(id);
      }
    },
    [expandedId]
  );

  return (
    <div
      className={cn(sideBar, {
        [MobileCN]: layout === "mobile",
        [open]: isOpen,
      })}
    >
      <SideBarHeader
        layout={layout}
        title={title}
        onCategoryClick={onCategoryClick}
        isOpen={isOpen}
        changeExpandedIdCb={changeExpandedIdCb}
      />
      <SideBarBox
        layout={layout}
        data={data}
        expandedId={expandedId}
        onClick={changeExpandedIdCb}
        isOpen={isOpen}
        onCategoryClick={onCategoryClick}
      />
    </div>
  );
}
