import React from "react";
import cn from "classnames";
import { dropdown, shown } from "desktop/DesktopDropdownBoxStyles";
import { active, sort, sortItem } from "./styles";

interface DesktopLanguageDropdownBoxProps {
  data: any[];
  activeSelection: boolean;
  selectedItem: number;
  onClick: () => void;
}

export function DesktopSortDropdownBox({
  data,
  activeSelection,
  selectedItem,
  onClick,
}: DesktopLanguageDropdownBoxProps) {
  return (
    <ul className={cn(dropdown, sort, activeSelection && shown)}>
      {data.map((item) => (
        <li
          onClick={onClick}
          className={cn(sortItem, {
            [active]: selectedItem === item.id,
          })}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}
