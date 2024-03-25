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
  path: string;
  text: string;
}

interface DesktopSortDropdownProps {
  data: DesktopDropdownItemInterface[];
  onChange: (path: string) => void;
  defaultSelectedSortOption: string;
}

export function DesktopSortDropdown({
  data,
  onChange,
  defaultSelectedSortOption,
}: DesktopSortDropdownProps) {
  const [activeSelection, setActiveSelection] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultSelectedSortOption);
  const handleDropdownBoxItemClickCb = useCallback(
    (path: string) => {
      if (selectedItem === path) return;
      setSelectedItem(path);
      onChange(path);
    },
    [selectedItem]
  );

  const selectedOptionData = data.find((item) => item.path === selectedItem);
  const selectedOptionText = selectedOptionData ? selectedOptionData.text : "";

  return (
    <div
      className={sort}
      onClick={() => {
        setActiveSelection((val) => !val);
      }}
    >
      <DropdownButton text={selectedOptionText} />
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
  text: string;
}

function DropdownButton({ text }: DropdownButtonProps) {
  return (
    <div className={sortBtn}>
      {text}
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
  selectedItem: string;
  data: DesktopDropdownItemInterface[];
  onClick: (path: string) => void;
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
            onClick(item.path);
          }}
          className={cn(sortDropdownItem, {
            [active]: selectedItem === item.path,
          })}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}
