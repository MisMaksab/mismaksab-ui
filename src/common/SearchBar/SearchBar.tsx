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
  searchPathWithoutValue: string;
  sideBarOpen?: boolean;
  placeHolderText?: string;
}

export function SearchBar({
  searchPathWithoutValue,
  sideBarOpen = false,
  placeHolderText = "",
}: SearchBarProps) {
  const [value, setValue] = useState("");
  const [shown, setShown] = useState(false);

  const onChangeCb = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (e.target.value === "") {
      setShown(false);
    } else {
      setShown(true);
    }
  }, []);

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value.trim() === "") return false;
    window.location.href = `${searchPathWithoutValue}${value}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
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
      <button type="submit" className={searchSvgContainer}>
        <div
          className={searchSvgCN}
          dangerouslySetInnerHTML={{ __html: searchSvg }}
        />
      </button>
    </form>
  );
}
