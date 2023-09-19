import React, { useCallback, useState } from 'react'
import styles from './Bubble.scss'
import { LayoutProp } from '../LayoutProp';
import cn from 'classnames';
import BubbleArrowSvg from '../../assets/icons/bubble_arrow.svg'

interface BubbleProps extends LayoutProp{
  mode: 'bubbleBlue'|'bubbleGreen'|'bubbleLightgreen'|'bubbleLightblue'|'bubbleOrange'|'bubbleLightorange'|'isabled';
  text: string;
  link?: string;
  dropdown: React.ReactElement;
}

export  function Bubble({mode, text, link, layout, dropdown}: BubbleProps) {
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const handleBubbleClick = () => setIsDropdownExpanded(oldValue => !oldValue);

  return (
    <a onClick={handleBubbleClick} href={link} className={cn(styles.bubble, styles[mode], styles.applyTextMode, styles[layout])}>
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
