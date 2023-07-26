import React, { useCallback, useState } from 'react'
import classnames from 'classnames';
import selverPng from './../../assets/icons/selver.svg'; // как отображать другие
import addedToListSvg from './../../assets/icons/cardAdded.svg';

import styles from './GoodCard.scss';

interface Props {
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
    <div className={classnames(
        styles.goodCard,{
            [styles.disabled]: isDisabled
        }
    )}>
        {/* <div className={classnames(styles.goodCardAdd, {
            [styles.added]: addedToList
        })} onClick={onAddToList}>
            {
                addedToList
                ? <img src={addedToListSvg}/>
                : <span>+</span>
            }
        </div> */}

        <div className={styles.goodCardImage}>
            <img src={productImageURL}/>

            <div className={classnames(styles.goodCardInfo, styles.info)}>
                <div className={styles.infoDiscount}>{discount} %</div>
                <img src={retailerImageURL} className={styles.infoMarket} />
            </div>
        </div>

        <div className={styles.goodCardTextWrapper}>
            <div className={classnames(styles.goodCardPrices, styles.prices)}>
                <span className={styles.pricesCurrent}>{price}€</span>
                <span className={styles.pricesOld}>{oldPrice}€</span>
            </div>

            <a href='/' className={styles.goodCardTitle}>{productTitle}</a>

            <h4 className={styles.goodCardPricePerKilo}>{unitPrice}€/{unitType}</h4>

            <h4 className={styles.goodCardDiscountUntil}>{expireDateStr}</h4>
        </div>
    </div>
  )
}
