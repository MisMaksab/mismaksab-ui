import React from 'react'
import { GoodCard, GoodCardFooter, GoodCardHeader } from '../GoodCard/GoodCard';
import styles from './GoodCardsBlock.scss'

interface GoodCardsBlockProps {
  data: any[];
}

export function GoodCardsBlock({data}: GoodCardsBlockProps) {
  return (
    <div className={styles.goodCardsBlock}>
      {data.map(card =>
        <GoodCard
          header={
            <GoodCardHeader
              productImageURL={card.productImageURL}
              retailerImageURL={card.retailerImageURL}
              discount={card.discount}
              layout={card.layout}
            />
          }
          footer={
            <GoodCardFooter
              price={card.price}
              oldPrice={card.oldPrice}
              productTitle={card.productTitle}
              unitPrice={card.unitPrice}
              unitType={card.unitType}
              layout={card.layout}
              expireDateStr={card.expireDateStr}
            />
          }
          
          productId="1"
          isDisabled={card.isDisabled}
          addedToList={false}
          addToList={() => null}
          layout={card.layout}
        />
      )}
    </div>
  )
}
