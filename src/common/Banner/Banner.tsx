import React from "react";
// import cn from "classnames";
import { LayoutProp } from "../LayoutProp";

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
    <></>
    // <div className={cn(styles.banner, styles[mode], styles[layout])}>
    //   <div className={styles.bannerText}>
    //     <span className={styles.title}>{title}</span>
    //     <span className={styles.text}>{text}</span>
    //     <a href={searchLink} className={styles.link}>
    //       {searchText}
    //     </a>
    //   </div>

    //   <div className={styles.bannerImg}>
    //     <img className={styles.img} src={img} />
    //   </div>
    // </div>
  );
}
