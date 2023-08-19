import React from 'react'
import styles from './ReatailerCard.scss'
import cn from 'classnames';

interface RetailerCardProps {
  retailerLink: string;
  retailerImageURL: string;
  discountText: string;
  retailer: string;
  offersText: string;
  layout: 'mobile'|'desktop';
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
    <a href={retailerLink} className={cn(styles.retailerCard, {
      [styles.mobile]: layout === 'mobile',
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
