import React from 'react'
import { MobileSlider } from '../MobileSlider/MobileSlider';
import { AllRetailersSlides } from '../../common/AllRetailersSlides/AllRetailersSlides';

// TODO here should be normal type instead number
interface MobileRetailersSliderProps {
  slidesData: number[];
}

export function MobileRetailersSlider({slidesData}: MobileRetailersSliderProps) {
  return (
    <MobileSlider>
      <AllRetailersSlides slidesData={slidesData}/>
    </MobileSlider>
  )
}