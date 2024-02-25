import React from "react";
import { GoodCard, GoodCardFooter, GoodCardHeader } from "../GoodCard/GoodCard";
import { LayoutProp } from "common/LayoutProp";
import { GoodCardDataProps } from "common/GoodCard/GoodCard";

interface AllGoodsSlidesProps extends LayoutProp {
  slidesData: GoodCardDataProps[];
}

export function AllGoodsSlides({ layout, slidesData }: AllGoodsSlidesProps) {
  return (
    <>
      {slidesData.map((slide) => (
        <GoodCard
          key={slide.id}
          header={
            <GoodCardHeader
              productImageURL={slide.productImageURL}
              retailerImageURL={slide.retailerImageURL}
              discount={slide.discount}
              layout={layout}
            />
          }
          footer={
            <GoodCardFooter
              price={slide.price}
              oldPrice={slide.oldPrice}
              productTitle={slide.productTitle}
              unitPrice={slide.unitPrice}
              unitType={slide.unitType}
              layout={layout}
              expireDateStr={slide.expireDateStr}
            />
          }
          isDisabled={slide.isDisabled}
          layout={layout}
        />
      ))}
    </>
  );
}
