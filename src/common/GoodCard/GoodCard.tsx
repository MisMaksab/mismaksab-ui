'use client'

import React from "react";
import cn from "classnames";
import { MobileCN } from "../../styles";
import { LayoutProp } from "../LayoutProp";
import { GoodCardDiscount } from "../GoodCardDiscount/GoodCardDiscount";
import {
  goodCard,
  disabled,
  goodCardImage,
  retailerImg,
  goodCardTextWrapper,
  goodCardPrices,
  current,
  old,
  title,
  pricePerKilo,
  discountUntil,
  smallMobile,
} from "./styles";

interface GoodCardProps extends LayoutProp {
  productId: string;
  addedToList: boolean;
  isDisabled?: boolean;
  header: React.ReactElement;
  footer: React.ReactElement;
  addToList: (productId: string) => void;
  isSmallMobile?: boolean;
}

export function GoodCard({
  layout,
  productId,
  addedToList,
  isDisabled = false,
  addToList,
  header,
  footer,
  isSmallMobile = false,
}: GoodCardProps) {
  //   const onAddToList = useCallback(() => {
  //     addToList(productId);
  //   }, []);
  return (
    <div
      className={cn(goodCard, {
        [MobileCN]: layout === "mobile",
        [disabled]: isDisabled,
        [smallMobile]: isSmallMobile,
      })}
    >
      {header}
      {footer}
    </div>
  );
}

interface GoodCardHeaderProps extends LayoutProp {
  productImageURL: string;
  discount: number;
  retailerImageURL: string;
  isSmallMobile?: boolean;
}

export function GoodCardHeader({
  productImageURL,
  retailerImageURL,
  discount,
  layout,
  isSmallMobile,
}: GoodCardHeaderProps) {
  return (
    <div className={goodCardImage}>
      <img className={retailerImg} src={productImageURL} />
      <GoodCardDiscount
        layout={layout}
        expanded={false}
        image={retailerImageURL}
        discount={discount}
        isSmallMobile={isSmallMobile}
      />
    </div>
  );
}

interface GoodCardFooterProps extends LayoutProp {
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
  expireDateStr,
}: GoodCardFooterProps) {
  return (
    <div className={goodCardTextWrapper}>
      <div className={cn(goodCardPrices, goodCardPrices)}>
        <span className={current}>{price}€</span>
        <span className={old}>{oldPrice}€</span>
      </div>
      <a href="/" className={title}>
        {productTitle}
      </a>
      {layout === "desktop" && (
        <h4 className={pricePerKilo}>
          {unitPrice}€/{unitType}
        </h4>
      )}
      <h4 className={discountUntil}>{expireDateStr}</h4>
    </div>
  );
}
