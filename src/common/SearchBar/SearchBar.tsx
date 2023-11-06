import React from "react";
import cn from "classnames";
import searchSvg from "../../assets/icons/search.svg";
import {
  search,
  searchInput,
  searchSvgContainer,
  shownCN,
  sideBarOpenCN,
} from "./styles";

interface Props {
  sideBarOpen?: boolean;
  placeHolderText?: string;
  onChange: (value: string) => void;
}

export function SearchBar({
  sideBarOpen = false,
  placeHolderText,
  onChange,
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
        <img className={searchSvg} src={searchSvg} />
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
