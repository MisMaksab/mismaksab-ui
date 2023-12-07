import React, { useState } from "react";
import cn from "classnames";
// import searchSvg from "../../assets/icons/search.svg";
import {
  search,
  searchInput,
  searchSvgContainer,
  shownCN,
  sideBarOpenCN,
  searchSvgCN,
} from "./styles";
import { ShrinkButton } from "../../common/ShrinkButton/ShrinkButton";

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

      if (e.target.value === "") {
        setShown(false);
      } else {
        setShown(true);
      }
    },
    [onChange]
  );

  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);

  function handleSearchSvgClick() {
    setIsSearchBarExpanded((val) => !val);
  }

  return (
    <div>
      {shown && <ShrinkButton rotate={false} onClick={() => {}} />}

      <form
        className={cn(search, sideBarOpenCN, {
          [shownCN]: shown,
        })}
      >
        {expandedByDefault ||
          (isSearchBarExpanded && (
            <input
              type="text"
              placeholder={placeHolderText}
              value={value}
              onFocus={() => setShown(true)}
              onBlur={() => setShown(false)}
              onChange={onChangeCb}
              className={searchInput}
            />
          ))}
        <div className={searchSvgContainer} onClick={handleSearchSvgClick}>
          <img
            className={searchSvgCN}
            // src={searchSvg}
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
    </div>
  );
}
