import { DesktopSortDropdown } from "../../../desktop/DesktopSortDropdown/DesktopSortDropdown";
import React from "react";

export const SortStory = () => (
  <DesktopSortDropdown
    data={[
      { id: 0, text: "descending" },
      { id: 1, text: "ascending" },
      { id: 2, text: "descending3" },
      { id: 3, text: "desc" },
    ]}
    callback={(id) => {
      console.log(id);
    }}
  />
);

SortStory.storyName = "sort";
