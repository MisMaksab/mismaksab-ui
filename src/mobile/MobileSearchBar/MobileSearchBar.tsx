import React, { useCallback, useState } from "react";
import cn from "classnames";
// import searchSvg from "../../assets/icons/search.svg";
import {
  search,
  searchInput,
  searchSvgContainer,
  shownCN,
  sideBarOpenCN,
  searchSvgCN,
  searchControl,
  active,
  searchPanel,
  searchPanelResults,
  searchPanelControl,
  searchPanelInput,
  expanded,
  input,
  searchPanelInputCross,
} from "./styles";
import { ShrinkButton } from "../../common/ShrinkButton/ShrinkButton";
import { CloseCross } from "common/CloseCross/CloseCross";

interface Props {
  placeHolderText?: string;
  onChange: (value: string) => void;
  expandedByDefault: boolean;
}

export function MobileSearchBar({
  placeHolderText,
  onChange,
  expandedByDefault,
}: Props) {
  const [value, setValue] = React.useState("");

  // animation if input is clicked
  const [shown, setShown] = React.useState(false);

  const onChangeCb = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
  );

  const clearInputValueCb = useCallback(() => {
    setValue("");
  }, []);

  function handleChangeSearchPanelVisibility() {
    setShown((val) => !val);
  }

  return (
    <div>
      <form
        className={cn(search, sideBarOpenCN, {
          [shownCN]: shown,
        })}
      >
        <div
          onClick={handleChangeSearchPanelVisibility}
          className={cn(searchControl, {
            [expanded]: expandedByDefault,
            [shownCN]: shown,
          })}
        >
          {expandedByDefault && (
            <input
              type="text"
              placeholder={placeHolderText}
              className={searchInput}
            />
          )}
          <div className={searchSvgContainer}>
            {/* <img
              className={searchSvgCN}
              // src={searchSvg}
            /> */}
            @
          </div>
        </div>

        <div
          className={cn(searchPanel, {
            [active]: shown,
          })}
        >
          <div className={searchPanelControl}>
            <ShrinkButton
              rotate={false}
              onClick={handleChangeSearchPanelVisibility}
            />
            <div className={searchPanelInput}>
              <input
                type="text"
                placeholder={placeHolderText}
                value={value}
                onChange={onChangeCb}
                className={input}
              />
              <div
                className={cn(searchPanelInputCross, {
                  [active]: value !== "",
                })}
              >
                <CloseCross
                  type="searchCross"
                  mode="searchDefault"
                  onClick={clearInputValueCb}
                />
              </div>
            </div>
          </div>
          <div className={searchPanelResults}></div>
        </div>
      </form>
    </div>
  );
}
