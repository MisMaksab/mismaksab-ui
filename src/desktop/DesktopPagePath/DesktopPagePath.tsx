import React from "react";
// import {
//   pagePath,
//   pagePathContainer,
//   pagePathItem,
//   pagePathItemSVG,
//   pagePathItemWrapper,
// } from "./styles";
// import { DesktopSortDropdown } from "../../desktop/DesktopSortDropdown/DesktopSortDropdown";
// import PagePathSVG from "../../assets/icons/desktopPagePath.svg";

// ПАШУ СПРОСИТЬ
// const SORT_DATA = [
//   { path: "0", text: "descending" },
//   { path: "1", text: "ascending" },
//   { path: "2", text: "descending3" },
//   { path: "3", text: "desc" },
// ];

export interface DesktopPagePathItemProps {
  link: string;
  text: string;
}

interface DesktopPagePathProps {
  data: DesktopPagePathItemProps[];
  onClick: (text: string) => void;
  sortCallback: (path: number) => void;
}

export function DesktopPagePath({
  data,
  onClick,
  sortCallback,
}: DesktopPagePathProps) {
  return (
    // <div className={pagePathContainer}>
    //   <PagePath onClick={onClick} data={data} />
    //   <DesktopSortDropdown
    //     data={SORT_DATA}
    //     onChange={(path) => {
    //       sortCallback(path);
    //     }}
    //     defaultSelectedSortOption={"0"}
    //   />
    // </div>
    <></>
  );
}

// interface PagePathProps {
//   data: DesktopPagePathItemProps[];
//   onClick: (text: string) => void;
// }

// function PagePath({ data, onClick }: PagePathProps) {
//   return (
//     <div className={pagePath}>
//       {data.map((item, id) => (
//         <div className={pagePathItemWrapper}>
//           <span
//             onClick={() => {
//               onClick(item.link);
//             }}
//             className={pagePathItem}
//           >
//             {item.text}
//           </span>
//           {id < data.length - 1 && (
//             <div
//               className={pagePathItemSVG}
//               dangerouslySetInnerHTML={{ __html: PagePathSVG }}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
