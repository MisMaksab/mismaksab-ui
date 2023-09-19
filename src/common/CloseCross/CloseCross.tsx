import React from 'react'
import styles from './CloseCross.scss'
import cn from 'classnames';

interface CloseCrossProps{
  mode: 'popupGreen'|'popupYellow'|'popupBlue'|'popupDefault';
  onClick: ()=>void;
}

export function CloseCross({mode, onClick}: CloseCrossProps) {
  return (
    <div onClick={onClick} className={styles.cross}>
      <div className={cn(styles.crossBar, styles.one, styles[mode], styles.bg)}></div>
      <div className={cn(styles.crossBar, styles.two, styles[mode], styles.bg)}></div>
    </div>
  )
}
