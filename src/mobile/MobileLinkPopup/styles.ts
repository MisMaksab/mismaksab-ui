import {css} from "@linaria/core";
import { backgoundLayer, fontColorDark, primaryColorDark, quaternaryColorMain, secondaryColorDark, secondaryColorLight } from "../../styles";

export const activeCN = css``
export const popupContent = css`
  transform-origin: bottom;
  transition: .3s;
  transform: scale(0);
  max-width: 768px;
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  background: #FFF;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  padding: 32px 0 38px;
  box-sizing: border-box;
`

export const popup = css`
  width: 100vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${backgoundLayer};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  pointer-events: none;
  opacity: 0;
  transition: .3s;
  z-index: 100;

  &.${activeCN}, &.${activeCN} .${popupContent} {
    opacity: 1;
    transform: scale(1);
    pointer-events: all;
  }
`

export const titleCN = css`
  padding: 0 25px;
  font-size: 32px;
  font-weight: 600;
  line-height: 100%; /* 32px */
  margin: 0;
  padding-bottom: 30px;
`

export const popupCloseCross = css`
  position: absolute;
  right: 15px;
  top: 15px;
`

export const popupOptionsWrapper = css`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;
`

export const popupOption = css`
  text-decoration: none;
  padding: 16px 39px 16px 24px;
  transition: .3s;
  color: ${fontColorDark};
  font-size: 24px;
  font-weight: 500;
  line-height: 100%; /* 24px */
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;

  &:hover, &.${activeCN} {
    background: ${secondaryColorLight};
  }
`

export const markCN = css`
  width: 24px;
  height: 24px;
`

export const popupOptionCheckbox = css``
export const color = css``
export const bg = css``
export const border = css``

export const popupGreen = css`
  &.${color} {color: ${primaryColorDark};}
  &.${border} {border-color: ${primaryColorDark};}
  &.${bg} {background: ${primaryColorDark};}
`

export const popupYellow = css`
  &.${color} {color: ${secondaryColorDark};}
  &.${border} {border-color: ${secondaryColorDark};}
  &.${bg} {background: ${secondaryColorDark};}
`

export const popupBlue = css`
  &.${color} {color: ${quaternaryColorMain};}
  &.${border} {border-color: ${quaternaryColorMain};}
  &.${bg} {background: ${quaternaryColorMain};}
`

export const popupDefault = css`
  &.${color} {color: ${fontColorDark};}
  &.${border} {border-color: ${fontColorDark};}
  &.${bg} {background: ${fontColorDark};}
`

export const hidden = css``

export const customCheckbox = css`
    &.${hidden} {display: none;}

    appearance: none;
    background-color: white;
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 24px;
    height: 24px;
    border: 1px solid currentColor;
    border-radius: 5px;

    display: grid;
    place-content: center;

    &::before {
      content: "";
      width: 0.5em;
      height: 0.5em;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      transform: scale(0);
      transform-origin: center;
      transition: 120ms transform ease-in-out;
      background-color: ${fontColorDark};
    }

  &:checked::before {
    transform: scale(1);
  }

  &:disabled {
    color: ${fontColorDark};
    cursor: not-allowed;
  }
`