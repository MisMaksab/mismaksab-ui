;
import { MobileCN } from "../../styles";
import cn from "classnames";
import { RetailerCard, RetailerCardProps } from "../RetailerCard/RetailerCard";
import { LayoutProp } from "../LayoutProp";
import { retailersCardsBlock } from "./styles";

interface RetailersCardsBlockProps extends LayoutProp {
  data: RetailerCardProps[];
}

export function RetailersCardsBlock({
  data,
  layout,
}: RetailersCardsBlockProps) {
  return (
    <div
      className={cn(retailersCardsBlock, {
        [MobileCN]: layout === "mobile",
      })}
    >
      {data.map((card) => (
        <RetailerCard
          id={card.id}
          key={card.id}
          retailerLink={card.retailerLink}
          retailerImageURL={card.retailerImageURL}
          discountText={card.discountText}
          retailer={card.retailer}
          offersText={card.offersText}
          layout={layout}
          isDisabled={card.isDisabled}
          goToRetailerLink={card.goToRetailerLink}
          goToRetailerText={card.goToRetailerText}
        />
      ))}
    </div>
  );
}
