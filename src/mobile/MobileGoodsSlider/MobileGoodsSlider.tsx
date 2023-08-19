import React from 'react'
import { MobileSlider } from '../MobileSlider/MobileSlider';
import { _AllGoodsSlides } from '../../common/AllGoodsSlides/AllGoodsSlides';

interface MobileGoodsSliderProps {
  slidesData: [];
}

export function MobileGoodsSlider({slidesData}: MobileGoodsSliderProps) {
  return (
    <MobileSlider slidesData={<_AllGoodsSlides slidesData={slidesData}/>}/>
  )
}