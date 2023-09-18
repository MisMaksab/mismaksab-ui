import React from 'react'
import styles from './CloseCross.scss'
import { ModesProp } from '../ModesProp';
import cn from 'classnames';

interface CloseCrossProps extends ModesProp{
  onClick: ()=>void;
}

export function CloseCross({mode, onClick}: CloseCrossProps) {
  return (
    <div onClick={onClick} className={styles.cross}>
      <div className={cn(styles.crossBar, styles.one, styles[mode])}></div>
      <div className={cn(styles.crossBar, styles.two, styles[mode])}></div>
    </div>
  )
}
