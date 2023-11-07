import { css } from "@linaria/core";

export const sliderWrapper = css`
  width: 100%;
`

export const slider = css`
  position: relative;
  display: flex;
  box-sizing: content-box;
`

export const sliderBoxCN = css`
  overflow: hidden;
`

export const sliderSlides = css`
  display: inline-flex;
  flex-wrap: nowrap;
  transition: .3s;
`

// .sliderWrapper {
//   width: 100%;
// }

// .slider {
//   position: relative;
//   display: flex;
//   box-sizing: content-box;
  
//   .sliderBox {
//       overflow: hidden;
//   }

//   .sliderSlides {
//       display: inline-flex;
//       flex-wrap: nowrap;
//       transition: .3s;
//   }
// }