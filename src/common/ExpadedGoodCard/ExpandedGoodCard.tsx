import cn from "classnames";
import { DesktopHeaderLogo } from "../../desktop/DesktopHeaderLogo/DesktopHeaderLogo";
import { MobileCN } from "../../styles";
import { GoodCardDataProps } from "../GoodCard/GoodCard";
import { GoodCardDiscount } from "../GoodCardDiscount/GoodCardDiscount";
import { LayoutProp } from "../LayoutProp";
import {
  current,
  discountCN,
  discountText,
  discountUntil,
  expandedGoodCard,
  expandedGoodCardLogo,
  expandedGoodCardMainInfo,
  expandedGoodCardPrices,
  expandedGoodCardSecondaryInfo,
  expandedGoodCardTextWrapper,
  img,
  old,
  pricePerKilo,
  productImage,
  retailer,
  retailerImage,
  retailerText,
  title,
} from "./styles";
import { subTitle } from "../../desktop/DesktopHeaderLogo/styles";

export interface ProductProps extends LayoutProp {
  offer: {
    productImageURL: string;
    price: number;
    oldPrice: number | undefined;
    productTitle: string;
    unitPrice: number | undefined;
    unitType: string | undefined;
    expireDateStr: string | undefined;
    retailerImageURL: string;
    goToRetailerLink: string | undefined;
    goToRetailerText: string;
    retailerCardImage: string;
    discount: number | undefined;
    discountConditionsText: string;
  };
  similarProducts: GoodCardDataProps[];
}

interface ExpandedGoodCardProps extends LayoutProp {
  header: React.ReactElement;
  footer: React.ReactElement;
  subTitle: string;
}

export function ExpandedGoodCard({
  layout,
  header,
  footer,
  subTitle,
}: ExpandedGoodCardProps) {
  return (
    <div
      className={cn(expandedGoodCard, {
        [MobileCN]: layout === "mobile",
      })}
    >
      {header}
      {footer}
      {layout === "desktop" && (
        <div className={expandedGoodCardLogo}>
          <DesktopHeaderLogo title="MisMaksab" subtitle={subTitle} href="/" />
        </div>
      )}
    </div>
  );
}

interface ExpandedGoodCardHeaderProps {
  productImageURL: string;
  price: number;
  oldPrice: number | undefined;
  productTitle: string;
  unitPrice: number | undefined;
  unitType: string | undefined;
  expireDateStr: string | undefined;
}

export function ExpandedGoodCardHeader({
  productImageURL,
  expireDateStr,
  price,
  oldPrice,
  unitPrice,
  unitType,
  productTitle,
}: ExpandedGoodCardHeaderProps) {
  return (
    <div className={expandedGoodCardMainInfo}>
      <div className={productImage}>
        <img className={img} src={productImageURL} />
      </div>

      <div className={expandedGoodCardTextWrapper}>
        {expireDateStr && <h4 className={discountUntil}>{expireDateStr}</h4>}
        <div className={expandedGoodCardPrices}>
          <span className={current}>{price}€</span>
          {oldPrice && <span className={old}>{oldPrice}€</span>}
        </div>
        {unitPrice && unitType && (
          <h4 className={pricePerKilo}>
            {unitPrice}€/{unitType}
          </h4>
        )}
        <a href="/" className={title}>
          {productTitle}
        </a>
      </div>
    </div>
  );
}

interface ExpandedGoodCardFooterProps extends LayoutProp {
  discount: number | undefined;
  retailerImageURL: string;
  goToRetailerText: string;
  goToRetailerLink: string;
  discountConditionsText: string;
  retailerCardImage: string | null;
}

export function ExpandedGoodCardFooter({
  retailerImageURL,
  goToRetailerLink,
  goToRetailerText,
  layout,
  retailerCardImage,
  discount,
  discountConditionsText,
}: ExpandedGoodCardFooterProps) {
  return (
    <div className={expandedGoodCardSecondaryInfo}>
      <div className={retailer}>
        <div className={retailerImage}>
          <img src={retailerImageURL} className={img} />
        </div>
        {goToRetailerLink && (
          <a href={goToRetailerLink} className={retailerText}>
            {goToRetailerText}
          </a>
        )}
      </div>

      {/* <div className={discountCN}>
        <GoodCardDiscount
          layout={layout}
          expanded={true}
          image={retailerCardImage}
          discount={discount}
        />
        <span className={discountText}>{discountConditionsText}</span>
      </div> */}
    </div>
  );
}
