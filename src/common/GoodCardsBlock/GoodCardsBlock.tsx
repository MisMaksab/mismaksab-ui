import cn from "classnames";
import { GoodCardDataProps } from "../../common/GoodCard/GoodCard";
import { MobileCN } from "../../styles";
import { GoodCard, GoodCardFooter, GoodCardHeader } from "../GoodCard/GoodCard";
import { LayoutProp } from "../LayoutProp";
import { goodCardsBlock } from "./styles";

interface GoodCardsBlockProps extends LayoutProp {
  data: GoodCardDataProps[];
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
              id={card.id}
            />
          }
          isDisabled={card.isDisabled}
          layout={layout}
        />
      ))}
    </div>
  );
}
