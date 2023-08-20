import React from 'react'
import { MobileSlider } from '../MobileSlider/MobileSlider';
import { AllRetailersSlides } from '../../common/AllRetailersSlides/AllRetailersSlides';

interface MobileRetailersSliderProps {
  slidesData: [];
}

export function MobileRetailersSlider({slidesData}: MobileRetailersSliderProps) {
  return (
    <MobileSlider slidesData={<AllRetailersSlides slidesData={slidesData}/>}/>
  )
}