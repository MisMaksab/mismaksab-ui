import React from "react";
import styles from "./RetailersCardsBlock.scss";
import { RetailerCard } from "../RetailerCard/RetailerCard";
import { LayoutProp } from "../LayoutProp";
import cn from "classnames";

interface RetailersCardsBlockProps extends LayoutProp {
  data: any[];
}

export function RetailersCardsBlock({
  data,
  layout,
}: RetailersCardsBlockProps) {
  return (
    <div className={cn(styles.retailersCardsBlock, styles[layout])}>
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
