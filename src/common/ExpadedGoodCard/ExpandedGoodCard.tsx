import React from "react";
import cn from "classnames";
import { MobileCN } from "../../styles";
import { DesktopHeaderLogo } from "../../desktop/DesktopHeaderLogo/DesktopHeaderLogo";
import { GoodCardDiscount } from "../GoodCardDiscount/GoodCardDiscount";
import { LayoutProp } from "../LayoutProp";
import {
  expandedGoodCard,
  expandedGoodCardLogo,
  expandedGoodCardMainInfo,
  productImage,
  img,
  expandedGoodCardTextWrapper,
  discountUntil,
  expandedGoodCardPrices,
  current,
  old,
  pricePerKilo,
  title,
  expandedGoodCardSecondaryInfo,
  retailer,
  retailerImage,
  retailerText,
  discountText,
  discountCN,
} from "./styles";

// ПАШУ СПРОСИТЬ
interface ExpandedGoodCardProps extends LayoutProp {
  header: React.ReactElement;
  footer: React.ReactElement;
}

export function ExpandedGoodCard({
  layout,
  header,
  footer,
}: ExpandedGoodCardProps) {
  return (
    <div
      className={cn(expandedGoodCard, {
        [MobileCN]: layout === "mobile",
      })}
    >
      {header}
      {footer}
      {layout === "desktop" && (
        <div className={expandedGoodCardLogo}>
          <DesktopHeaderLogo
            title="MisMaksab"
            subtitle="скидки в магазинах Эстонии"
            href="/"
          />
        </div>
      )}
    </div>
  );
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
  productTitle,
}: ExpandedGoodCardHeaderProps) {
  return (
    <div className={expandedGoodCardMainInfo}>
      <div className={productImage}>
        <img className={img} src={productImageURL} />
      </div>

      <div className={expandedGoodCardTextWrapper}>
        <h4 className={discountUntil}>{expireDateStr}</h4>
        <div className={expandedGoodCardPrices}>
          <span className={current}>{price}€</span>
          <span className={old}>{oldPrice}€</span>
        </div>
        <h4 className={pricePerKilo}>
          {unitPrice}€/{unitType}
        </h4>
        <a href="/" className={title}>
          {productTitle}
        </a>
      </div>
    </div>
  );
}

interface ExpandedGoodCardFooterProps extends LayoutProp {
  discount: number;
  retailerImageURL: string;
  goToRetailerText: string;
  goToRetailerLink: string;
  discountConditionsText: string;
  retailerCardImage: string | null;
}

export function ExpandedGoodCardFooter({
  retailerImageURL,
  goToRetailerLink,
  goToRetailerText,
  layout,
  retailerCardImage,
  discount,
  discountConditionsText,
}: ExpandedGoodCardFooterProps) {
  return (
    <div className={expandedGoodCardSecondaryInfo}>
      <div className={retailer}>
        <div className={retailerImage}>
          <img src={retailerImageURL} className={img} />
        </div>
        <a href={goToRetailerLink} className={retailerText}>
          {goToRetailerText}
        </a>
      </div>

      <div className={discountCN}>
        <GoodCardDiscount
          layout={layout}
          expanded={true}
          image={retailerCardImage}
          discount={discount}
        />
        <span className={discountText}>{discountConditionsText}</span>
      </div>
    </div>
  );
}
