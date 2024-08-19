import React from "react";
import { Bubble, BubbleModeType } from "../../../common/Bubble/Bubble";

export const BubbleStory = () => (
  <Bubble
    mode="bubbleBlue"
    text="товары"
    layout="desktop"
    isDropdown={true}
    onClick={() => {}}
  />
);

BubbleStory.storyName = "Bubbles";
