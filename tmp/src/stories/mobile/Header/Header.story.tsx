import React from "react";
import { LanguageDropdown } from '../../../common/LanguageDropdown/LanguageDropdown';
import { SearchBar } from '../../../common/SearchBar/SearchBar';
import { MobileHeader } from "../../../mobile/MobileHeader/MobileHeader";
import { MobileHeaderLogo } from "../../../mobile/MobileHeaderLogo/MobileHeaderLogo";
import { MobileHeaderBurger } from "../../../mobile/MobileHeaderBurger/MobileHeaderBurger";

const LANGUAGES_ARR = [{short:'rus',long:'russian'},{short:'eng',long:'english'},{short:'est',long:'estonian'}]

export const HeaderStory = () => (
  <MobileHeader
    burger={<MobileHeaderBurger/>}
    logo={<MobileHeaderLogo title="MisMaksab" subtitle="Скидки в магазинах эстонии" />}
    languages={<LanguageDropdown selectedLanguage="est" languages={LANGUAGES_ARR} layout="mobile" />}
  />
);

HeaderStory.storyName = "Header";
