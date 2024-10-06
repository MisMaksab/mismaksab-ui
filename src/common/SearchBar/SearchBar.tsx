"use client";

import cn from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import searchSvg from "../../assets/icons/search.svg";
import {
  defaultStyles,
  desktopExpanedCN,
  hideInputCN,
  highlightCN,
  mobileBurgerMenuCN,
  mobileExpandedCN,
  mobileShrinkedCN,
  searchInput,
  searchSvgCN,
  searchSvgContainer,
} from "./styles";
import { hide } from "../ShrinkButton/styles";
import { CloseCross } from "../CloseCross/CloseCross";

type SearchBarStateType =
  | "desktopExpanded"
  | "mobileBurgerMenu"
  | "mobileExpanded"
  | "mobileShrinked";

interface SearchBarProps {
  searchPathWithoutValue: string;
  state: SearchBarStateType;
  placeHolderText?: string;
}

export function SearchBar({
  searchPathWithoutValue,
  placeHolderText = "",
  state,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [enableSearch, setEnableSearch] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [shown, setShown] = useState<boolean>(false);
  const [hideInput, setHideInput] = useState<boolean>(
    state === "mobileShrinked"
  );

  const onChangeCb = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (e.target.value === "") {
      setShown(false);
    } else {
      setShown(true);
    }
  }, []);

  const handleSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (enableSearch)
        window.location.href = `${searchPathWithoutValue}${value}`;
    },
    [value]
  );

  const handleMobileShrinkedClick = useCallback(() => {
    setHideInput((val) => !val);
  }, []);

  useEffect(() => {
    state === "mobileShrinked" && !hideInput && inputRef.current?.focus();
  }, [hideInput]);

  useEffect(() => {
    if (value.trim() !== "" || (state === "mobileShrinked" && !hideInput)) {
      setEnableSearch(true);
    } else {
      setEnableSearch(false);
    }
  }, [value, hideInput, state]);

  function closeCrossClickCb() {
    setValue("");
    setEnableSearch(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(defaultStyles, {
        [highlightCN]: shown,
        [desktopExpanedCN]: state === "desktopExpanded",
        [mobileBurgerMenuCN]: state === "mobileBurgerMenu",
        [mobileExpandedCN]: state === "mobileExpanded",
        [mobileShrinkedCN]: state === "mobileShrinked",
        [hideInputCN]: state === "mobileShrinked" && hideInput,
      })}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder={placeHolderText}
        value={value}
        onFocus={() => setShown(true)}
        onBlur={() => setShown(false)}
        onChange={onChangeCb}
        className={searchInput}
      />
      <button
        type="submit"
        className={searchSvgContainer}
        onClick={handleMobileShrinkedClick}
      >
        {enableSearch ? (
          <CloseCross
            type="searchCross"
            mode={"searchDefault"}
            onClick={closeCrossClickCb}
          />
        ) : (
          <div
            className={searchSvgCN}
            dangerouslySetInnerHTML={{ __html: searchSvg }}
          />
        )}
      </button>
    </form>
  );
}
