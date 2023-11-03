import React from 'react'
import styles from './DesktopLanguages.scss'
import cn from 'classnames';
import mark from "../../assets/icons/languageDropdownIcon.svg";

interface DesktopLanguagesProps {
  data: Array<{id: string, text: string, link: string}>;
  activeSelection: boolean;
  selectedLanguage: string;
}

export function DesktopLanguages({data, activeSelection, selectedLanguage}: DesktopLanguagesProps) {
  return (
    <ul className={cn(styles.languageAll, activeSelection && styles.shown)}>
        {data.map(lang =>
          <a key={lang.id} href={lang.link} className={styles.languageLink}>
            <li className={cn(styles.languageLang, {
              [styles.active]: selectedLanguage === lang.id
            })}>
              <span className={styles.shortText}>{lang.id}</span>
              <span className={styles.longText}>{lang.text}</span>
              {selectedLanguage === lang.id &&
                <img className={styles.mark} src={mark}/>
              }
            </li>
          </a>
        )}
      </ul>
  )
}
