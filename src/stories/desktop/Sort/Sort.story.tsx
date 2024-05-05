import { DesktopSortDropdown } from "../../../desktop/DesktopSortDropdown/DesktopSortDropdown";
import React from "react";

export const SortStory = () => (
  <DesktopSortDropdown
    data={[
      { path: "0", text: "descending" },
      { path: "1", text: "ascending" },
      { path: "2", text: "descending3" },
      { path: "3", text: "desc" },
    ]}
    onChange={(path) => {
      console.log(path);
    }}
    defaultSelectedSortOption={"0"}
  />
);

SortStory.storyName = "sort";
