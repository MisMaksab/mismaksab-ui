import React from 'react';
import styles from './SideBarHeader.scss';
import SideBarHideSvg from '../../assets/icons/sideBarHide.svg';
import cn from 'classnames';
import { LayoutProp } from '../LayoutProp';

interface SideBarHeaderProps extends LayoutProp{
  title: string;
  onHide: () => void;
}

export function SideBarHeader({layout, title, onHide}: SideBarHeaderProps) {
  return (
    <div className={cn(styles.sideBarHeader, styles[layout])}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.hide} onClick={onHide}>
        <img className={styles.svg} src={SideBarHideSvg} />
      </div>
    </div>
  )
}