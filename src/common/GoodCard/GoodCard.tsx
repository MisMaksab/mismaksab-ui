;
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

export interface GoodCardDataProps extends LayoutProp {
  id: string;
  productImageURL: string;
  retailerImageURL: string;
  discount: number | undefined;
  price: number;
  oldPrice: number | undefined;
  productTitle: string;
  unitPrice: number | undefined;
  unitType: string | undefined;
  expireDateStr: string | undefined;
  isDisabled: boolean;
  isSmallMobile?: boolean;
}

interface GoodCardProps extends LayoutProp {
  isDisabled?: boolean;
  header: React.ReactElement;
  footer: React.ReactElement;
  isSmallMobile?: boolean;
}

export function GoodCard({
  layout,
  isDisabled = false,
  header,
  footer,
  isSmallMobile = false,
}: GoodCardProps) {
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
  discount: number | undefined;
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
  oldPrice: number | undefined;
  productTitle: string;
  unitPrice: number | undefined;
  unitType: string | undefined;
  expireDateStr: string | undefined;
  id: string;
}

export function GoodCardFooter({
  price,
  oldPrice,
  productTitle,
  unitPrice,
  unitType,
  layout,
  expireDateStr,
  id,
}: GoodCardFooterProps) {
  return (
    <div className={goodCardTextWrapper}>
      <div className={cn(goodCardPrices, goodCardPrices)}>
        <span className={current}>{price}€</span>
        {oldPrice && <span className={old}>{oldPrice}€</span>}
      </div>
      <a href={`/product/${id}`} className={title}>
        {productTitle}
      </a>
      {layout === "desktop" && (
        <h4 className={pricePerKilo}>
          {unitPrice && unitType && `${unitPrice}€/${unitType}`}
        </h4>
      )}
      {expireDateStr && <h4 className={discountUntil}>{expireDateStr}</h4>}
    </div>
  );
}
