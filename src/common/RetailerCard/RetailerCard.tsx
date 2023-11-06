import React from "react";
import cn from "classnames";
import { MobileCN } from "styles";
import { LayoutProp } from "../LayoutProp";
import { retailerCardWrapper, retailerCard, disabled, retailerCardHeader, retailerImage, retailerCardFooter, offers, retailerCardShopLink } from "./styles";

interface RetailerCardProps extends LayoutProp {
  retailerLink: string;
  retailerImageURL: string;
  discountText: string;
  retailer: string;
  offersText: string;
  isDisabled: boolean;
  goToRetailerLink?: string;
  goToRetailerText?: string;
}

export function RetailerCard({
  retailerLink,
  retailerImageURL,
  discountText,
  retailer,
  offersText,
  layout,
  isDisabled,
  goToRetailerLink,
  goToRetailerText,
}: RetailerCardProps) {
  return (
    <div className={cn(retailerCardWrapper, {
      [MobileCN]: layout === 'mobile'
    })}>
      <a
        href={retailerLink}
        className={cn(retailerCard, {
          [disabled]: isDisabled,
          [MobileCN]: layout === 'mobile'
        })}
      >
        <div className={retailerCardHeader}>
          <img className={retailerImage} src={retailerImageURL} />
          <span className={discountText}>{discountText}</span>
        </div>
        <div className={retailerCardFooter}>
          <span className={retailer}>{retailer}</span>
          <span className={offers}>{offersText}</span>
        </div>
      </a>

      {goToRetailerLink && goToRetailerText && (
        <a href={goToRetailerLink} className={retailerCardShopLink}>
          {goToRetailerText}
        </a>
      )}
    </div>
  );
}
