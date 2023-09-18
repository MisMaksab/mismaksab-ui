import React from "react";
import { MobilePopup } from "../../../mobile/MobilePopup/MobilePopup";

const data = [
  {text: 'Estonian', link: '/'},
  {text: 'Russian', link: '/'},
  {text: 'English', link: '/'},
]


export const PopupStory = () => (
  <>
  <a href="/">sdf</a>
<MobilePopup title='Магазины' data={data} active={true} type="radio"/>
  </>
);

PopupStory.storyName = "Header";
