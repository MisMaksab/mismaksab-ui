"use client";

import  { useState, useEffect, useRef, useCallback } from "react";

import {
  DesktopArrowButton,
  DesktopArrowButtonTypeEnum,
} from "../DesktopArrowButton/DesktopArrowButton";
import { sliderWrapper, slider, sliderSlides, sliderBoxCN } from "./styles";

interface DesktopSliderProps {
  children: React.ReactElement;
}

export function DesktopSlider({ children }: DesktopSliderProps) {
  const [offset, setOffset] = useState(0);
  const [isPrevBtnShown, setIsPrevBtnShown] = useState(false);
  const [isNextBtnShown, setIsNextBtnShown] = useState(false);
  const [offsetWidth, setOffsetWidth] = useState({
    sliderBox: 0,
    allSlides: 0,
  });
  const sliderBox = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function setWidths() {
      setOffsetWidth({
        sliderBox: sliderBox?.current?.offsetWidth || 0,
        allSlides: (sliderBox?.current?.children[0] as any)?.offsetWidth || 0,
      });
    }

    setWidths();
    window.addEventListener("resize", setWidths);

    return () => {
      window.removeEventListener("resize", setWidths);
    };
  }, []);

  useEffect(() => {
    offset >= 0 ? setIsPrevBtnShown(false) : setIsPrevBtnShown(true);
    offsetWidth.allSlides + offset - offsetWidth.sliderBox > 0
      ? setIsNextBtnShown(true)
      : setIsNextBtnShown(false);
  }, [offsetWidth, offset]);

  const handleNextSlide = useCallback(() => {
    let newOffset = offset - offsetWidth.sliderBox;
    const maxOffset = -Math.abs(offsetWidth.allSlides - offsetWidth.sliderBox);
    if (newOffset < maxOffset) newOffset = maxOffset;

    setOffset(newOffset);
  }, [offset, offsetWidth]);

  const handlePrevSlide = useCallback(() => {
    let newOffset = offset + offsetWidth.sliderBox;
    if (newOffset > 0) newOffset = 0;

    setOffset(newOffset);
  }, [offset, offsetWidth.sliderBox]);

  return (
    <div className={sliderWrapper}>
      <div className={slider}>
        <DesktopArrowButton
          type={DesktopArrowButtonTypeEnum.prev}
          isShown={isPrevBtnShown}
          onClick={handlePrevSlide}
        />
        <div ref={sliderBox} className={sliderBoxCN}>
          <div
            className={sliderSlides}
            style={{ transform: `translateX(${offset}px)` }}
          >
            {children}
          </div>
        </div>
        <DesktopArrowButton
          type={DesktopArrowButtonTypeEnum.next}
          isShown={isNextBtnShown}
          onClick={handleNextSlide}
        />
      </div>
    </div>
  );
}
