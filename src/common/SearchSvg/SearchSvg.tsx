import React from "react";
import cn from "classnames";
import searchSvg from "../../assets/icons/search.svg";
import { searchSvgContainer, header, searchSvgCN } from "./styles";

interface SearchSvgProps {
  onClick?: () => void;
  isHeader?: boolean;
}

export function SearchSvg({ onClick, isHeader = false }: SearchSvgProps) {
  return (
    <div
      className={cn(searchSvgContainer, { [header]: isHeader })}
      onClick={onClick}
    >
      <img className={searchSvgCN} src={searchSvg} />
    </div>
  );
}
