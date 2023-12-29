import { DesktopPagination } from "desktop/DesktopPagination/DesktopPagination";
import React from "react";

export const PaginationStory = () => (
  <DesktopPagination
    onClick={(page) => {
      console.log(page);
    }}
    lastPageIndex={7}
    nextPageText="следующая страница"
    prevPageText="предыдущая страница"
  />
);

PaginationStory.storyName = "pagination";
