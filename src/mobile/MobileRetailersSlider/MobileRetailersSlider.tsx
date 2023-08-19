import React from 'react'
import { MobileSlider } from '../MobileSlider/MobileSlider';
import { _AllRetailersSlides } from '../../common/AllRetailersSlides/AllRetailersSlides';

interface MobileRetailersSliderProps {
  slidesData: [];
}

export function MobileRetailersSlider({slidesData}: MobileRetailersSliderProps) {
  return (
    <MobileSlider slidesData={<_AllRetailersSlides slidesData={slidesData}/>}/>
  )
}