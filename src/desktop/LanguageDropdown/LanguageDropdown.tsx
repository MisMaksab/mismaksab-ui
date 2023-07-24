import React, { useState } from "react";
import cn from "classnames";
import arrow from "../../assets/icons/arrow.svg";
// import useOutsideClick from "../../hooks/useOutsideClick";
import styles from "./LanguageDropdown.scss";

interface Props {
  selectedLanguage: string;
  languages: string[];
}

export function LanguageDropdown({ selectedLanguage, languages }: Props) {
  const [activeSelection, setActiveSelection] = useState(false);

  return (
    <div className={styles.language}>
      <div className={styles.languageCurrent} onClick={() => setActiveSelection(!activeSelection)}>
        <span className={styles.languageCurrentLang}>{selectedLanguage}</span>
        <div
          className={cn(styles.svg, {
            [styles.rotate]: activeSelection,
          })}
        >
          <img src={arrow} alt="language svg" />
        </div>
      </div>
      <ul className={cn(styles.languageAll, activeSelection && styles.shown)}>
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
      </ul>
    </div>
  );
}
