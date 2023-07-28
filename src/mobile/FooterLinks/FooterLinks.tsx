import React from 'react'
import styles from './FooterLinks.scss';

import instIcon from '../../assets/icons/footerInst.svg';
import fbIcon from '../../assets/icons/footerFb.svg';

interface Props {
  instLink: string;
  fbLink: string;
  usefulLinksArr: Array<{title:string, link:string}>;
}

export function FooterLinks({instLink, fbLink, usefulLinksArr}: Props) {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.socialMedia}>
        <a href={instLink} className={styles.socialMediaItem}>
          <img src={instIcon}/>
        </a>
        <a href={fbLink} className={styles.socialMediaItem}>
          <img src={fbIcon}/>
        </a>
      </div>

      <div className={styles.usefulLinks}>
        {usefulLinksArr.map(el =>
          <div className={styles.usefulLinksItem}>
            <a className={styles.usefulLinksLink} href={el.link}>{el.title}</a>
          </div>
        )}
      </div>
    </div>
  )
}
