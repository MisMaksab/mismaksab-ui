import React, { useCallback, useState } from 'react'
import styles from './Bubble.scss'
import { LayoutProp } from '../LayoutProp';
import cn from 'classnames';
import BubbleArrowSvg from '../../assets/icons/bubble_arrow.svg'

interface BubbleProps extends LayoutProp{
  mode: 'blue'|'green'|'lightgreen'|'lightblue'|'lightorange';
  text: string;
  link?: string;
  dropdown?: React.ReactElement | null;
}

export  function Bubble({mode, text, link, layout, dropdown=null}: BubbleProps) {
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const bubbleClickCb = useCallback(() => {
    setIsDropdownExpanded(!isDropdownExpanded);
  }, [isDropdownExpanded]);

  return (
    <a onClick={bubbleClickCb} href={link} className={cn(styles.bubble, styles[mode], styles[layout])}>
      {text}

      {dropdown &&
        <img className={cn(styles.bubbleArrow, {
          [styles.rotate]: isDropdownExpanded
        })} src={BubbleArrowSvg} />
      }

      {isDropdownExpanded &&
        dropdown
      }
    </a>
  )
}
