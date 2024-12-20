import cn from "classnames";
import { MobileCN } from "../../styles";
import { useFallbackImageInSSR } from "../FallbackImage/FallbackImage";
import { GoodCardDiscount } from "../GoodCardDiscount/GoodCardDiscount";
import { LayoutProp } from "../LayoutProp";
import {
  current,
  disabled,
  discountUntil,
  goodCard,
  goodCardImage,
  goodCardPrices,
  goodCardTextWrapper,
  old,
  pricePerKilo,
  retailerImg,
  smallMobile,
  title,
} from "./styles";

export interface GoodCardDataProps extends LayoutProp {
  id: string;
  productImageURL: string;
  retailerImageURL: string;
  discount: number | undefined;
  price: string;
  oldPrice: string | undefined;
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
  id: string;
}

export function GoodCard({
  layout,
  isDisabled = false,
  header,
  footer,
  isSmallMobile = false,
  id,
}: GoodCardProps) {
  return (
    <a
      href={`/product/${id}`}
      className={cn(goodCard, {
        [MobileCN]: layout === "mobile",
        [disabled]: isDisabled,
        [smallMobile]: isSmallMobile,
      })}
    >
      {header}
      {footer}
    </a>
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
  const fallbackImageProps = useFallbackImageInSSR()

  return (
    <div className={goodCardImage}>
      <img
        className={retailerImg}
        src={productImageURL}
        {...fallbackImageProps}
      />
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
  price: string;
  oldPrice: string | undefined;
  productTitle: string;
  unitPrice: number | undefined;
  unitType: string | undefined;
  expireDateStr: string | undefined;
}

export function GoodCardFooter({
  price,
  oldPrice,
  productTitle,
  unitPrice,
  unitType,
  layout,
  expireDateStr,
}: GoodCardFooterProps) {
  let modifiedTitle: string = productTitle;
  if (layout === "mobile" && productTitle.length > 30) {
    modifiedTitle = productTitle.substring(0, 30) + "...";
  }

  return (
    <div className={goodCardTextWrapper}>
      <div className={cn(goodCardPrices, goodCardPrices)}>
        <span className={current}>{price}€</span>
        {oldPrice && <span className={old}>{oldPrice}€</span>}
      </div>
      <span className={title}>{modifiedTitle}</span>
      {layout === "desktop" && (
        <h4 className={pricePerKilo}>
          {unitPrice && unitType && `${unitPrice}€/${unitType}`}
        </h4>
      )}
      {expireDateStr && <h4 className={discountUntil}>{expireDateStr}</h4>}
    </div>
  );
}
