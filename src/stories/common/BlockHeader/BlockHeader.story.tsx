import React from "react";
import { BlockHeader } from "../../../common/BlockHeader/BlockHeader";

export const BlockHeaderStory = () => (
  <BlockHeader shrinkBtnEnabled={true} title="Мясо" moreBtnEnabled={false} layout="mobile" yellowButtonText="Еще" yellowButtonLink="/"/>
);

BlockHeaderStory.storyName = "Header";
