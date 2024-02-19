'use client'

import React from "react";
import cn from "classnames";
import { MobileCN } from "../../styles";
import { SideBarBoxItem } from "../SideBarBoxItem/SideBarBoxItem";
import { LayoutProp } from "../LayoutProp";
import { sideBarBox, smoothOverflow } from "./styles";

interface SideBarBoxInterFace extends LayoutProp {
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
      {data.map((item: any, i: number) => (
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
