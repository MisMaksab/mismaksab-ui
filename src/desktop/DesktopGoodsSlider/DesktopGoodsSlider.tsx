import React, { useState, useEffect, useRef, useCallback} from 'react'
import styles from './DesktopGoodsSlider.scss';

// fetch hook
import { DesktopSlider } from '../DesktopSlider/DesktopSlider';
import { _AllGoodsSlides } from '../../common/_AllGoodsSlides/_AllGoodsSlides';

interface DesktopGoodsSliderProps {
  slidesData: [];
}

export function DesktopGoodsSlider({slidesData}: DesktopGoodsSliderProps) {
  return (
    <div className={styles.goodsSlider}>
      <DesktopSlider slides={<_AllGoodsSlides slidesData={slidesData}/>}/>
    </div>
  )
}