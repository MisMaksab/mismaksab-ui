import React from 'react'
import styles from './ServiceBlock.scss'
import { LayoutProp } from '../LayoutProp'
import cn from 'classnames'

interface ServiceBlockProps extends LayoutProp {
  title?: string;
  paragraphs: string[];
  centered?: boolean;
}

export function ServiceBlock({layout, title, paragraphs, centered}: ServiceBlockProps) {
  return (
    <div className={cn(styles.serviceBlock, styles[layout])}>
      {title &&
      <h2 className={styles.serviceBlockTitle}>
        {title}
      </h2>
      }
      <div className={styles.serviceBlockContent}>
        {paragraphs.map(text =>
          <p key={text} className={cn(styles.serviceBlockParagraph, {
            [styles.centered]: centered
          })}>
            {text}
          </p>
        )}
      </div>
    </div>
  )
}
