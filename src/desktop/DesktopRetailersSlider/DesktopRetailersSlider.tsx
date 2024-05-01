;
import { DesktopSlider } from "../DesktopSlider/DesktopSlider";
import { AllRetailersSlides } from "../../common/AllRetailersSlides/AllRetailersSlides";
import { retailersSlider } from "./styles";
import { RetailerCardProps } from "../../common/RetailerCard/RetailerCard";

interface DesktopRetailersSliderProps {
  slidesData: RetailerCardProps[];
}

export function DesktopRetailersSlider({
  slidesData,
}: DesktopRetailersSliderProps) {
  return (
    <div className={retailersSlider}>
      <DesktopSlider>
        <AllRetailersSlides slidesData={slidesData} />
      </DesktopSlider>
    </div>
  );
}
