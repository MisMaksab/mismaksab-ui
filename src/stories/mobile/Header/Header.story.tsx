import React from "react";
import { MobileHeader } from "../../../mobile/MobileHeader/MobileHeader";
import { MobileHeaderLogo } from "../../../mobile/MobileHeaderLogo/MobileHeaderLogo";
import { MobileHeaderBurger } from "../../../mobile/MobileHeaderBurger/MobileHeaderBurger";
import { MobileSearchBar } from "../../../mobile/MobileSearchBar/MobileSearchBar";

export const HeaderStory = () => (
  <MobileHeader
    leftItem={<MobileHeaderBurger title={"Катего"} sideBarData={[]} />}
    centerItem={<MobileHeaderLogo title="MisMaksab" />}
    rightItem={
      <MobileSearchBar
        expandedByDefault={false}
        placeHolderText="Найти товар"
        onChange={() => {}}
        showMoreText={"more"}
        showLessText={"less"}
      />
    }
  />
);

HeaderStory.storyName = "Header";
