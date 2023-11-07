import React from "react";
import { DesktopBubbleBlock } from "../../../desktop/DesktopBubbleBlock/DesktopBubbleBlock";

const bubbleData = [
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
  { mode: "bubbleGreen", text: "Товары" },
];

export const BubbleBlockStory = () => <DesktopBubbleBlock data={bubbleData} />;

BubbleBlockStory.storyName = "Header";
