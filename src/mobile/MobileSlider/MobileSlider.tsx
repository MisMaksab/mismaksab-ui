import React from 'react'
import styles from './MobileSlider.scss';

interface MobileSliderProps {
  slidesData: React.ReactElement;
}

export function MobileSlider({slidesData}: MobileSliderProps) {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderBox}>
        <div className={styles.sliderSlides}>
          {slidesData}
        </div>
      </div>
    </div>
  )
}
