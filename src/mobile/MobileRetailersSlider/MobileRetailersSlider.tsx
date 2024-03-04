import React from "react";
import { MobileSlider } from "../MobileSlider/MobileSlider";
import { AllRetailersSlides } from "../../common/AllRetailersSlides/AllRetailersSlides";
import { RetailerCardProps } from "../../common/RetailerCard/RetailerCard";

interface MobileRetailersSliderProps {
  slidesData: RetailerCardProps[];
}

export function MobileRetailersSlider({
  slidesData,
}: MobileRetailersSliderProps) {
  return (
    <MobileSlider>
      <AllRetailersSlides layout="mobile" slidesData={slidesData} />
    </MobileSlider>
  );
}
