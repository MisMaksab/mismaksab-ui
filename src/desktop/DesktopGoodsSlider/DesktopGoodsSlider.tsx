import React from "react";
import { DesktopSlider } from "../DesktopSlider/DesktopSlider";
import { AllGoodsSlides } from "../../common/AllGoodsSlides/AllGoodsSlides";
import { goodsSlider } from "./styles";
import { GoodCardDataProps } from "../../common/GoodCard/GoodCard";

interface DesktopGoodsSliderProps {
  slidesData: GoodCardDataProps[];
}

export function DesktopGoodsSlider({ slidesData }: DesktopGoodsSliderProps) {
  return (
    <div className={goodsSlider}>
      <DesktopSlider>
        <AllGoodsSlides slidesData={slidesData} />
      </DesktopSlider>
    </div>
  );
}
