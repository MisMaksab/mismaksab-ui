import React from 'react'
import cn from 'classnames'
import styles from './ServiceBlock.scss'
import { LayoutProp } from '../LayoutProp'

interface ServiceBlockProps extends LayoutProp {
  title: 'string';
  paragraphs: string[];
}

export function ServiceBlock({layout, title, paragraphs}: ServiceBlockProps) {
  return (
    <div className={cn(styles.serviceBlock, styles[layout])}>
      <h2 className={styles.serviceBlockTitle}>
        {title}
      </h2>
      <div className={styles.serviceBlockContent}>
        {paragraphs.map(text =>
          <p key={text} className={styles.serviceBlockParagraph}>
            {text}
          </p>
        )}
      </div>
    </div>
  )
}
