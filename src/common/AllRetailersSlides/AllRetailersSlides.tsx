import React from "react";
import { RetailerCard } from "../RetailerCard/RetailerCard";

export function AllRetailersSlides({ layout, slidesData }: any) {
  return (
    <>
      {slidesData.map((slide: any) => (
        <RetailerCard
          layout={layout}
          key={slide.productId}
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
