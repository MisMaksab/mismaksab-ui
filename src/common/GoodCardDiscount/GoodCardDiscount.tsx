import React from 'react'
import styles from './GoodCardDiscount.scss'
import cn from 'classnames'

interface GoodCardDiscountProps {
  discount: number;
  image: string|null;
  expanded?: boolean;
  layout: 'mobile'|'desktop';
}

export function GoodCardDiscount({discount, image, expanded, layout}: GoodCardDiscountProps) {
  return (
    <div className={cn(styles.discount, styles[layout], {
      [styles.expanded]: expanded,
      [styles.small]: !expanded,
    })}>
        <div className={styles.discountPercentage}>{discount}%</div>

        {image &&
        <div className={styles.discountImage}>
          <img src={image} className={styles.img} />
        </div>
      }
    </div>
  )
}
