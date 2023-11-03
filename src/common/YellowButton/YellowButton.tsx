import React from 'react'
import styles from './YellowButton.scss'
import cn from "classnames";
import arrow from "../../assets/icons/arrow.svg";
import { LayoutProp } from '../LayoutProp';

interface YellowButtonProps extends LayoutProp {
  text: string | undefined;
  onClick?: ()=>void;
  isActive?: boolean;
  isArrowRotated?: boolean;
  link?: string;
}

export default function YellowButton({layout, text, onClick, isActive = false, isArrowRotated = false, link}: YellowButtonProps) {
  return (
    <a href={link} className={cn(styles.yellowButton, styles[layout])} onClick={onClick}>
      <span className={styles.title}>{text}</span>
      <img
        className={cn(styles.svg, {
          [styles.active]: isActive,
          [styles.rotate]: isArrowRotated
        })}
        src={arrow} alt="language svg"
      />
    </a>
  )
}
