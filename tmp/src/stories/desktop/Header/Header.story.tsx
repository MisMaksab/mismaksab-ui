import React from "react";
import { DesktopHeaderLogo } from "../../../desktop/DesktopHeaderLogo/DesktopHeaderLogo";
import { DesktopHeader } from '../../../desktop/DesktopHeader/DesktopHeader';
import { LanguageDropdown } from '../../../common/LanguageDropdown/LanguageDropdown';
import { SearchBar } from '../../../common/SearchBar/SearchBar';

const LANGUAGES_ARR = [{short:'rus',long:'russian'},{short:'eng',long:'english'},{short:'est',long:'estonian'}]

export const HeaderStory = () => (
  <DesktopHeader
    logo={<DesktopHeaderLogo title="MisMaksab" subtitle="Скидки в магазинах эстонии" />}
    searchBar={<SearchBar onChange={(val: string) => null} placeHolderText="Найти товар" />}
    languages={<LanguageDropdown selectedLanguage="est" languages={LANGUAGES_ARR} layout="desktop" />}
  />
);

HeaderStory.storyName = "Header";
