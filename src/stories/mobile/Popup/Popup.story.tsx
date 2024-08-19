import React from "react";
import {
  MobileCheckboxPopup,
  MobileCheckboxPopupType,
} from "../../../mobile/MobileCheckboxPopup/MobileCheckboxPopup";

const LANGUAGES_ARR = [
  { text: "Estonian", id: "est", link: "/" },
  { text: "Russian", id: "rus", link: "/" },
  { text: "English", id: "eng", link: "/" },
];

export const PopupStory = () => (
  <MobileCheckboxPopup
    handleSelectedItemsCb={() => {}}
    selectedItems={["est"]}
    mode="popupBlue"
    hidePopupCb={() => {}}
    title="Магазины"
    data={LANGUAGES_ARR}
    active={true}
    type="single"
  />
);

PopupStory.storyName = "popup";
