import React from 'react'
import styles from './ExpandedGoodCard.scss';
import cn from 'classnames';
import { DesktopHeaderLogo } from '../../desktop/DesktopHeaderLogo/DesktopHeaderLogo';
import { GoodCardDiscount } from '../GoodCardDiscount/GoodCardDiscount';
import { LayoutProp } from '../LayoutProp';


interface ExpandedGoodCardProps extends LayoutProp{
  productId: string;
  discountUntil: number;
  addedToList: boolean;
  addToList: (productId: string) => void;
  header: React.ReactElement;
  footer: React.ReactElement;
}

export function ExpandedGoodCard({
  layout,
  productId,
  discountUntil,
  addedToList,
  addToList,
  header,
  footer,
}: ExpandedGoodCardProps)
{
  return (
    <div className={cn(
      styles.expandedGoodCard, styles[layout]
    )}>
      {header}
      {footer}
      {layout === 'desktop' &&
        <div className={styles.expandedGoodCardLogo}>
          <DesktopHeaderLogo title='MisMaksab' subtitle='скидки в магазинах Эстонии' href='/' />
        </div>
      }
  </div>
  )
}



interface ExpandedGoodCardHeaderProps {
  productImageURL: string;
  price: number;
  oldPrice: number;
  productTitle: string;
  unitPrice: number;
  unitType: string;
  expireDateStr: string;
}

export function ExpandedGoodCardHeader({
  productImageURL,
  expireDateStr,
  price, 
  oldPrice,
  unitPrice,
  unitType,
  productTitle
}: ExpandedGoodCardHeaderProps) {
  return (
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
  )
}


interface ExpandedGoodCardFooterProps extends LayoutProp{
  discount: number;
  retailerImageURL: string;
  goToRetailerText: string;
  goToRetailerLink: string;
  discountConditionsText: string;
  retailerCardImage: string|null;
}

export function ExpandedGoodCardFooter({
  retailerImageURL,
  goToRetailerLink,
  goToRetailerText,
  layout,
  retailerCardImage,
  discount,
  discountConditionsText
}: ExpandedGoodCardFooterProps) {
  return (
    <div className={styles.expandedGoodCardSecondaryInfo}>
        <div className={styles.retailer}>
          <div className={styles.retailerImage}>
            <img src={retailerImageURL} className={styles.img} />
          </div>
          <a href={goToRetailerLink} className={styles.retailerText}>{goToRetailerText}</a>
        </div>

        <div className={styles.discount}>
          <GoodCardDiscount layout={layout} expanded={true} image={retailerCardImage} discount={discount}/>
          <span className={styles.discountText}>{discountConditionsText}</span>
        </div>
      </div>
  )
}