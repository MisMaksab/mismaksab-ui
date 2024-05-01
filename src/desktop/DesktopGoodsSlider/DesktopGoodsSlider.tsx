;
import { AllGoodsSlides } from "../../common/AllGoodsSlides/AllGoodsSlides";
import { GoodCardDataProps } from "../../common/GoodCard/GoodCard";
import { DesktopSlider } from "../DesktopSlider/DesktopSlider";
import { goodsSlider } from "./styles";

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
