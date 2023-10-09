import React from 'react'
import styles from './ShrinkButton.scss'
import SideBarHideSvg from '../../assets/icons/sideBarHide.svg';

interface ShrinkButtonProps {
  onHide: ()=>void;
}

export function ShrinkButton({onHide}: ShrinkButtonProps) {
  return (
    <div className={styles.hide} onClick={onHide}>
      <img className={styles.svg} src={SideBarHideSvg} />
    </div>
  )
}
