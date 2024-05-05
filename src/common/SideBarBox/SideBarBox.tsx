"use client";

import cn from "classnames";
import { MobileCN } from "../../styles";
import { LayoutProp } from "../LayoutProp";
import {
  SideBarBoxItem,
  SideBarItemDataProps,
} from "../SideBarBoxItem/SideBarBoxItem";
import { sideBarBox, smoothOverflow } from "./styles";

interface SideBarBoxInterFace extends LayoutProp {
  data: SideBarItemDataProps[];
  expandedId: number | null;
  onClick: (id: number) => void;
  isOpen?: boolean;
  onCategoryClick?: () => void;
}

export function SideBarBox({
  layout,
  data,
  expandedId,
  onClick,
  isOpen,
  onCategoryClick,
}: SideBarBoxInterFace) {
  return (
    <div
      className={cn(sideBarBox, {
        [MobileCN]: layout === "mobile",
        [smoothOverflow]: layout === "desktop",
      })}
    >
      {data.map((item, i: number) => (
        <SideBarBoxItem
          layout={layout}
          key={i}
          id={i}
          expandedId={expandedId}
          data={item}
          onClick={onClick}
          isOpen={isOpen}
          onCategoryClick={onCategoryClick}
        />
      ))}
    </div>
  );
}
