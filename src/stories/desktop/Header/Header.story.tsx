import React from "react";
import { DesktopHeaderLogo } from "../../../desktop/DesktopHeaderLogo/DesktopHeaderLogo";
import { DesktopHeader } from "../../../desktop/DesktopHeader/DesktopHeader";
import { LanguageDropdown } from "../../../common/LanguageDropdown/LanguageDropdown";
import { SearchBar } from "../../../common/SearchBar/SearchBar";

const LANGUAGES_ARR = [
  { text: "Estonian", id: "est", link: "/" },
  { text: "Russian", id: "rus", link: "/" },
  { text: "English", id: "eng", link: "/" },
];

export const HeaderStory = () => (
  <DesktopHeader
    logo={
      <DesktopHeaderLogo
        title="MisMaksab"
        subtitle="Скидки в магазинах эстонии"
      />
    }
    searchBar={
      <SearchBar
        placeHolderText="Найти товар"
        searchPathWithoutValue={"/ru/search?query="}
        state={"desktopExpanded"}
      />
    }
    languages={
      <LanguageDropdown
        selectedLanguage="est"
        data={LANGUAGES_ARR}
        layout="desktop"
      />
    }
  />
);

HeaderStory.storyName = "Header";
