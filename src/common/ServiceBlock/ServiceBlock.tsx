import React from 'react'
import cn from 'classnames'
import { MobileCN } from 'styles';
import { LayoutProp } from '../LayoutProp'
import { serviceBlock, serviceBlockTitle, serviceBlockContent, serviceBlockParagraph, centeredCN } from './styles';

interface ServiceBlockProps extends LayoutProp {
  title?: string;
  paragraphs: string[];
  centered?: boolean;
}

export function ServiceBlock({layout, title, paragraphs, centered}: ServiceBlockProps) {
  return (
    <div className={cn(serviceBlock, {
      [MobileCN]: layout === 'mobile'
    })}>
      {title &&
      <h2 className={serviceBlockTitle}>
        {title}
      </h2>
      }
      <div className={serviceBlockContent}>
        {paragraphs.map(text =>
          <p key={text} className={cn(serviceBlockParagraph, {
            [centeredCN]: centered
          })}>
            {text}
          </p>
        )}
      </div>
    </div>
  )
}
