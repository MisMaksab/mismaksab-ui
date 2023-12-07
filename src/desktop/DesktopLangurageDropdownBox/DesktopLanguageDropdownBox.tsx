import React from "react";
import cn from "classnames";
// import mark from "../../assets/icons/languageDropdownIcon.svg";
import { dropdown, shown } from "../DesktopDropdownBoxStyles";
import {
  active,
  language,
  languageLang,
  longText,
  shortText,
  markCN,
  languageLink,
} from "./styles";

interface DesktopLanguageDropdownBoxProps {
  data: Array<{ id: string; text: string; link: string }>;
  activeSelection: boolean;
  selectedLanguage: string;
}

export function DesktopLanguageDropdownBox({
  data,
  activeSelection,
  selectedLanguage,
}: DesktopLanguageDropdownBoxProps) {
  return (
    <ul className={cn(dropdown, language, activeSelection && shown)}>
      {data.map((lang) => (
        <a key={lang.id} href={lang.link} className={languageLink}>
          <li
            className={cn(languageLang, {
              [active]: selectedLanguage === lang.id,
            })}
          >
            <span className={shortText}>{lang.id}</span>
            <span className={longText}>{lang.text}</span>
            {selectedLanguage === lang.id && (
              <img
                className={markCN}
                // src={mark}
              />
            )}
          </li>
        </a>
      ))}
    </ul>
  );
}