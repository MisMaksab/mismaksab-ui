import React from 'react';
import styles from './DesktopFooter.scss';

interface FooterDesktopProps{
  footerLinks: React.ReactElement;
  footerInfo: React.ReactElement;
}

export function DesktopFooter({footerLinks, footerInfo}: FooterDesktopProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          {footerLinks}
        </div>
        <div className={styles.footerInfo}>
          {footerInfo}
        </div>
      </div>
    </footer>
  )
}
