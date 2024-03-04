import { css } from "@linaria/core";

export const sliderWrapper = css`
  width: 100%;
  padding-top: 50px;
  margin-left: -7px;
`

export const slider = css`
  position: relative;
  display: flex;
  box-sizing: content-box;
`

export const sliderBoxCN = css`
  overflow: hidden;
  margin: -7px 0;
  padding: 7px 0;
}
`

export const sliderSlides = css`
  display: inline-flex;
  flex-wrap: nowrap;
  transition: .3s;
`
