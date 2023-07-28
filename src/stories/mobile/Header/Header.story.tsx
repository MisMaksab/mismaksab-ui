import React from "react";
import { Logo } from "../../../mobile/Logo/Logo";
import { Header } from '../../../mobile/Header/Header';
import { LanguageDropdown } from '../../../desktop/LanguageDropdown/LanguageDropdown';
import { SearchBar } from '../../../common/SearchBar/SearchBar';
import {Burger} from '../../../mobile/Burger/Burger';

const LANGUAGES_ARR = [{short:'rus',long:'russian'},{short:'eng',long:'english'},{short:'est',long:'estonian'}]

export const HeaderStory = () => (
  <Header
    logo={<Logo title="MisMaksab"/>}
    burger={<Burger/>}
    searchBar={<SearchBar onChange={(val: string) => null} placeHolderText="Найти товар" />}
    languages={<LanguageDropdown selectedLanguage="est" languages={LANGUAGES_ARR} isMobile={true} />}
  />
);

HeaderStory.storyName = "mobile Header";
