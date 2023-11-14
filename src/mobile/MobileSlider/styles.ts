import { css } from '@linaria/core';

export const slider = css`
  max-width: 768px;
  position: relative;
  display: flex;
  box-sizing: content-box;
  margin: -7px 0px -7px 12px;
`

export const sliderBox = css`
  overflow: auto;
`

export const sliderSlides = css`
  display: inline-flex;
  flex-wrap: nowrap;
  padding-right: 12px;
`