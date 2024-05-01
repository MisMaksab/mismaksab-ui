import cn from "classnames";
import { MobileCN } from "../../styles";
import { LayoutProp } from "../LayoutProp";
import {
  discountCN,
  discountImage,
  discountPercentage,
  expandedCN,
  img,
  small,
  smallMobile,
} from "./styles";

interface GoodCardDiscountProps extends LayoutProp {
  discount: number | undefined;
  image: string | null;
  expanded?: boolean;
  isSmallMobile?: boolean;
}

export function GoodCardDiscount({
  discount,
  image,
  expanded,
  layout,
  isSmallMobile,
}: GoodCardDiscountProps) {
  return (
    <div
      className={cn(discountCN, {
        [MobileCN]: layout === "mobile",
        [expandedCN]: expanded,
        [small]: !expanded,
        [smallMobile]: isSmallMobile,
      })}
    >
      {discount && <div className={discountPercentage}>{discount}%</div>}

      {image && (
        <div className={discountImage}>
          <img src={image} className={img} />
        </div>
      )}
    </div>
  );
}
