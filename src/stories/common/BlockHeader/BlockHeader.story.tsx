import React from "react";
import { BlockHeader } from "../../../common/BlockHeader/BlockHeader";
import { DesktopSortDropdown } from "../../../desktop/DesktopSortDropdown/DesktopSortDropdown";

export const BlockHeaderStory = () => (
  <BlockHeader
    layout="desktop"
    noPaddingTop={true}
    isTitleThin={false}
    subTitle="sdfsdf"
    sortComponent={
      <DesktopSortDropdown
        data={[
          { id: 0, text: "descending" },
          { id: 1, text: "ascending" },
          { id: 2, text: "descending3" },
          { id: 3, text: "desc" },
        ]}
        callback={() => {}}
      />
    }
  />
);

BlockHeaderStory.storyName = "block header";
