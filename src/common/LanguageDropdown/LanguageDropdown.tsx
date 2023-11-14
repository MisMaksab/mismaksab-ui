import React, { useCallback, useState } from "react";
import { MobileLinkPopup } from "../../mobile/MobileLinkPopup/MobileLinkPopup";
import YellowButton from "../YellowButton/YellowButton";
import { language } from "./styles";
import { DesktopLanguageDropdownBox } from "desktop/DesktopLangurageDropdownBox/DesktopLanguageDropdownBox";

interface LanguageDropdownProps {
  selectedLanguage: string;
  layout: "mobile" | "desktop";
  data: { text: string; id: string; link: string }[];
}

export function LanguageDropdown({
  selectedLanguage,
  layout,
  data,
}: LanguageDropdownProps) {
  const [activeSelection, setActiveSelection] = useState(false);
  const hidePopupCb = useCallback(() => setActiveSelection(false), []);
  const changePopupVisibilityCb = useCallback(
    () => setActiveSelection((val) => !val),
    []
  );

  return (
    <>
      <div className={language}>
        <YellowButton
          layout={layout}
          text="RUS"
          onClick={changePopupVisibilityCb}
          isActive={activeSelection}
        />
        {layout === "desktop" && (
          <DesktopLanguageDropdownBox
            data={data}
            activeSelection={activeSelection}
            selectedLanguage={selectedLanguage}
          />
        )}
      </div>

      {layout === "mobile" && (
        <MobileLinkPopup
          mode="popupDefault"
          title="Язык"
          data={data}
          active={activeSelection}
          hidePopupCb={hidePopupCb}
          selectedItem={selectedLanguage}
        />
      )}
    </>
  );
}
