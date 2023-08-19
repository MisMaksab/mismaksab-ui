import React, { useCallback, useState } from 'react'
import cn from 'classnames';

import styles from './GoodCard.scss';
import { GoodCardDiscount } from '../GoodCardDiscount/GoodCardDiscount';

interface GoodCardProps {
    layout: 'mobile'|'desktop';
    productId: string;
    addedToList: boolean;
    isDisabled?: boolean;
    header: React.ReactElement;
    footer: React.ReactElement;
    addToList: (productId: string) => void;
}

export function GoodCard({
    layout,
    productId,
    addedToList,
    isDisabled = false,
    addToList,
    header,
    footer
}: GoodCardProps) {
  const onAddToList = useCallback(() => {
    addToList(productId);
  }, []);
  return (
    <div className={cn(
        styles.goodCard, styles[layout], {
            [styles.disabled]: isDisabled,
        }
    )}>
        {header}
        {footer}
    </div>
  )
}


interface GoodCardHeaderProps {
    productImageURL: string;
    discount: number;
    retailerImageURL: string;
    layout: 'mobile'|'desktop';
}

export function GoodCardHeader({
    productImageURL,
    retailerImageURL,
    discount,
    layout
}: GoodCardHeaderProps) {
    return (
        <div className={styles.goodCardImage}>
            <img className={styles.retailerImg} src={productImageURL}/>
            <GoodCardDiscount layout={layout} expanded={false} image={retailerImageURL} discount={discount}/>
        </div>
    )
}


interface GoodCardFooterProps {
    layout: 'mobile'|'desktop';
    discount: number;
    price: number;
    oldPrice: number;
    productTitle: string;
    unitPrice: number;
    unitType: string;
    expireDateStr: string;
}

export function GoodCardFooter({
    price,
    oldPrice,
    productTitle,
    unitPrice,
    unitType,
    layout,
    expireDateStr
}: GoodCardFooterProps) {
    return (
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
    )
}