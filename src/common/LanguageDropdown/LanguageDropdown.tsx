"use client";

import { useCallback, useState } from "react";
import { DropdownItemInterface } from "../../common/DropdownItemInterface";
import { LayoutProp } from "../../common/LayoutProp";
import { DesktopLanguageDropdownBox } from "../../desktop/DesktopLangurageDropdownBox/DesktopLanguageDropdownBox";
import { MobileLinkPopup } from "../../mobile/MobileLinkPopup/MobileLinkPopup";
import { MobilePopupModeEnum } from "../../mobile/MobilePopupModeEnum";
import { YellowButton } from "../YellowButton/YellowButton";
import { language } from "./styles";

interface LanguageDropdownProps extends LayoutProp {
  selectedLanguage: string;
  data: DropdownItemInterface[];
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
          mode={MobilePopupModeEnum.popupDefault}
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
