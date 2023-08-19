import React from "react"
import { RetailerCard } from "../RetailerCard/RetailerCard"

export function _AllRetailersSlides({slidesData}) {
  return (
    <>
      {slidesData.map(slide =>
        <RetailerCard
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