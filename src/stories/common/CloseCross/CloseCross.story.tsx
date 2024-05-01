import React from "react";
import { CloseCross } from "../../../common/CloseCross/CloseCross";
import { MobilePopupModeEnum } from "../../../mobile/MobilePopupModeEnum";

export const CloseCrossStory = () => (
  <CloseCross mode={MobilePopupModeEnum.popupBlue} onClick={() => null} />
);

CloseCrossStory.storyName = "CloseCross";
