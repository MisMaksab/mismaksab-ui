import React from 'react'
import styles from './ShrinkButton.scss'
import SideBarHideSvg from '../../assets/icons/sideBarHide.svg';

interface ShrinkButtonProps {
  onClick: ()=>void;
}

export function ShrinkButton({onClick}: ShrinkButtonProps) {
  return (
    <div className={styles.hide} onClick={onClick}>
      <img className={styles.svg} src={SideBarHideSvg} />
    </div>
  )
}
