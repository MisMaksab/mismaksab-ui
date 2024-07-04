"use client";

import { useCallback, useState } from "react";
import { SideBar } from "../../common/SideBar/SideBar";
import cn from "classnames";
import { sideBarWrapper, open } from "./styles";
import { SideBarItemDataProps } from "../../common/SideBarBoxItem/SideBarBoxItem";

interface DesktopSideBarWrapperProps {
  data: SideBarItemDataProps[];
  title: string;
}

export function DesktopSideBarWrapper({
  data,
  title,
}: DesktopSideBarWrapperProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const onCategoryClick = useCallback(() => {
    setIsCategoryOpen((val) => !val);
  }, [isCategoryOpen]);

  return (
    <div
      className={cn(sideBarWrapper, {
        [open]: isCategoryOpen,
      })}
    >
      <SideBar
        data={data}
        title={title}
        isOpen={isCategoryOpen}
        onCategoryClick={onCategoryClick}
        layout="desktop"
        mobileSearchPathWithoutValue={""}
      />
    </div>
  );
}
