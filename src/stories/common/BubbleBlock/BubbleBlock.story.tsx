import React from "react";
import { BubbleBlock } from "../../../common/BubbleBlock/BubbleBlock";
import { BubbleModeEnum, BubbleProps } from "../../../common/Bubble/Bubble";

const bubbleData: BubbleProps[] = [
  {
    id: 0,
    mode: BubbleModeEnum.bubbleBlue,
    text: "Товары1",
    onClick: (val) => {
      val;
    },
    layout: "desktop",
  },
];

export const BubbleBlockStory = () => (
  <BubbleBlock
    layout="mobile"
    data={bubbleData}
    onClick={(val) => {
      console.log(val);
    }}
    activeBubbleMode={BubbleModeEnum.bubbleLightgreen}
    defaultSelectedBubble="Товары1"
  />
);

BubbleBlockStory.storyName = "Bubble block";
