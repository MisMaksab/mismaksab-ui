import React, { useCallback, useState } from 'react'
import cn from 'classnames';

import styles from './GoodCard.scss';

interface Props {
    layout: 'mobile'|'desktop';
    productId: string;
    productImageURL: string;
    discount: number;
    price: number;
    oldPrice: number;
    productTitle: string;
    unitPrice: number;
    unitType: string;
    discountUntil: number;
    addedToList: boolean;
    retailerImageURL: string;
    expireDateStr: string;
    isDisabled?: boolean;
    addToList: (productId: string) => void;
}

export function GoodCard({
    layout,
    productId,
    productImageURL,
    discount,
    price,
    oldPrice,
    productTitle,
    unitPrice,
    unitType,
    discountUntil,
    addedToList,
    retailerImageURL,
    expireDateStr,
    isDisabled = false,
    addToList,
}: Props) {
  const onAddToList = useCallback(() => {
    addToList(productId);
  }, []);

  return (
    <div className={cn(
        styles.goodCard,{
            [styles.disabled]: isDisabled,
            [styles.mobile]: layout === 'mobile',
        }
    )}>
        <div className={styles.goodCardImage}>
            <img className={styles.retailerImg} src={productImageURL}/>

            <div className={cn(styles.goodCardInfo, styles.info)}>
                <div className={styles.infoDiscount}>{discount} %</div>
                <img src={retailerImageURL} className={styles.infoMarket} />
            </div>
        </div>

        <div className={styles.goodCardTextWrapper}>
            <div className={cn(styles.goodCardPrices, styles.goodCardPrices)}>
                <span className={styles.current}>{price}€</span>
                <span className={styles.old}>{oldPrice}€</span>
            </div>

            <a href='/' className={styles.title}>{productTitle}</a>

            {layout === 'desktop' &&
                <h4 className={styles.pricePerKilo}>{unitPrice}€/{unitType}</h4>
            }

            <h4 className={styles.discountUntil}>{expireDateStr}</h4>
        </div>
    </div>
  )
}
