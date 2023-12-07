import React from "react";

import { LanguageDropdown } from "../../common/LanguageDropdown/LanguageDropdown";
import { sideBarMobileControls } from "./styles";
import { MobileSearchBar } from "../../mobile/MobileSearchBar/MobileSearchBar";

const LANGUAGES_ARR = [
  { text: "Estonian", id: "est", link: "/" },
  { text: "Russian", id: "rus", link: "/" },
  { text: "English", id: "eng", link: "/" },
];

export function MobileSideBarControls() {
  return (
    <div className={sideBarMobileControls}>
      <MobileSearchBar
        onChange={(val: string) => null}
        placeHolderText="Найти в MisMaksab"
        expandedByDefault={true}
      />
      <LanguageDropdown
        layout="mobile"
        selectedLanguage="est"
        data={LANGUAGES_ARR}
      />
    </div>
  );
}
