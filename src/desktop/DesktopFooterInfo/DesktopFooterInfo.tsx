import React from 'react'
import styles from './DesktopFooterInfo.scss';

interface DesktopFooterInfoProps {
  // mail: {}link:string,title:string; как сделать обьект?
  copyright: string;
}

export function DesktopFooterInfo({mail, copyright}: DesktopFooterInfoProps) {
  const link = `mailto:${mail.link}`;

  return (
    <div className={styles.footerInfo}>
      <a className={styles.mail} href={link}>{mail.title}</a>
      <span className={styles.copyright}>{copyright}</span>
    </div>
  )
}
