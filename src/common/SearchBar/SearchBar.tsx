"use client";

import cn from "classnames";
import { useCallback, useState } from "react";
import searchSvg from "../../assets/icons/search.svg";
import {
  search,
  searchInput,
  searchSvgCN,
  searchSvgContainer,
  shownCN,
  sideBarOpenCN,
} from "./styles";

interface SearchBarProps {
  sideBarOpen?: boolean;
  placeHolderText?: string;
}

export function SearchBar({
  sideBarOpen = false,
  placeHolderText,
}: SearchBarProps) {
  const [value, setValue] = useState("");
  const [shown, setShown] = useState(false);

  const onChangeCb = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);

      if (e.target.value === "") {
        setShown(false);
      } else {
        setShown(true);
      }
    },
    []
  );

  return (
    <form
      className={cn(search, {
        [shownCN]: shown,
        [sideBarOpenCN]: sideBarOpen,
      })}
    >
      <input
        type="text"
        placeholder={placeHolderText}
        value={value}
        onFocus={() => setShown(true)}
        onBlur={() => setShown(false)}
        onChange={onChangeCb}
        className={searchInput}
      />
      <div className={searchSvgContainer}>
        <div
          className={searchSvgCN}
          dangerouslySetInnerHTML={{ __html: searchSvg }}
        />
      </div>
      {/* <div className={searchInput}>
        <div className={searchSvgContainer}>
          <img className={searchSvg} src={searchSvg} />
        </div>

        <input
          type="text"
          placeholder={placeHolderText}
          value={value}
          onFocus={() => setShown(true)}
          onBlur={() => setShown(false)}
          onChange={onChangeCb}
          className={searchInput}
        />
      </div> */}
    </form>
  );
}
