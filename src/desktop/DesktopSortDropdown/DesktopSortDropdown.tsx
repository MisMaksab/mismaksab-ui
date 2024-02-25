"use client";

import React, { useCallback, useState } from "react";
import cn from "classnames";
import { dropdown, shown } from "../../desktop/DesktopDropdownBoxStyles";
import DesktopSortSvg from "../../assets/icons/desktopSort.svg";
import {
  sort,
  sortBtn,
  sortBtnSvg,
  sortBtnSvgItem,
  sortDropdown,
  sortDropdownItem,
  active,
} from "./styles";

export interface DesktopDropdownItemInterface {
  id: number;
  text: string;
}

interface DesktopLanguageDropdownProps {
  data: DesktopDropdownItemInterface[];
  callback: (id: number) => void;
}

export function DesktopSortDropdown({
  data,
  callback,
}: DesktopLanguageDropdownProps) {
  const [activeSelection, setActiveSelection] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const handleDropdownBoxItemClickCb = useCallback(
    (id: number) => {
      if (selectedItem === id) return;
      setSelectedItem(id);
      callback(id);
    },
    [selectedItem]
  );

  return (
    <div
      className={sort}
      onClick={() => {
        setActiveSelection((val) => !val);
      }}
    >
      <DropdownButton data={data} selectedItem={selectedItem} />
      <DropdownBox
        data={data}
        onClick={handleDropdownBoxItemClickCb}
        selectedItem={selectedItem}
        activeSelection={activeSelection}
      />
    </div>
  );
}

interface DropdownButtonProps {
  data: DesktopDropdownItemInterface[];
  selectedItem: number;
}

function DropdownButton({ data, selectedItem }: DropdownButtonProps) {
  return (
    <div className={sortBtn}>
      {data[selectedItem].text}
      <div className={sortBtnSvg}>
        <div
          dangerouslySetInnerHTML={{ __html: DesktopSortSvg }}
          className={sortBtnSvgItem}
        />
        <div
          dangerouslySetInnerHTML={{ __html: DesktopSortSvg }}
          className={sortBtnSvgItem}
        />
      </div>
    </div>
  );
}

interface DropdownBoxProps {
  activeSelection: boolean;
  selectedItem: number;
  data: DesktopDropdownItemInterface[];
  onClick: (id: number) => void;
}

function DropdownBox({
  data,
  selectedItem,
  activeSelection,
  onClick,
}: DropdownBoxProps) {
  return (
    <ul className={cn(dropdown, sortDropdown, activeSelection && shown)}>
      {data.map((item) => (
        <li
          onClick={() => {
            onClick(item.id);
          }}
          className={cn(sortDropdownItem, {
            [active]: selectedItem === item.id,
          })}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}
