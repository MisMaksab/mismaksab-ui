"use client";

import React, { useEffect, useState } from "react";
import cn from "classnames";
import { LayoutProp } from "../LayoutProp";
import { SearchBar } from "../SearchBar/SearchBar";
import { DesktopCN, MobileCN } from "../../styles";
import {
  fixedBlock,
  sideBarHeader,
  titleCN,
  active,
  shrinkBtn,
  searchBar,
  open,
} from "./styles";
import { ShrinkButton } from "../../common/ShrinkButton/ShrinkButton";

interface SideBarHeaderProps extends LayoutProp {
  title: string;
  isOpen: boolean;
  onCategoryClick: () => void;
  changeExpandedIdCb: (id: number | null) => void;
  placeHolderText: string;
}

export function SideBarHeader({
  layout,
  title,
  isOpen,
  onCategoryClick,
  changeExpandedIdCb,
  placeHolderText,
}: SideBarHeaderProps) {
  const [showSearchBar, setShowSearchBar] = useState(true);

  function handleShrinkButtonClick() {
    onCategoryClick();
    if (layout === "desktop") changeExpandedIdCb(null);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen && layout === "mobile") setShowSearchBar(window.scrollY <= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <div
      className={cn({
        [fixedBlock]: layout === "mobile",
        [open]: isOpen,
      })}
    >
      <div
        className={cn(sideBarHeader, {
          [MobileCN]: layout === "mobile",
          [DesktopCN]: layout === "desktop",
        })}
      >
        <h1
          className={cn(titleCN, {
            [active]: !showSearchBar || isOpen,
          })}
        >
          {title}
        </h1>
        <div className={shrinkBtn}>
          <ShrinkButton
            rotate={layout === "desktop" && !isOpen}
            onClick={handleShrinkButtonClick}
          />
        </div>

        {layout === "mobile" && (
          <div
            className={cn(searchBar, {
              [active]: showSearchBar,
            })}
          >
            <SearchBar sideBarOpen={true} placeHolderText={placeHolderText} />
          </div>
        )}
      </div>
    </div>
  );
}
