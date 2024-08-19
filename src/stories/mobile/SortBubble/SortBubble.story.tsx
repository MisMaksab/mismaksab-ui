import { MobileCheckboxPopupType } from "../../../mobile/MobileCheckboxPopup/MobileCheckboxPopup";
import { MobileSortBubble } from "../../../mobile/MobileSortBubble/MobileSortBubble";
import React from "react";

const POPUP_DATA = [
  { text: "Estonian", id: "est", link: "/" },
  { text: "Russian", id: "rus", link: "/" },
  { text: "English", id: "eng", link: "/" },
];

export const SortBubbleStory = () => (
  <>
    <MobileSortBubble
      bubbleText="sortirovka"
      bubbleMode="bubbleBlue"
      popupData={POPUP_DATA}
      popupType="multiple"
      popupMode="popupBlue"
      onPopupChange={(val) => console.log(val)}
      popupDefaultOption="est"
    />
  </>
);

SortBubbleStory.storyName = "sort bubble";
