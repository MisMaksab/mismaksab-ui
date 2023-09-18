import React from "react";
import { LanguageDropdown } from '../../../common/LanguageDropdown/LanguageDropdown';
import { MobileHeader } from "../../../mobile/MobileHeader/MobileHeader";
import { MobileHeaderLogo } from "../../../mobile/MobileHeaderLogo/MobileHeaderLogo";
import { MobileHeaderBurger } from "../../../mobile/MobileHeaderBurger/MobileHeaderBurger";
import { MobilePopup } from "../../../mobile/MobilePopup/MobilePopup";


const LANGUAGES_ARR = [
  {text: 'Estonian', id: 'est', link: '/'},
  {text: 'Russian', id: 'rus', link: '/'},
  {text: 'English', id: 'eng', link: '/'},
]

export const HeaderStory = () => (
  <MobileHeader
    burger={<MobileHeaderBurger/>}
    logo={<MobileHeaderLogo title="MisMaksab" subtitle="Скидки в магазинах эстонии" />}
    languages={
      <LanguageDropdown
        selectedLanguage="est" 
        layout="mobile"
        data={LANGUAGES_ARR}
      />
    }
  />
);

HeaderStory.storyName = "Header";
