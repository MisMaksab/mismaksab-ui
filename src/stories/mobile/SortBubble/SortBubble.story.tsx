import { MobileSortBubble } from "mobile/MobileSortBubble/MobileSortBubble";
import React from "react";

const POPUP_DATA = [
  { text: "Estonian", id: "est", link: "/" },
  { text: "Russian", id: "rus", link: "/" },
  { text: "English", id: "eng", link: "/" },
];

const POPUP2_DATA = [
  { text: "Estonian", id: "1", link: "/" },
  { text: "Russian", id: "2", link: "/" },
  { text: "Latvian", id: "3", link: "/" },
  { text: "English", id: "4", link: "/" },
];

export const SortBubbleStory = () => (
  <>
    <MobileSortBubble
      bubbleText="sortirovka"
      bubbleMode="bubbleLightblue"
      popupData={POPUP_DATA}
      popupType="multiple"
      popupMode={"popupGreen"}
      onPopupChange={(val) => console.log(val)}
      popupDefaultOption="est"
    />
    <MobileSortBubble
      bubbleText="sortirovka"
      bubbleMode="bubbleBlue"
      popupData={POPUP2_DATA}
      popupType="multiple"
      popupMode={"popupGreen"}
      onPopupChange={(val) => console.log(val)}
      popupDefaultOption="2"
    />
  </>
);

SortBubbleStory.storyName = "sort bubble";
//почему с одним массивом данных все ломается
