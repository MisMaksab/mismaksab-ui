import React, { useRef } from "react";
import cn from "classnames";
import { LayoutProp } from "../LayoutProp";

import mobileSideBarArrow from "../../assets/icons/mobileSidebarArrow.svg";
import {
  sideBarBoxItem,
  sideBarBoxItemBtn,
  logoSvg,
  sideBarBoxItemBtnText,
  shown,
  arrowSvg,
  rotate,
  sideBarBoxItemDropdown,
  expanded,
  sideBarBoxItemDropdownContainer,
  sideBarBoxItemDropdownItem,
  link,
  activeCN,
} from "./styles";
import { DesktopCN, MobileCN } from "styles";

interface SideBarBoxItemDropdownData {
  title: string;
  link: string;
}

interface SideBarBoxItemProps extends LayoutProp {
  data: SideBarItemData;
  id: number;
  expandedId: number | null;
  onClick: (id: number) => void;
  isOpen?: boolean;
  onCategoryClick?: () => void;
}

interface SideBarItemData {
  link: string;
  svg: string;
  subSvg: string;
  title: string;
  dropdownItems: SideBarBoxItemDropdownData[];
}

export function SideBarBoxItem({
  layout,
  data,
  id,
  expandedId,
  onClick,
  isOpen,
  onCategoryClick,
}: SideBarBoxItemProps) {
  const isExpanded = expandedId === id;
  const linkRef = useRef<any>(null);

  function handleCategoryClick() {
    if (linkRef.current.href) return false;

    if (!isOpen) {
      if (typeof onCategoryClick !== "undefined") {
        onCategoryClick();
      }
    }
    onClick(id);
  }

  function handleCategoryItemClick() {
    onClick(id);
  }

  return (
    <div
      className={cn(sideBarBoxItem, {
        [MobileCN]: layout === "mobile",
        [DesktopCN]: layout === "desktop",
      })}
    >
      <a href={data.link} className={sideBarBoxItemBtn} ref={linkRef}>
        <img className={logoSvg} src={data.svg} onClick={handleCategoryClick} />
        <span
          className={cn(sideBarBoxItemBtnText, {
            [shown]: isOpen && layout === "desktop",
            [activeCN]: isExpanded,
          })}
          onClick={handleCategoryItemClick}
        >
          {data.title}
          {data.subSvg && <img className={arrowSvg} src={data.subSvg} />}
          {layout === "mobile" && !data.subSvg && (
            <img
              className={cn(mobileSideBarArrow, { [rotate]: isExpanded })}
              src={mobileSideBarArrow}
            />
          )}
        </span>
      </a>

      {!data.subSvg && (
        <SideBarBoxItemSubItems
          data={data.dropdownItems}
          isExpanded={isExpanded}
        />
      )}
    </div>
  );
}

interface SideBarBoxItemSubItemsProps {
  data: SideBarBoxItemDropdownData[];
  isExpanded: boolean;
}

function SideBarBoxItemSubItems({
  data,
  isExpanded,
}: SideBarBoxItemSubItemsProps) {
  return (
    <div
      className={cn(sideBarBoxItemDropdown, {
        [expanded]: isExpanded,
      })}
    >
      <div className={sideBarBoxItemDropdownContainer}>
        {data.map((item: any) => (
          <div key={item.title} className={sideBarBoxItemDropdownItem}>
            <a className={link} href={item.link}>
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
