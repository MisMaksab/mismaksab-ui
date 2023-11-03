import React from 'react'
import styles from './ReatailerCard.scss'
import cn from 'classnames';
import { LayoutProp } from '../LayoutProp';

interface RetailerCardProps extends LayoutProp{
  retailerLink: string;
  retailerImageURL: string;
  discountText: string;
  retailer: string;
  offersText: string;
  isDisabled: boolean;
}

export function RetailerCard({
  retailerLink,
  retailerImageURL,
  discountText,
  retailer,
  offersText,
  layout,
  isDisabled,
}: RetailerCardProps) {
  return (
    <a href={retailerLink} className={cn(styles.retailerCard, styles[layout], {
      [styles.disabled]: isDisabled
    })}>
      <div className={styles.retailerCardHeader}>
        <img className={styles.retailerImage} src={retailerImageURL} />
        <span className={styles.discountText}>{discountText}</span>
      </div>
      <div className={styles.retailerCardFooter}>
        <span className={styles.retailer}>{retailer}</span>
        <span className={styles.offers}>{offersText}</span>
      </div>
    </a>
  )
}
