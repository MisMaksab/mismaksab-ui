"use client";

import cn from "classnames";
import { useCallback, useState } from "react";
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
  const [value, setValue] = useState("");
  const [shown, setShown] = useState(false);
  const [hideInput, setHideInput] = useState(state === "mobileShrinked");

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
      console.log(3);
      e.preventDefault();
      if (value.trim() === "") return false;
      window.location.href = `${searchPathWithoutValue}${value}`;
    },
    [value]
  );

  const handleMobileShrinkedClick = useCallback(() => {
    setHideInput((val) => !val);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(defaultStyles, {
        [highlightCN]: shown,
        [desktopExpanedCN]: state === "desktopExpanded",
        [mobileBurgerMenuCN]: state === "mobileBurgerMenu",
        [mobileExpandedCN]: state === "mobileExpanded",
        [mobileShrinkedCN]: state === "mobileShrinked",
        [hideInputCN]: hideInput,
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
      <button
        type={value.length > 0 ? "submit" : "button"}
        className={searchSvgContainer}
        onClick={handleMobileShrinkedClick}
      >
        <div
          className={searchSvgCN}
          dangerouslySetInnerHTML={{ __html: searchSvg }}
        />
      </button>
    </form>
  );
}
