import React from "react";
import { Bubble } from "../../../common/Bubble/Bubble";

export const BubbleStory = () => (
  <Bubble
    mode="bubbleLightOrange"
    text="товары"
    layout="desktop"
    isDropdown={true}
  />
);

BubbleStory.storyName = "Bubbles";
