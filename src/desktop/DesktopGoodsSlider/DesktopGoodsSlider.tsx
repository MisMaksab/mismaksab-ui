import React, { useState, useEffect, useRef, useCallback} from 'react'
import styles from './DesktopGoodsSlider.scss';
import cn from 'classnames';

// fetch hook
import { GoodCard } from '../../common/GoodCard/GoodCard';
import {DesktopArrowButton} from '../DesktopArrowButton/DesktopArrowButton';


interface DesktopGoodsSliderProps {
  slides: [];
}

export function DesktopGoodsSlider({slides}: DesktopGoodsSliderProps) {
  const [offset, setOffset] = useState(0);
  const [isPrevBtnShown, setIsPrevBtnShown] = useState(false);
  const [isNextBtnShown, setIsNextBtnShown] = useState(false);
  const [offsetWidth, setOffsetWidth] = useState({
    sliderBox: 0,
    allSlides: 0
  });
  
  const sliderBox = useRef(null); //slides wrapper

  // set widths function
  function setWidths() {
    setOffsetWidth({
      sliderBox: sliderBox.current.offsetWidth,
      allSlides: sliderBox.current.children[0].offsetWidth
    });
  }

  // custom fetch hook
  useEffect(() => {
    setWidths()
    window.addEventListener('resize', setWidths);

    return () => {
      window.removeEventListener('resize', setWidths);
    }
  }, [])

  // change visibility of slider buttons
  useEffect(() => {
    
    offset >= 0 ? setIsPrevBtnShown(false): setIsPrevBtnShown(true); //show or disable prev slide button
    offsetWidth.allSlides + offset - offsetWidth.sliderBox > 0 ? setIsNextBtnShown(true): setIsNextBtnShown(false); //show or disable next slide button
  }, [offsetWidth, offset]);

  const handleNextSlide = useCallback(() => {
    let newOffset = offset - offsetWidth.sliderBox;
    const maxOffset = -Math.abs(offsetWidth.allSlides - offsetWidth.sliderBox); //max possible offset to right elem
    // scroll to ending
    if (newOffset < maxOffset) newOffset = maxOffset; //number are negative, so <

    setOffset(newOffset);
  },[offset, offsetWidth]);

  const handlePrevSlide = useCallback(() => {
    let newOffset = offset + offsetWidth.sliderBox;
    // scroll to beginning
    if (newOffset > 0) newOffset = 0;

    setOffset(newOffset);
  },[offset, offsetWidth.sliderBox]);

  return (
    <div className={styles.slider}>
      <DesktopArrowButton type='prev' isShown={isPrevBtnShown} onClick={handlePrevSlide}/>
      <div ref={sliderBox} className={styles.sliderBox}>
        <div
          className={styles.sliderSlides}
          style={{transform: `translateX(${offset}px)`}}
        >
          {slides.map(slide =>
            <GoodCard key={slide}
              layout='desktop'
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
      <DesktopArrowButton type='next' isShown={isNextBtnShown} onClick={handleNextSlide}/>
    </div>
  )
}