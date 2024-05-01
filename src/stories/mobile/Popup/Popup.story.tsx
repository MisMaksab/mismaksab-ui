import React from "react";
import {
  MobileCheckboxPopup,
  MobileCheckboxPopupTypeEnum,
} from "../../../mobile/MobileCheckboxPopup/MobileCheckboxPopup";
import { MobilePopupModeEnum } from "../../../mobile/MobilePopupModeEnum";

const LANGUAGES_ARR = [
  { text: "Estonian", id: "est", link: "/" },
  { text: "Russian", id: "rus", link: "/" },
  { text: "English", id: "eng", link: "/" },
];

export const PopupStory = () => (
  <MobileCheckboxPopup
    handleSelectedItemsCb={() => {}}
    selectedItems={["est"]}
    mode={MobilePopupModeEnum.popupBlue}
    hidePopupCb={() => {}}
    title="Магазины"
    data={LANGUAGES_ARR}
    active={true}
    type={MobileCheckboxPopupTypeEnum.single}
  />
);

PopupStory.storyName = "popup";
