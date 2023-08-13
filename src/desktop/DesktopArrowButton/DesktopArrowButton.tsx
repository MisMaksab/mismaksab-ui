import cn from 'classnames'
import React from 'react'
import styles from './DesktopArrowButton.scss';

// arrow svg
import arrowSvg from './../../assets/icons/slider_arrow.svg';

interface DesktopArrowButtonProps {
  type: 'next'|'prev';
  isShown: boolean;
  onClick: () => void;
}

export function DesktopArrowButton({type, isShown, onClick}: DesktopArrowButtonProps) {
  return (
    <div className={cn(
      styles.arrowButton, {
        [styles.shown]: isShown,
        [styles.prev]: type === 'prev',
        [styles.next]: type === 'next'
      })} 
    onClick={onClick}
    >
      <img className={styles.arrowButtonArrow} src={arrowSvg} alt="" />
    </div>
  )
}