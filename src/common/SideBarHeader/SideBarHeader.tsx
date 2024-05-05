"use client";

import cn from "classnames";
import { useEffect, useState } from "react";
import { ShrinkButton } from "../../common/ShrinkButton/ShrinkButton";
import { DesktopCN, MobileCN } from "../../styles";
import { LayoutProp } from "../LayoutProp";
import { SearchBar } from "../SearchBar/SearchBar";
import {
  active,
  fixedBlock,
  open,
  searchBar,
  shrinkBtn,
  sideBarHeader,
  titleCN,
} from "./styles";

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
