import React from "react";
import styles from "./DesktopFooterLinks.scss";

import instIcon from "../../assets/icons/footerInst.svg";
import fbIcon from "../../assets/icons/footerFb.svg";

interface DesktopFooterLinksProps {
  instLink: string;
  fbLink: string;
  usefulLinksArr: Array<{ title: string; link: string }>;
}

export function DesktopFooterLinks({
  instLink,
  fbLink,
  usefulLinksArr,
}: DesktopFooterLinksProps) {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.socialMedia}>
        <a href={instLink} className={styles.socialMediaItem}>
          <img className={styles.socialMediaItemImg} src={instIcon} />
        </a>
        <a href={fbLink} className={styles.socialMediaItem}>
          <img className={styles.socialMediaItemImg} src={fbIcon} />
        </a>
      </div>

      <div className={styles.usefulLinks}>
        {usefulLinksArr.map((el) => (
          <div key={el.title} className={styles.usefulLinksItem}>
            <a className={styles.usefulLinksLink} href={el.link}>
              {el.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
