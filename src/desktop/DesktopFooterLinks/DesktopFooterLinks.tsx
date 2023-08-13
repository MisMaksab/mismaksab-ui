import React from 'react'
import styles from './DesktopFooterLinks.scss';

import instIcon from '../../assets/icons/footerInst.svg';
import fbIcon from '../../assets/icons/footerFb.svg';

interface DesktopFooterLinksProps {
  instLink: string;
  fbLink: string;
  usefulLinksArr: Array<{title:string, link:string}>;
  onInstLinkClick?: () => void;
  onFbLinkClick?: () => void;
  onUsefulLinksLinkClick?: () => void;
}

export function DesktopFooterLinks({instLink, fbLink, usefulLinksArr, onInstLinkClick, onFbLinkClick, onUsefulLinksLinkClick}: DesktopFooterLinksProps) {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.socialMedia}>
        <a href={instLink} onClick={onInstLinkClick} className={styles.socialMediaItem}>
          <img className={styles.socialMediaItemImg} src={instIcon}/>
        </a>
        <a href={fbLink} onClick={onFbLinkClick} className={styles.socialMediaItem}>
          <img className={styles.socialMediaItemImg} src={fbIcon}/>
        </a>
      </div>

      <div className={styles.usefulLinks} onClick={onUsefulLinksLinkClick}>
        {usefulLinksArr.map(el =>
          <div className={styles.usefulLinksItem}>
            <a className={styles.usefulLinksLink} href={el.link}>{el.title}</a>
          </div>
        )}
      </div>
    </div>
  )
}
