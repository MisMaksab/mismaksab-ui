import React, { useCallback, useState } from "react";
import cn from "classnames";
import arrow from "../../assets/icons/arrow.svg";
import styles from "./LanguageDropdown.scss";
import { MobileLinkPopup } from "../../mobile/MobileLinkPopup/MobileLinkPopup";
import DesktopLanguages from "../../desktop/DesktopLanguages/DesktopLanguages";

interface LanguageDropdownProps {
  selectedLanguage: string;
  layout: 'mobile'|'desktop';
  data: { text: string; id: string; link: string; }[];
}

export function LanguageDropdown({ selectedLanguage, layout, data}: LanguageDropdownProps) {
  const [activeSelection, setActiveSelection] = useState(false);
  const hidePopupCb = useCallback(() => setActiveSelection(false), []);

  return (
    <>
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
      {layout === 'desktop' &&
        <DesktopLanguages
          data={data} 
          activeSelection={activeSelection}
          selectedLanguage={selectedLanguage}
        />
      }
    </div>

    {layout === 'mobile' &&
      <MobileLinkPopup
        mode="popupDefault"
        title='Язык' 
        data={data} 
        active={activeSelection}
        hidePopupCb={hidePopupCb}
        selectedItem={selectedLanguage}
      />
    }
    </>
  );
}
