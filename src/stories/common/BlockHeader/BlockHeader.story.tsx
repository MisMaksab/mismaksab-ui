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
          { path: "0", text: "descending" },
          { path: "1", text: "ascending" },
          { path: "2", text: "descending3" },
          { path: "3", text: "desc" },
        ]}
        onChange={() => {}}
        defaultSelectedSortOption={""}
      />
    }
  />
);

BlockHeaderStory.storyName = "block header";
