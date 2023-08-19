import React from 'react';
import styles from './Banner.scss';
import cn from 'classnames';

interface BannerProps {
  layout: 'mobile'|'desktop';
  mode: 'blue'|'yellow'|'green';
  title: string;
  text: string;
  searchText: string;
  searchLink: string;
  img: string;
}

export function Banner({layout, mode, title, text, searchText, searchLink, img}: BannerProps) {
  return (
    <div className={cn(styles.banner, styles[mode], styles[layout])}>
      <div className={styles.bannerText}>
        <span className={styles.title}>
          {title}
        </span>
        <span className={styles.text}>
          {text}
        </span>
        <a href={searchLink} className={styles.link}>
          {searchText}
        </a>
      </div>

      <div className={styles.bannerImg}>
        <img className={styles.img} src={img} />
      </div>
    </div>
  )
}
