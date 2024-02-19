import React from "react";
import cn from "classnames";
import { LayoutProp } from "../LayoutProp";
import {
  bannerCN,
  bannerImg,
  bannerText,
  blue,
  green,
  imgCN,
  linkCN,
  textCN,
  titleCN,
  yellow,
  MobileCN,
} from "./styles";

const stylesMap = {
  blue,
  yellow,
  green,
};

interface BannerProps extends LayoutProp {
  mode: "blue" | "yellow" | "green";
  title: string;
  text: string;
  searchText: string;
  searchLink: string;
  img: string;
}

export function Banner({
  layout,
  mode,
  title,
  text,
  searchText,
  searchLink,
  img,
}: BannerProps) {
  return (
    <div
      className={cn(bannerCN, stylesMap[mode], {
        [MobileCN]: layout === "mobile",
      })}
    >
      <div className={bannerText}>
        <span className={titleCN}>{title}</span>
        <span className={textCN}>{text}</span>
        <a href={searchLink} className={linkCN}>
          {searchText}
        </a>
      </div>

      <div className={bannerImg}>
        <img className={imgCN} src={img} />
      </div>
    </div>
  );
}
// styles[mode]
