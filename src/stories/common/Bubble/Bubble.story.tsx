import React from "react";
import { Bubble } from "../../../common/Bubble/Bubble";

export const BubbleStory = () => (
  <Bubble mode="lightblue" text="товары" layout="mobile" dropdown={<span>text</span>}/>
);

BubbleStory.storyName = "Header";
