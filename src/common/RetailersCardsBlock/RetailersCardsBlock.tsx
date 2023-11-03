import React from 'react'
import styles from './RetailersCardsBlock.scss'
import { RetailerCard } from '../RetailerCard/RetailerCard';

interface RetailersCardsBlockProps {
  data: any[];
}

export function RetailersCardsBlock({data}: RetailersCardsBlockProps) {
  return (
    <div className={styles.retailersCardsBlock}>
        {data.map(card =>
          <RetailerCard
            retailerLink={card.retailerLink}
            retailerImageURL={card.retailerImageURL}
            discountText={card.discountText}
            retailer={card.retailer}
            offersText={card.offersText}
            layout={card.layout}
            isDisabled={card.isDisabled}
            goToRetailerLink={card.goToRetailerLink || null}
            goToRetailerText={card.goToRetailerText || null}
          />
        )}
    </div>
  )
}
