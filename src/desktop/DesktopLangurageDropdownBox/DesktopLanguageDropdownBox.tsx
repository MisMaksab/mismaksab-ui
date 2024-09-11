import cn from "classnames";
import mark from "../../assets/icons/languageDropdownIcon.svg";
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
import { DropdownItemInterface } from "../../common/DropdownItemInterface";

interface DesktopLanguageDropdownBoxProps {
  data: DropdownItemInterface[];
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
        <a key={lang.id} href={lang.path} className={languageLink}>
          <li
            className={cn(languageLang, {
              [active]: selectedLanguage === lang.id,
            })}
          >
            <span className={shortText}>{lang.id}</span>
            <span className={longText}>{lang.text}</span>
            {selectedLanguage === lang.id && (
              <div
                className={markCN}
                dangerouslySetInnerHTML={{ __html: mark }}
              />
            )}
          </li>
        </a>
      ))}
    </ul>
  );
}
