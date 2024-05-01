import cn from "classnames";
import { MobileCN } from "../../styles";
import { LayoutProp } from "../LayoutProp";
import {
  disabled,
  discountTextCN,
  offers,
  retailerCN,
  retailerCard,
  retailerCardFooter,
  retailerCardHeader,
  retailerCardShopLink,
  retailerCardWrapper,
  retailerImage,
} from "./styles";

export interface RetailerCardProps extends LayoutProp {
  retailerLink: string;
  retailerImageURL: string;
  discountText: string | undefined;
  retailer: string;
  offersText: string | undefined;
  isDisabled: boolean;
  id?: number;
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
    <div
      className={cn(retailerCardWrapper, {
        [MobileCN]: layout === "mobile",
      })}
    >
      <a
        href={retailerLink}
        className={cn(retailerCard, {
          [disabled]: isDisabled,
          [MobileCN]: layout === "mobile",
        })}
      >
        <div className={retailerCardHeader}>
          <img className={retailerImage} src={retailerImageURL} />
          {discountText && (
            <span className={discountTextCN}>{discountText}</span>
          )}
        </div>
        <div className={retailerCardFooter}>
          <span className={retailerCN}>{retailer}</span>
          {offersText && <span className={offers}>{offersText}</span>}
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
