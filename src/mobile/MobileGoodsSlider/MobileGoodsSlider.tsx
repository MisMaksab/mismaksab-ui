;
import { MobileSlider } from "../MobileSlider/MobileSlider";
import { AllGoodsSlides } from "../../common/AllGoodsSlides/AllGoodsSlides";
import { GoodCardDataProps } from "../../common/GoodCard/GoodCard";

interface MobileGoodsSliderProps {
  slidesData: GoodCardDataProps[];
}

export function MobileGoodsSlider({ slidesData }: MobileGoodsSliderProps) {
  return (
    <MobileSlider>
      <AllGoodsSlides slidesData={slidesData} />
    </MobileSlider>
  );
}
