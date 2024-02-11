'use client'

import React from "react";
import {
  pagePath,
  pagePathContainer,
  pagePathItem,
  pagePathItemSVG,
  pagePathItemWrapper,
} from "./styles";
import { DesktopSortDropdown } from "../../desktop/DesktopSortDropdown/DesktopSortDropdown";
import PagePathSVG from "../../assets/icons/desktopPagePath.svg";

const SORT_DATA = [
  { id: 0, text: "descending" },
  { id: 1, text: "ascending" },
  { id: 2, text: "descending3" },
  { id: 3, text: "desc" },
];

interface DesktopPagePathProps {
  data: any[];
  onClick: (text: string) => void;
  sortCallback: (id: number) => void;
}

export function DesktopPagePath({
  data,
  onClick,
  sortCallback,
}: DesktopPagePathProps) {
  return (
    <div className={pagePathContainer}>
      <PagePath onClick={onClick} data={data} />
      <DesktopSortDropdown
        data={SORT_DATA}
        callback={(id) => {
          sortCallback(id);
        }}
      />
    </div>
  );
}

interface PagePathProps {
  data: any[];
  onClick: (text: string) => void;
}

function PagePath({ data, onClick }: PagePathProps) {
  return (
    <div className={pagePath}>
      {data.map((item, id) => (
        <div className={pagePathItemWrapper}>
          <span
            onClick={() => {
              onClick(item.link);
            }}
            className={pagePathItem}
          >
            {item.text}
          </span>
          {id < data.length - 1 && (
            <div
              className={pagePathItemSVG}
              dangerouslySetInnerHTML={{ __html: PagePathSVG }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
