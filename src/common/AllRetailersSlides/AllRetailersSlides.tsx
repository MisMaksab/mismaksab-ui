import { RetailerCard, RetailerCardProps } from "../RetailerCard/RetailerCard";

interface AllRetailersSlidesProps {
  slidesData: RetailerCardProps[];
}

export function AllRetailersSlides({ slidesData }: AllRetailersSlidesProps) {
  return (
    <>
      {slidesData.map((slide) => (
        <RetailerCard
          id={slide.id}
          layout={slide.layout}
          key={slide.retailerLink}
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
