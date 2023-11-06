import React from "react";
import { MobileCN } from "styles";
import cn from "classnames";
import { RetailerCard } from "../RetailerCard/RetailerCard";
import { LayoutProp } from "../LayoutProp";
import { retailersCardsBlock } from "./styles";

interface RetailersCardsBlockProps extends LayoutProp {
  data: any[];
}

export function RetailersCardsBlock({
  data,
  layout,
}: RetailersCardsBlockProps) {
  return (
    <div className={cn(retailersCardsBlock, {
      [MobileCN]: layout === 'mobile'
    })}>
      {data.map((card) => (
        <RetailerCard
          retailerLink={card.retailerLink}
          retailerImageURL={card.retailerImageURL}
          discountText={card.discountText}
          retailer={card.retailer}
          offersText={card.offersText}
          layout={layout}
          isDisabled={card.isDisabled}
          goToRetailerLink={card.goToRetailerLink || null}
          goToRetailerText={card.goToRetailerText || null}
        />
      ))}
    </div>
  );
}
