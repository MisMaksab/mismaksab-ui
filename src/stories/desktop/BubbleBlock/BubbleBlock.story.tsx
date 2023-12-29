import React from "react";
import { DesktopBubbleBlock } from "../../../desktop/DesktopBubbleBlock/DesktopBubbleBlock";

const bubbleData = [
  { id: 0, mode: "bubbleGreen", text: "Товары1" },
  { id: 1, mode: "bubbleGreen", text: "Товары2" },
  { id: 2, mode: "bubbleGreen", text: "Товары3" },
  { id: 3, mode: "bubbleGreen", text: "Товары4" },
  { id: 4, mode: "bubbleGreen", text: "Товар5ы" },
  { id: 5, mode: "bubbleGreen", text: "Товары7" },
  { id: 6, mode: "bubbleGreen", text: "Товары8" },
  { id: 7, mode: "bubbleGreen", text: "Товары9" },
];

export const BubbleBlockStory = () => (
  <DesktopBubbleBlock
    data={bubbleData}
    onClick={(val) => {
      console.log(val);
    }}
    activeBubbleMode="bubbleLightgreen"
    defaultSelectedBubble="Товары1"
  />
);

BubbleBlockStory.storyName = "Bubble block";
