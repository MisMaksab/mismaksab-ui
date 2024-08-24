"use client";

import cn from "classnames";
import { useCallback, useState } from "react";

import { SideBarItemDataProps } from "../../common/SideBarBoxItem/SideBarBoxItem";
import { SideBarHeader } from "../../common/SideBarHeader/SideBarHeader";
import { MobileCN } from "../../styles";
import { LayoutProp } from "../LayoutProp";
import { SideBarBox } from "../SideBarBox/SideBarBox";
import { open, sideBar } from "./styles";

interface SideBarProps extends LayoutProp {
  mobileSearchPathWithoutValue: string;
  title: string;
  data: SideBarItemDataProps[];
  isOpen: boolean;
  onCategoryClick: () => void;
  mobilePlaceHolderText?: string;
}

export function SideBar({
  mobileSearchPathWithoutValue,
  title,
  layout,
  data,
  isOpen,
  onCategoryClick,
  mobilePlaceHolderText = "Find in MisMaksab",
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
        mobilePlaceHolderText={mobilePlaceHolderText}
        mobileSearchPathWithoutValue={mobileSearchPathWithoutValue}
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
