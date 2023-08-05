import React from 'react';
import styles from './SideBarHeader.scss';
import SideBarHideSvg from '../../assets/icons/sideBarHide.svg';
import cn from 'classnames';

interface SideBarHeaderProps {
  mobile: boolean;
  title: string;
  onHide: () => void;
}

export function SideBarHeader({mobile, title, onHide}: SideBarHeaderProps) {
  return (
    <div className={cn(styles.sideBarHeader, {
      [styles.mobile]: mobile
    })}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.hide} onClick={onHide}>
        <img className={styles.svg} src={SideBarHideSvg} />
      </div>
    </div>
  )
}