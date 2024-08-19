import React from "react";
import {
  BubbleBlock,
  BubbleBlockItemProps,
} from "../../../common/BubbleBlock/BubbleBlock";
import { BubbleModeType } from "../../../common/Bubble/Bubble";

const bubbleData: BubbleBlockItemProps[] = [
  {
    text: "Товары2",
    layout: "desktop",
    path: "/1",
  },
  {
    text: "Товары1",
    layout: "desktop",
    path: "/2",
  },
  {
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
    activeBubbleMode="bubbleGreen"
    initialySelected={[]}
    mode={"bubbleGreen"}
  />
);

BubbleBlockStory.storyName = "Bubble block";
