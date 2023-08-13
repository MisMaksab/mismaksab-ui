import React from 'react'
import styles from './ExpandedGoodCard.scss';
import cn from 'classnames';
import { DesktopHeaderLogo } from '../../desktop/DesktopHeaderLogo/DesktopHeaderLogo';


interface ExpandedGoodCardProps {
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
  goToRetailerText: string;
  goToRetailerLink: string;
  discountConditionsText: string;
  retailerCardImage: string|null;
  addToList: (productId: string) => void;
}

export function ExpandedGoodCard({
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
  goToRetailerText,
  goToRetailerLink,
  discountConditionsText,
  retailerCardImage,
  addToList,
}: ExpandedGoodCardProps)
{
  return (
    <div className={cn(
      styles.expandedGoodCard,{
          [styles.mobile]: layout === 'mobile',
      }
    )}>
      <div className={styles.expandedGoodCardMainInfo}>
        <div className={styles.productImage}>
          <img className={styles.img} src={productImageURL}/>
        </div>

        <div className={styles.expandedGoodCardTextWrapper}>
          <h4 className={styles.discountUntil}>{expireDateStr}</h4>
          <div className={styles.expandedGoodCardPrices}>
              <span className={styles.current}>{price}€</span>
              <span className={styles.old}>{oldPrice}€</span>
          </div>
          <h4 className={styles.pricePerKilo}>{unitPrice}€/{unitType}</h4>
          <a href='/' className={styles.title}>{productTitle}</a>
        </div>
      </div>

      <div className={styles.expandedGoodCardSecondaryInfo}>
        <div className={styles.retailer}>
          <div className={styles.retailerImage}>
            <img src={retailerImageURL} className={styles.img} />
          </div>
          <a href={goToRetailerLink} className={styles.retailerText}>{goToRetailerText}</a>
        </div>

        <div className={styles.discount}>
          <div className={styles.discountConditions}>
            <div className={styles.discountPercentage}>{discount} %</div>
            {retailerCardImage &&
              <div className={styles.discountCardRequired}>
                <img src={retailerCardImage} className={styles.img} />
              </div>
            }
          </div>
          <span className={styles.discountText}>{discountConditionsText}</span>
        </div>
      </div>

      {layout === 'desktop' &&
        <div className={styles.expandedGoodCardLogo}>
          <DesktopHeaderLogo title='MisMaksab' subtitle='скидки в магазинах Эстонии' href='/' />
        </div>
      }
  </div>
  )
}
