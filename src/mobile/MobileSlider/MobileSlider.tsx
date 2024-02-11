'use client'

import React from "react";
import { slider, sliderBox, sliderSlides } from "./styles";

interface MobileSliderProps {
  children: React.ReactElement;
}

export function MobileSlider({ children }: MobileSliderProps) {
  return (
    <div className={slider}>
      <div className={sliderBox}>
        <div className={sliderSlides}>{children}</div>
      </div>
    </div>
  );
}
