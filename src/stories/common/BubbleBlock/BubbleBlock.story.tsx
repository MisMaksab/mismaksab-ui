import React from "react";
import {
  BubbleBlock,
  BubbleBlockItemProps,
} from "../../../common/BubbleBlock/BubbleBlock";
import { BubbleModeEnum } from "../../../common/Bubble/Bubble";

const bubbleData: BubbleBlockItemProps[] = [
  {
    mode: BubbleModeEnum.bubbleLightgreen,
    text: "Товары2",
    layout: "desktop",
    path: "/1",
  },
  {
    mode: BubbleModeEnum.bubbleLightgreen,
    text: "Товары1",
    layout: "desktop",
    path: "/2",
  },
  {
    mode: BubbleModeEnum.bubbleLightgreen,
    text: "Товары4",
    layout: "desktop",
    path: "/3",
  },
];

export const BubbleBlockStory = () => (
  <BubbleBlock
    layout="desktop"
    data={bubbleData}
    onClick={(val) => {
      console.log(val);
    }}
    activeBubbleMode={BubbleModeEnum.bubbleGreen}
    initialySelected={[]}
  />
);

BubbleBlockStory.storyName = "Bubble block";
