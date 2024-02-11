'use client'

import cn from "classnames";
import React, { useCallback, useState } from "react";
import {
  pagination,
  paginationPrevPageBtn,
  paginationBtn,
  paginationNextPageBtn,
  paginationPages,
  active,
} from "./styles";

interface DesktopPaginationProps {
  onClick: (page: number) => void;
  lastPageIndex: number;
  prevPageText: string;
  nextPageText: string;
}

export function DesktopPagination({
  onClick,
  lastPageIndex,
  prevPageText,
  nextPageText,
}: DesktopPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const onClickCb = useCallback((page: number) => {
    onClick(page);
    setCurrentPage(page);
  }, []);

  return (
    <div className={pagination}>
      {currentPage > 1 && (
        <div
          onClick={() => {
            setCurrentPage((val) => val - 1);
            onClick(currentPage - 1);
          }}
          className={cn(paginationPrevPageBtn, paginationBtn)}
        >
          {prevPageText}
        </div>
      )}

      <CalculatePages
        onClick={(page: number) => onClickCb(page)}
        lastPageIndex={lastPageIndex}
        currentPage={currentPage}
      />

      {currentPage < lastPageIndex && (
        <div
          onClick={() => {
            setCurrentPage((val) => val + 1);
            onClick(currentPage + 1);
          }}
          className={cn(paginationNextPageBtn, paginationBtn)}
        >
          {nextPageText}
        </div>
      )}
    </div>
  );
}

function CalculatePages({ currentPage, onClick, lastPageIndex }: any) {
  const pages = [];
  for (let i = 1; i <= lastPageIndex; i++) {
    pages.push(
      <div
        onClick={() => onClick(i)}
        className={cn(paginationBtn, { [active]: currentPage === i })}
      >
        {i}
      </div>
    );
  }

  return <div className={paginationPages}>{pages}</div>;
}
