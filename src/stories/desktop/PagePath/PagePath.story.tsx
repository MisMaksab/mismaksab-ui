import { DesktopPagePath } from "../../../desktop/DesktopPagePath/DesktopPagePath";
import React from "react";

export const PagePathStory = () => (
  <DesktopPagePath
    data={[
      { text: "text1", link: "/" },
      { text: "text2", link: "/" },
      { text: "text3", link: "/" },
    ]}
  />
);

PagePathStory.storyName = "page path";
