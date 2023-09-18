import React from "react";
import { Bubble } from "../../../common/Bubble/Bubble";

export const BubbleStory = () => (
  <Bubble mode="green" text="товары" layout="desktop" dropdown={<span>text</span>}/>
);

BubbleStory.storyName = "Header";
