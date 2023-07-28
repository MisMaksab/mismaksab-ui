import React from 'react'
import styles from './FooterInfo.scss';

interface Props {
  // mail: {}link:string,title:string; как сделать обьект?
  copyright: string;
}

export function FooterInfo({mail, copyright}: Props) {
  const link = `mailto:${mail.link}`;

  return (
    <div className={styles.footerInfo}>
      <a className={styles.mail} href={link}>{mail.title}</a>
      <span className={styles.copyright}>{copyright}</span>
    </div>
  )
}
