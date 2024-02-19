import React from "react";
import { DesktopSlider } from "../DesktopSlider/DesktopSlider";
import { AllGoodsSlides } from "../../common/AllGoodsSlides/AllGoodsSlides";
import { goodsSlider } from "./styles";

interface DesktopGoodsSliderProps {
  slidesData: any[];
}

export function DesktopGoodsSlider({ slidesData }: DesktopGoodsSliderProps) {
  return (
    <div className={goodsSlider}>
      <DesktopSlider>
        <AllGoodsSlides layout="desktop" slidesData={slidesData} />
      </DesktopSlider>
    </div>
  );
}
