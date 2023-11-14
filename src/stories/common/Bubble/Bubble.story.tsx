import React from "react";
import { Bubble } from "../../../common/Bubble/Bubble";

export const BubbleStory = () => (
  <Bubble
    mode="bubbleDesktopSort"
    text="товары"
    layout="desktop"
    isDropdown={true}
  />
);

BubbleStory.storyName = "Bubbles";
