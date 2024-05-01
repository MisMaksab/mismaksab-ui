import { BubbleModeEnum } from "../../../common/Bubble/Bubble";
import { MobileCheckboxPopupTypeEnum } from "../../../mobile/MobileCheckboxPopup/MobileCheckboxPopup";
import { MobilePopupModeEnum } from "../../../mobile/MobilePopupModeEnum";
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
      bubbleMode={BubbleModeEnum.bubbleBlue}
      popupData={POPUP_DATA}
      popupType={MobileCheckboxPopupTypeEnum.multiple}
      popupMode={MobilePopupModeEnum.popupBlue}
      onPopupChange={(val) => console.log(val)}
      popupDefaultOption="est"
    />
  </>
);

SortBubbleStory.storyName = "sort bubble";
