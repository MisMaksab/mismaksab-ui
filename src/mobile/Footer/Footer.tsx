import React from 'react';
import styles from './Footer.scss';

interface Props{
  footerLinks: React.ReactElement;
  footerInfo: React.ReactElement;
}

export function Footer({footerLinks, footerInfo}: Props) {
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
