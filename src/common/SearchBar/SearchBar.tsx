import React from "react";
import cn from "classnames";
import styles from "./SearchBar.scss";
import { SearchSvg } from "../SearchSvg/SearchSvg";

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
      className={cn(styles.search, {
        [styles.shown]: shown,
        [styles.sideBarOpen]: sideBarOpen,
      })}
    >
      <input
        type="text"
        placeholder={placeHolderText}
        value={value}
        onFocus={() => setShown(true)}
        onBlur={() => setShown(false)}
        onChange={onChangeCb}
        className={styles.searchInput}
      />
      <SearchSvg />
      {/* <div className={styles.searchInput}>
        <div className={styles.searchSvgContainer}>
          <img className={styles.searchSvg} src={searchSvg} />
        </div>

        <input
          type="text"
          placeholder={placeHolderText}
          value={value}
          onFocus={() => setShown(true)}
          onBlur={() => setShown(false)}
          onChange={onChangeCb}
          className={styles.searchInput}
        />
      </div> */}
    </form>
  );
}
