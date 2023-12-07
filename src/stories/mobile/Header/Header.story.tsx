import React from "react";
import { MobileHeader } from "../../../mobile/MobileHeader/MobileHeader";
import { MobileHeaderLogo } from "../../../mobile/MobileHeaderLogo/MobileHeaderLogo";
import { MobileHeaderBurger } from "../../../mobile/MobileHeaderBurger/MobileHeaderBurger";
import { MobileSearchBar } from "../../../mobile/MobileSearchBar/MobileSearchBar";

// const LANGUAGES_ARR = [
//   { text: "Estonian", id: "est", link: "/" },
//   { text: "Russian", id: "rus", link: "/" },
//   { text: "English", id: "eng", link: "/" },
// ];

export const HeaderStory = () => (
  <MobileHeader
    leftItem={<MobileHeaderBurger title={"Катего"} />}
    centerItem={<MobileHeaderLogo title="MisMaksab" />}
    rightItem={
      <MobileSearchBar
        expandedByDefault={false}
        placeHolderText="Найти товар"
        onChange={() => {}}
      />
    }
  />
);

HeaderStory.storyName = "Header";
