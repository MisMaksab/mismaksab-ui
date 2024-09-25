import cn from "classnames";
import { MobileCN } from "../../styles";
import { LayoutProp } from "../LayoutProp";
import { RetailerCard, RetailerCardProps } from "../RetailerCard/RetailerCard";
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
          key={card.retailer}
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
