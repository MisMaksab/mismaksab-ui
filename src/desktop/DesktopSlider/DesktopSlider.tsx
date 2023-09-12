import React, { useState, useEffect, useRef, useCallback} from 'react'
import styles from './DesktopSlider.scss';

import {DesktopArrowButton} from '../DesktopArrowButton/DesktopArrowButton';

interface DesktopSliderProps {
  children: React.ReactElement;
}

export function DesktopSlider({children}: DesktopSliderProps) {
  const [offset, setOffset] = useState(0);
  const [isPrevBtnShown, setIsPrevBtnShown] = useState(false);
  const [isNextBtnShown, setIsNextBtnShown] = useState(false);
  const [offsetWidth, setOffsetWidth] = useState({
    sliderBox: 0,
    allSlides: 0
  });
  
  const sliderBox = useRef<HTMLDivElement | null>(null); //slides wrapper

  // set widths function
  function setWidths() {
    setOffsetWidth({
      sliderBox: sliderBox?.current?.offsetWidth || 0,
      allSlides: (sliderBox?.current?.children[0] as any)?.offsetWidth || 0,
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
          {children}
        </div>
      </div>
      <DesktopArrowButton type='next' isShown={isNextBtnShown} onClick={handleNextSlide}/>
    </div>
  )
}
