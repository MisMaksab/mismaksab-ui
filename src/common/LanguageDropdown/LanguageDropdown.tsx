"use client";

import { useEffect, useCallback, useMemo, useState } from "react";
import { DropdownItemInterface } from "../../common/DropdownItemInterface";
import { LayoutProp } from "../../common/LayoutProp";
import { DesktopLanguageDropdownBox } from "../../desktop/DesktopLangurageDropdownBox/DesktopLanguageDropdownBox";
import { MobileLinkPopup } from "../../mobile/MobileLinkPopup/MobileLinkPopup";
import { YellowButton } from "../YellowButton/YellowButton";
import { language } from "./styles";

interface LanguageDropdownProps extends LayoutProp {
  selectedLanguage: string;
  data: DropdownItemInterface[];
  mobilePopupTitle?: string;
}

export function LanguageDropdown({
  selectedLanguage,
  layout,
  data,
  mobilePopupTitle = "Language",
}: LanguageDropdownProps) {
  const [activeSelection, setActiveSelection] = useState(false);
  const hidePopupCb = useCallback(() => setActiveSelection(false), []);
  const [url, setUrl] = useState("");
  const changePopupVisibilityCb = useCallback(
    () => setActiveSelection((val) => !val),
    []
  );
  const langOptions = useMemo(() => data.map((lang) => lang.path), [data]);
  const selectedData = useMemo(
    () => data.find((lng) => lng.id === selectedLanguage),
    [data, selectedLanguage]
  );
  const preparedData = useMemo(() => {
    return data.map((langParams) => {
      return {
        ...langParams,
        link: chageUrlLang(url, langOptions, langParams.path),
      };
    });
  }, [data, selectedLanguage, url]);
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <>
      <div className={language}>
        <YellowButton
          layout={layout}
          text={selectedData?.path.toUpperCase()}
          onClick={changePopupVisibilityCb}
          isActive={activeSelection}
        />
        {layout === "desktop" && (
          <DesktopLanguageDropdownBox
            data={preparedData}
            activeSelection={activeSelection}
            selectedLanguage={selectedLanguage}
          />
        )}
      </div>

      {layout === "mobile" && (
        <MobileLinkPopup
          mode="popupDefault"
          title={mobilePopupTitle}
          data={preparedData}
          active={activeSelection}
          hidePopupCb={hidePopupCb}
          selectedItem={selectedLanguage}
        />
      )}
    </>
  );
}

function chageUrlLang(url: string, langs: string[], newLang: string): string {
  const pattern = new RegExp(`\/(${langs.join("|")})`);
  const newUrl = url.replace(pattern, `/${newLang}/`);
  return newUrl;
}
