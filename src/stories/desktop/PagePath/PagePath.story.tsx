import { DesktopPagePath } from "../../../desktop/DesktopPagePath/DesktopPagePath";
import React from "react";

export const PagePathStory = () => (
  <DesktopPagePath
    onClick={(id) => {
      console.log(id);
    }}
    data={[
      { text: "text1", link: "/" },
      { text: "text2", link: "/" },
      { text: "text3", link: "/" },
    ]}
    sortCallback={(id) => {
      console.log("sdf" + id);
    }}
  />
);

PagePathStory.storyName = "page path";
