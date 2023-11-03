import React from 'react'
import { MobileSlider } from '../MobileSlider/MobileSlider';
import { AllRetailersSlides } from '../../common/AllRetailersSlides/AllRetailersSlides';

interface MobileRetailersSliderProps {
  slidesData: any[];
}

export function MobileRetailersSlider({slidesData}: MobileRetailersSliderProps) {
  return (
    <MobileSlider>
      <AllRetailersSlides slidesData={slidesData}/>
    </MobileSlider>
  )
}