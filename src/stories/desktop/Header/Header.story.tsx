import React from "react";
import { Info } from "../../../desktop/Info/Info";
import { Logo } from "../../../desktop/Logo/Logo";
import { Header } from '../../../desktop/Header/Header';
import { LanguageDropdown } from '../../../desktop/LanguageDropdown/LanguageDropdown';
import { MyListButton } from '../../../desktop/MyListButton/MyListButton';
import { SearchBar } from '../../../common/SearchBar/SearchBar';

const LANGUAGES_ARR = [{short:'rus',long:'russian'},{short:'eng',long:'english'},{short:'est',long:'estonian'}]

export const HeaderStory = () => (
  <Header
    info={<Info />}
    logo={<Logo title="MisMaksab" subtitle="Скидки в магазинах эстонии" />}
    searchBar={<SearchBar onChange={(val: string) => null} placeHolderText="Найти товар" />}
    languages={<LanguageDropdown selectedLanguage="est" languages={LANGUAGES_ARR} />}
    myListButton={<MyListButton buttonText="Мой список" />}
  />
);

HeaderStory.storyName = "Header";
