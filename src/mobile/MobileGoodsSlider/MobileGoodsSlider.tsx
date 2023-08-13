import React from 'react'
import styles from './MobileGoodsSlider.scss';
import { GoodCard } from '../../common/GoodCard/GoodCard';

interface MobileGoodsSliderProps {
  slides: [];
}

export function MobileGoodsSlider({slides}: MobileGoodsSliderProps) {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderBox}>
        <div className={styles.sliderSlides}>
          {slides.map(slide =>
            <GoodCard key={slide}
              layout='mobile'
              productId={slide.id} //delete it after
              productImageURL='https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg'
              discount={21}
              retailerImageURL=''
              price={4.29}
              oldPrice={5.39}
              productTitle='Корм собачий ORLANDO GOURVE, 3 кг'
              unitPrice={1.43}
              expireDateStr='скидка до 15.04'
              unitType='kg'
              isDisabled={false}
            />
          )}
        </div>
      </div>
    </div>
  )
}
