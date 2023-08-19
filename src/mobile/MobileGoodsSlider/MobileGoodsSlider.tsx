import React from 'react'
import { MobileSlider } from '../MobileSlider/MobileSlider';
import { _AllGoodsSlides } from '../../common/_AllGoodsSlides/_AllGoodsSlides';

interface MobileGoodsSliderProps {
  slidesData: [];
}

export function MobileGoodsSlider({slidesData}: MobileGoodsSliderProps) {
  return (
    <MobileSlider slidesData={<_AllGoodsSlides slidesData={slidesData}/>}/>
  )
}