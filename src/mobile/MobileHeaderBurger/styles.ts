import { css } from "@linaria/core";
import { fontColorDark, backgoundLayer, secondaryColorLight } from "../../styles";

export const burger = css``
export const open = css``

export const burgerIcon = css`
  display: flex;
  flex-direction: column;
  gap:3px;
  cursor: pointer;
`

export const burgerItem = css`
  width: 20px;
  height: 4px;
  border-radius: 10px;
  background: ${fontColorDark};
`

export const burgerMenuWrapper = css`
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${backgoundLayer};
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s;

  &.${open} {
    opacity: 1;
    pointer-events: all;
  }
`

export const burgerMenu = css`
  background: white;
  position: absolute;
  width: calc(100vw - 50px);
  min-height: 100%;
  box-sizing: border-box;
  left: -100%;
  right: 0;
  top: 0;
  z-index: 11;
  padding: 32px 19px 32px 29px;
  transition: .3s;

  &.${open} {
    left:0;
  }
`

export const burgerMenuContent = css`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

export const burgerMenuBar = css`
  width: 100%;
  height: 1px;
  background: ${secondaryColorLight};
  margin: 25px 0 50px;
`

export const burgerMenuItem = css`
  color: $fontColorDark;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%; /* 20px */
  text-transform: capitalize;
  padding-bottom: 25px;
  cursor: pointer;
`

export const burgerMenuLink = css`
  color: inherit;
  text-decoration: none;
`

export const burgerMenuControls = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 42px;
`

