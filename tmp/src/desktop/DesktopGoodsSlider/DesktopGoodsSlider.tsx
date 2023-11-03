import React from 'react'
import styles from './DesktopGoodsSlider.scss';

// fetch hook
import { DesktopSlider } from '../DesktopSlider/DesktopSlider';
import { AllGoodsSlides } from '../../common/AllGoodsSlides/AllGoodsSlides';

interface DesktopGoodsSliderProps {
  slidesData: number[];
}

export function DesktopGoodsSlider({slidesData}: DesktopGoodsSliderProps) {
  return (
    <div className={styles.goodsSlider}>
      <DesktopSlider>
        <AllGoodsSlides slidesData={slidesData}/>
      </DesktopSlider>
    </div>
  )
}