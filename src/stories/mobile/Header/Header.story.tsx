import React from "react";
import { MobileHeaderLogo } from "../../../mobile/MobileHeaderLogo/MobileHeaderLogo";
import { MobileHeader } from '../../../mobile/MobileHeader/MobileHeader';
import { LanguageDropdown } from '../../../common/LanguageDropdown/LanguageDropdown';
import { SearchBar } from '../../../common/SearchBar/SearchBar';
import {MobileHeaderBurger} from '../../../mobile/MobileHeaderBurger/MobileHeaderBurger';

const LANGUAGES_ARR = [{short:'rus',long:'russian'},{short:'eng',long:'english'},{short:'est',long:'estonian'}]

export const HeaderStory = () => (
  <MobileHeader
    logo={<MobileHeaderLogo title="MisMaksab"/>}
    burger={<MobileHeaderBurger/>}
    searchBar={<SearchBar onChange={(val: string) => null} placeHolderText="Найти товар" />}
    languages={<LanguageDropdown selectedLanguage="est" languages={LANGUAGES_ARR} layout="mobile" />}
  />
);

HeaderStory.storyName = "mobile Header";
