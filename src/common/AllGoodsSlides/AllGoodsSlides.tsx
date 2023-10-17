import React from "react"
import { GoodCard, GoodCardFooter, GoodCardHeader } from "../GoodCard/GoodCard"

export function AllGoodsSlides({slidesData}: any) {
  return (
    <>
      {slidesData.map((slide: any) =>
        <GoodCard
          key={slide.productId}
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
              />
          }
          productId={slide.productId}
          isDisabled={slide.isDisabled}
          addedToList={slide.addedToList}
          addToList={slide.addToList}
          layout={slide.layout}
        />
      )}
    </>
  )
}