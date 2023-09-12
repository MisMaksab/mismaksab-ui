import React, { useState } from "react";
import cn from "classnames";
import arrow from "../../assets/icons/arrow.svg";
import mark from "../../assets/icons/languageDropdownIcon.svg";
import styles from "./LanguageDropdown.scss";

interface LanguageDropdownProps {
  selectedLanguage: string;
  languages: Array<{short: string, long: string}>;
  layout?: 'mobile'|'desktop';
}

export function LanguageDropdown({ selectedLanguage, languages, layout}: LanguageDropdownProps) {
  const [activeSelection, setActiveSelection] = useState(false);

  return (
    <div className={cn(styles.language, styles[layout])}>
      <div className={styles.languageCurrent} onClick={() => setActiveSelection(!activeSelection)}>
        <span className={styles.languageCurrentLang}>{selectedLanguage}</span>
        <div
          className={cn(styles.svg, {
            [styles.rotate]: activeSelection,
          })}
        >
          <img className={styles.svgImg} src={arrow} alt="language svg" />
        </div>
      </div>
      <ul className={cn(styles.languageAll, activeSelection && styles.shown)}>
        {languages.map(lang => 
          <a href="/" className={styles.languageLink}>
            <li className={cn(styles.languageLang, {
              [styles.active]: selectedLanguage === lang.short
            })}>
              <span className={styles.shortText}>{lang.short}</span>
              <span className={styles.longText}>{lang.long}</span>
              {selectedLanguage === lang.short &&
                <img className={styles.mark} src={mark}/>
              }
            </li>
          </a>
        )}
      </ul>
    </div>
  );
}
