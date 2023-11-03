import React from "react";
import { LanguageDropdown } from '../../../common/LanguageDropdown/LanguageDropdown';
import { MobileHeader } from "../../../mobile/MobileHeader/MobileHeader";
import { MobileHeaderLogo } from "../../../mobile/MobileHeaderLogo/MobileHeaderLogo";
import { MobileHeaderBurger } from "../../../mobile/MobileHeaderBurger/MobileHeaderBurger";

const LANGUAGES_ARR = [
  {text: 'Estonian', id: 'est', link: '/'},
  {text: 'Russian', id: 'rus', link: '/'},
  {text: 'English', id: 'eng', link: '/'},
]

export const HeaderStory = () => (
  <MobileHeader
    burger={<MobileHeaderBurger title={"Катего"}/>}
    logo={<MobileHeaderLogo title="MisMaksab" />}
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
