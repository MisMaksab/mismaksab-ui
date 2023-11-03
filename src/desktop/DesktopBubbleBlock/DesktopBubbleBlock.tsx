import React from 'react'
import styles from './DesktopBubbleBlock.scss'
import { Bubble } from '../../common/Bubble/Bubble';

interface DesktopBubbleBlockProps {
  data: any[];
}

export function DesktopBubbleBlock({data}: DesktopBubbleBlockProps) {
  return (
    <div className={styles.bubbleBlock}>
      {data.map(bubbleData =>
        <Bubble
          mode={bubbleData.mode}
          text={bubbleData.text}
          layout={bubbleData.layout}
          link={bubbleData.link}
          onClick={bubbleData.onClick}
          isDropdown={bubbleData.isDropdown}
          isDropdownExpanded={bubbleData.isDropdownExpanded}
        />
      )}
    </div>
  )
}
