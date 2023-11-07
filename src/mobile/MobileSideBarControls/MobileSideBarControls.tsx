import React from "react";

import { SearchBar } from "../../common/SearchBar/SearchBar";
import { LanguageDropdown } from "../../common/LanguageDropdown/LanguageDropdown";
import { sideBarMobileControls } from "./styles";

const LANGUAGES_ARR = [
  { text: "Estonian", id: "est", link: "/" },
  { text: "Russian", id: "rus", link: "/" },
  { text: "English", id: "eng", link: "/" },
];

export function MobileSideBarControls() {
  return (
    <div className={sideBarMobileControls}>
      <SearchBar
        sideBarOpen={true}
        onChange={(val: string) => null}
        placeHolderText="Найти в MisMaksab"
      />
      <LanguageDropdown
        layout="mobile"
        selectedLanguage="est"
        data={LANGUAGES_ARR}
      />
    </div>
  );
}
