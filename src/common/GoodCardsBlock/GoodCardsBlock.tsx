import React from "react";
import { GoodCard, GoodCardFooter, GoodCardHeader } from "../GoodCard/GoodCard";
import { LayoutProp } from "../LayoutProp";
import { goodCardsBlock } from "./styles";
import cn from "classnames";
import { MobileCN } from "../../styles";

// TODO add proper interface
interface GoodCardsBlockProps extends LayoutProp {
  data: any[];
}

export function GoodCardsBlock({ data, layout }: GoodCardsBlockProps) {
  return (
    <div
      className={cn(goodCardsBlock, {
        [MobileCN]: layout === "mobile",
      })}
    >
      {data.map((card) => (
        <GoodCard
          isSmallMobile={layout === "mobile"}
          key={card.id}
          header={
            <GoodCardHeader
              productImageURL={card.productImageURL}
              retailerImageURL={card.retailerImageURL}
              discount={card.discount}
              layout={layout}
              isSmallMobile={layout === "mobile"}
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
