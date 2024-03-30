import React from "react";
import {
  pagePath,
  pagePathItem,
  pagePathItemSVG,
  pagePathItemWrapper,
} from "./styles";
import PagePathSVG from "../../assets/icons/desktopPagePath.svg";

export interface DesktopPagePathItemProps {
  link: string;
  text: string;
}

interface DesktopPagePathProps {
  data: DesktopPagePathItemProps[];
  onClick: (text: string) => void;
}

export function DesktopPagePath({ data, onClick }: DesktopPagePathProps) {
  return <PagePath onClick={onClick} data={data} />;
}

interface PagePathProps {
  data: DesktopPagePathItemProps[];
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
