import { GoodCardDataProps } from "../../common/GoodCard/GoodCard";
import { GoodCard, GoodCardFooter, GoodCardHeader } from "../GoodCard/GoodCard";

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
            />
          }
          isDisabled={slide.isDisabled}
          layout={slide.layout}
          id={slide.id}
        />
      ))}
    </>
  );
}
