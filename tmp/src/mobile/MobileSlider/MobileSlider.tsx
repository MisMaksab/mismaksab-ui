import React from 'react'
import styles from './MobileSlider.scss';

interface MobileSliderProps {
  children: React.ReactElement;
}

export function MobileSlider({children}: MobileSliderProps) {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderBox}>
        <div className={styles.sliderSlides}>
          {children}
        </div>
      </div>
    </div>
  )
}
