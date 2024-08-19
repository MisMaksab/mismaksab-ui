import { MobileSearchBar } from "../../../mobile/MobileSearchBar/MobileSearchBar";
import React from "react";

export const SearchBarStory = () => (
  <MobileSearchBar
    onChange={function (value: string): void {
      throw new Error("Function not implemented.");
    }}
    expandedByDefault={true}
    placeHolderText="Search"
    showMoreText={"More"}
    showLessText={"Hide"}
  />
);

SearchBarStory.storyName = "mobile searchbar";
