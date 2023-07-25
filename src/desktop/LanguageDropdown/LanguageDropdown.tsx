import React, { useState } from "react";
import cn from "classnames";
import arrow from "../../assets/icons/arrow.svg";
// import useOutsideClick from "../../hooks/useOutsideClick";
import styles from "./LanguageDropdown.scss";

interface Props {
  selectedLanguage: string;
  // languages: string[]; как сделать обьект?
}

export function LanguageDropdown({ selectedLanguage, languages}: Props) {
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
        {languages.map(lang => 
          <a href="/">
            <li className={cn(styles.languageLang, {
              [styles.active]: selectedLanguage === lang.short
            })}>
              <span className={styles.shortText}>{lang.short}</span>
              <span className={styles.longText}>{lang.long}</span>
            </li>
          </a>
        )}
      </ul>
    </div>
  );
}
