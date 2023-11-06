import React from "react";
import searchSvg from "../../assets/icons/search.svg";
import styles from "./SearchSvg.scss";
import cn from "classnames";

interface SearchSvgProps {
  onClick?: () => void;
  isHeader?: boolean;
}

export function SearchSvg({ onClick, isHeader = false }: SearchSvgProps) {
  return (
    <div
      className={cn(styles.searchSvgContainer, { [styles.header]: isHeader })}
      onClick={onClick}
    >
      <img className={styles.searchSvg} src={searchSvg} />
    </div>
  );
}
