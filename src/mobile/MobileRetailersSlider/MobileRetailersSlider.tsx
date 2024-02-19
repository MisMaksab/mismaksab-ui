import React from "react";
import { MobileSlider } from "../MobileSlider/MobileSlider";
import { AllRetailersSlides } from "../../common/AllRetailersSlides/AllRetailersSlides";

interface MobileRetailersSliderProps {
  slidesData: number[];
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
