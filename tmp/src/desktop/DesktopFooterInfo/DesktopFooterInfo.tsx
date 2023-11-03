import React from 'react'
import styles from './DesktopFooterInfo.scss';

interface DesktopFooterInfoProps {
  mailLink: string;
  mailText: string;
  copyright: string;
}

export function DesktopFooterInfo({mailLink, mailText, copyright}: DesktopFooterInfoProps) {
  const link = `mailto:${mailLink}`;

  return (
    <div className={styles.footerInfo}>
      <a className={styles.mail} href={link}>{mailText}</a>
      <span className={styles.copyright}>{copyright}</span>
    </div>
  )
}
