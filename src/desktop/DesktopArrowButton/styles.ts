import { css } from "@linaria/core";

export const arrowButton = css`
    display: flex;
    align-items: center;
    width: 0;
    cursor: pointer;
    z-index: 100;
    pointer-events: none;
    opacity: 0;
    transition: .3s;
    transform: scale(0);
    position: relative;

    &:hover {
        filter: drop-shadow(0px 0px 4px $fontColorLight);
    }
`

export const prev = css`
    .arrowButtonArrow {
        transform: rotate(180deg) translateX(40px);
    }
`

export const next = css`
    .arrowButtonArrow {
        transform: translateX(-20px);
    }
`

export const shown = css`
    pointer-events: auto;
    opacity: 1;
    transform: scale(1);
`

export const arrowButtonArrow = css`
    width: 60px;
    height: 60px;
    position: absolute;
`
// !!!! не работет направление стрелочек!!!!
// .arrowButton {
//   display: flex;
//   align-items: center;
//   width: 0;
//   cursor: pointer;
//   z-index: 100;
//   pointer-events: none;
//   opacity: 0;
//   transition: .3s;
//   transform: scale(0);
//   position: relative;

//   &.shown {
//       pointer-events: auto;
//       opacity: 1;
//       transform: scale(1);
//   }

//   &:hover {
//       filter: drop-shadow(0px 0px 4px $fontColorLight);
//   }

//   .arrowButtonArrow {
//       width: 60px;
//       height: 60px;
//       position: absolute;
//   }

//   &.prev {
//       .arrowButtonArrow {
//           transform: rotate(180deg) translateX(40px);
//       }
//   }

//   &.next {
//       .arrowButtonArrow {
//           transform: translateX(-20px);
//       }
//   }
// }