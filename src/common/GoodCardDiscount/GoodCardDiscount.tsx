import React from "react";
import cn from "classnames";
import { LayoutProp } from "../LayoutProp";
import {
  discountCN,
  small,
  discountPercentage,
  discountImage,
  img,
  expandedCN,
  smallMobile,
} from "./styles";
import { MobileCN } from "../../styles";

interface GoodCardDiscountProps extends LayoutProp {
  discount: number;
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
      <div className={discountPercentage}>{discount}%</div>

      {image && (
        <div className={discountImage}>
          <img src={image} className={img} />
        </div>
      )}
    </div>
  );
}
