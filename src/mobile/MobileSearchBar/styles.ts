import { css } from '@linaria/core';
import { fontColorDark, secondaryColorLight } from "../../styles";

export const search = css`
  display: flex;
  flex-grow: 2;
  align-items: center;
  margin: 0 40px;
  border-radius: 50px;
  transition: .2s;
`

export const searchInput = css`
  display: flex;
  align-items: center;
  overflow: hidden;
  font-size: 20px;
  background: none;
  width: 100%;
  height: 100%;
  outline:none;
  border:none;
`

export const sideBarOpenCN = css`
  margin: 0;
  height: 29px;

  &.${searchInput} {
    padding: 0 0 0 12px;
    font-size: 15px;
  }
`

// !!!!!
export const searchSvgCN = css`
  height: 50%;
`

export const searchSvgContainer = css`
  display: flex;
  align-items: center;
  height: 29px
  width: 29px;
  justify-content:center;
  cursor: pointer;
`

export const shownCN = css``
export const expanded = css``
export const searchControl = css`
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${secondaryColorLight};
  
  
  &.${expanded} {
    padding: 0 5px 0 28px;
  }

  &.${shownCN} {
    box-shadow: 0px 0px 4px 5px rgba(0,0,0,.04);
  }
`

export const active = css``
export const searchPanel = css`
  position: absolute;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  transition: opacity .3s;
  opacity: 0;
  padding: 16px
  background: white;

  &.${active} {
    pointer-events:all;
    opacity: 1;
  }
`

export const searchPanelControl = css`
  display: flex;
  gap: 0 29px;
  align-items:center;
`

export const searchPanelResults = css``
export const input = css``
export const searchPanelInputCross = css``
export const searchPanelInput = css`
  display: flex;
  width: 100%;
  background-color: ${secondaryColorLight};
  border-radius: 50px;


  .${input} {
    background: none;
    color: ${fontColorDark};
    font-size: 20px;
    font-weight: 400;
    line-height: 100%; /* 20px */
    width: 100%;
    height: 100%;
    outline:none;
    border:none;
    padding: 7px 8px 7px 19px;
  }

  .${searchPanelInputCross} {
    padding: 0 11px 0 0;
    display:flex;
    align-items: center;
    opacity: 0;
    transition: opacity .3s;

    &.${active} {
      opacity: 1;
    }
  }
`