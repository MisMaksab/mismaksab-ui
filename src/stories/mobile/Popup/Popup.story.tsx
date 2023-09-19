import React from "react";
import { MobileLinkPopup } from "../../../mobile/MobileLinkPopup/MobileLinkPopup";
import { MobileCheckboxPopup } from "../../../mobile/MobileCheckboxPopup/MobileCheckboxPopup";

const data = [
  {text: 'Estonian', id: 'est', link: '/'},
  {text: 'Russian', id: 'rus', link: '/'},
  {text: 'English', id: 'eng', link: '/'},
]


export const PopupStory = () => (
  <>
{/* <MobileCheckboxPopup selectedItem={'est'} mode="popupBlue" hidePopupCb={()=>{}} title='Магазины' data={data} active={true}*/}
<MobileCheckboxPopup selectedItems={['est']} mode="popupBlue" hidePopupCb={()=>{}} title='Магазины' data={data} active={true} type="multiple"/>
  </>
);

PopupStory.storyName = "Header";
