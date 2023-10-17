import React from "react"
import { RetailerCard } from "../RetailerCard/RetailerCard"

export function AllRetailersSlides({slidesData}: any) {
  return (
    <>
      {slidesData.map((slide: any) =>
        <RetailerCard
          key={slide.productId}
          retailerLink={slide.retailerLink}
          retailerImageURL={slide.retailerImageURL}
          discountText={slide.discountText}
          retailer={slide.retailer}
          offersText={slide.offersText}
          layout={slide.layout}
          isDisabled={slide.isDisabled}
        />
      )}
    </>
  )
}