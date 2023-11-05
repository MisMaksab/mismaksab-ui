import React from "react";
import { GoodCard, GoodCardFooter, GoodCardHeader } from "../GoodCard/GoodCard";
import styles from "./GoodCardsBlock.scss";
import { LayoutProp } from "../LayoutProp";

interface GoodCardsBlockProps extends LayoutProp {
  data: any[];
}

export function GoodCardsBlock({ data, layout }: GoodCardsBlockProps) {
  return (
    <div className={styles.goodCardsBlock}>
      {data.map((card) => (
        <GoodCard
          header={
            <GoodCardHeader
              productImageURL={card.productImageURL}
              retailerImageURL={card.retailerImageURL}
              discount={card.discount}
              layout={layout}
            />
          }
          footer={
            <GoodCardFooter
              price={card.price}
              oldPrice={card.oldPrice}
              productTitle={card.productTitle}
              unitPrice={card.unitPrice}
              unitType={card.unitType}
              layout={layout}
              expireDateStr={card.expireDateStr}
            />
          }
          productId="1"
          isDisabled={card.isDisabled}
          addedToList={false}
          addToList={() => null}
          layout={layout}
        />
      ))}
    </div>
  );
}
