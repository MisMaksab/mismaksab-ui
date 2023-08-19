import React from 'react'
import styles from './DesktopRetailersSlider.scss';
import { DesktopSlider } from '../DesktopSlider/DesktopSlider';
import { _AllRetailersSlides } from '../../common/_AllRetailersSlides/_AllRetailersSlides';


interface DesktopRetailersSliderProps {
  slidesData: [];
}

export function DesktopRetailersSlider({slidesData}: DesktopRetailersSliderProps) {
  return (
    <div className={styles.retailersSlider}>
      <DesktopSlider slides={<_AllRetailersSlides slidesData={slidesData}/>}/>
    </div>
  )
}
