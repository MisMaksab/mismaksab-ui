import React from 'react'
import styles from './DesktopRetailersSlider.scss';
import { DesktopSlider } from '../DesktopSlider/DesktopSlider';
import { AllRetailersSlides } from '../../common/AllRetailersSlides/AllRetailersSlides';


interface DesktopRetailersSliderProps {
  slidesData: [];
}

export function DesktopRetailersSlider({slidesData}: DesktopRetailersSliderProps) {
  return (
    <div className={styles.retailersSlider}>
      <DesktopSlider>
        <AllRetailersSlides slidesData={slidesData}/>
      </DesktopSlider>
    </div>
  )
}
