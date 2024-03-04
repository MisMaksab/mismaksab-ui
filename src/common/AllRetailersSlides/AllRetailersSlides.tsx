import React from "react";
import { RetailerCard, RetailerCardProps } from "../RetailerCard/RetailerCard";
import { LayoutProp } from "../../common/LayoutProp";

interface AllRetailersSlidesProps extends LayoutProp {
  slidesData: RetailerCardProps[];
}

export function AllRetailersSlides({
  layout,
  slidesData,
}: AllRetailersSlidesProps) {
  return (
    <>
      {slidesData.map((slide) => (
        <RetailerCard
          layout={layout}
          key={slide.id}
          retailerLink={slide.retailerLink}
          retailerImageURL={slide.retailerImageURL}
          discountText={slide.discountText}
          retailer={slide.retailer}
          offersText={slide.offersText}
          isDisabled={slide.isDisabled}
        />
      ))}
    </>
  );
}
