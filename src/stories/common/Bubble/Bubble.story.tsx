import React from "react";
import { Bubble, BubbleModeEnum } from "../../../common/Bubble/Bubble";

export const BubbleStory = () => (
  <Bubble
    mode={BubbleModeEnum.bubbleBlue}
    text="товары"
    layout="desktop"
    isDropdown={true}
    onClick={() => {}}
  />
);

BubbleStory.storyName = "Bubbles";
