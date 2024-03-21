import React from "react";
import { GoodCard, GoodCardFooter, GoodCardHeader } from "../GoodCard/GoodCard";
import { GoodCardDataProps } from "../../common/GoodCard/GoodCard";

interface AllGoodsSlidesProps {
  slidesData: GoodCardDataProps[];
}

export function AllGoodsSlides({ slidesData }: AllGoodsSlidesProps) {
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
              layout={slide.layout}
            />
          }
          footer={
            <GoodCardFooter
              price={slide.price}
              oldPrice={slide.oldPrice}
              productTitle={slide.productTitle}
              unitPrice={slide.unitPrice}
              unitType={slide.unitType}
              layout={slide.layout}
              expireDateStr={slide.expireDateStr}
              id={slide.id}
            />
          }
          isDisabled={slide.isDisabled}
          layout={slide.layout}
        />
      ))}
    </>
  );
}
