"use client";

import cn from "classnames";
import { useRef } from "react";
import { LayoutProp } from "../LayoutProp";

import mobileSideBarArrow from "../../assets/icons/mobileSidebarArrow.svg";
import { DesktopCN, MobileCN } from "../../styles";
import {
  activeCN,
  arrowSvg,
  expanded,
  link,
  logoSvg,
  mobileSideBarArrowCN,
  rotate,
  shown,
  sideBarBoxItem,
  sideBarBoxItemBtn,
  sideBarBoxItemBtnText,
  sideBarBoxItemDropdown,
  sideBarBoxItemDropdownContainer,
  sideBarBoxItemDropdownItem,
  justifyStart,
} from "./styles";

export interface SideBarDropdownItemDataProps {
  title: string;
  link: string;
}

export interface SideBarItemDataProps {
  svg: string;
  title: string;
  dropdownItems: SideBarDropdownItemDataProps[];
  subSvg?: string;
  link?: string;
}

interface SideBarBoxItemProps extends LayoutProp {
  data: SideBarItemDataProps;
  id: number;
  expandedId: number | null;
  onClick: (id: number) => void;
  isOpen?: boolean;
  onCategoryClick?: () => void;
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
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  function handleCategoryClick() {
    if (linkRef.current?.href) return false;

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
            [justifyStart]: data.subSvg,
          })}
          onClick={handleCategoryItemClick}
        >
          {data.title}
          {data.subSvg && <img className={arrowSvg} src={data.subSvg} />}
          {layout === "mobile" && !data.subSvg && (
            <div
              className={cn(mobileSideBarArrowCN, { [rotate]: isExpanded })}
              dangerouslySetInnerHTML={{ __html: mobileSideBarArrow }}
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
  data: Array<SideBarDropdownItemDataProps>;
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
        {data.map((item) => (
          <div key={item.title} className={sideBarBoxItemDropdownItem}>
            <a className={link} href={`/category/${item.link}`}>
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
