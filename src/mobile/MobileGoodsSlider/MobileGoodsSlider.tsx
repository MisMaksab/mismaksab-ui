import React from 'react'
import { MobileSlider } from '../MobileSlider/MobileSlider';
import { AllGoodsSlides } from '../../common/AllGoodsSlides/AllGoodsSlides';

// TODO here should be normal type instead number
interface MobileGoodsSliderProps {
  slidesData: any[];
}

export function MobileGoodsSlider({slidesData}: MobileGoodsSliderProps) {
  return (
    <MobileSlider>
      <AllGoodsSlides slidesData={slidesData}/>
    </MobileSlider>
  )
}