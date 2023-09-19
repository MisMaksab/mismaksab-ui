import React from "react";
import { MobileLinkPopup } from "../../../mobile/MobileLinkPopup/MobileLinkPopup";
import { MobileCheckboxPopup } from "../../../mobile/MobileCheckboxPopup/MobileCheckboxPopup";

const LANGUAGES_ARR = [
  {text: 'Estonian', id: 'est', link: '/'},
  {text: 'Russian', id: 'rus', link: '/'},
  {text: 'English', id: 'eng', link: '/'},
]


export const PopupStory = () => (
  <MobileCheckboxPopup selectedItems={['est']} mode="popupBlue" hidePopupCb={()=>{}} title='Магазины' data={LANGUAGES_ARR} active={true} type="multiple"/>
);

PopupStory.storyName = "Header";
