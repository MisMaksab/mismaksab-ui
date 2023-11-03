import React, { useState } from 'react'
import styles from './Bubble.scss'
import { LayoutProp } from '../LayoutProp';
import cn from 'classnames';
import BubbleArrowSvg from '../../assets/icons/bubble_arrow.svg'

interface BubbleProps extends LayoutProp{
  mode: 'bubbleBlue'|'bubbleGreen'|'bubbleLightgreen'|'bubbleLightblue'|'bubbleOrange'|'bubbleLightOrange'|'bubbleDisabled';
  text: string;
  link?: string;
  onClick?: ()=>void;
  isDropdown?: boolean;
  isDropdownExpanded?: boolean;
}

export  function Bubble({mode, text, link, layout, onClick, isDropdown = false, isDropdownExpanded = false}: BubbleProps) {
  return (
    <a onClick={onClick} href={link} className={cn(styles.bubble, styles[mode], styles.applyTextMode, styles[layout])}>
      {text}

      {isDropdown &&
        <img className={cn(styles.bubbleArrow, {
          [styles.rotate]: isDropdownExpanded
        })} src={BubbleArrowSvg} />
      }
    </a>
  )
}
