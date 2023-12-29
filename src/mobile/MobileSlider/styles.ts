import { css } from '@linaria/core';

export const slider = css`
  max-width: 768px;
  position: relative;
  display: flex;
  box-sizing: content-box;
  padding: 13px 8px 0;
`

export const sliderBox = css`
  overflow: auto;
`

export const sliderSlides = css`
  display: inline-flex;
  flex-wrap: nowrap;
`