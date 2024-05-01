import {css} from '@linaria/core';
import { fontColorDark, secondaryColorDark } from "../../styles";

export const sortDropdown = css`
  border: 1px solid ${secondaryColorDark};
  right: 0;
`

export const sortDropdownItem = css`
  cursor: pointer;
  color: ${fontColorDark};
  font-size: 20px;
  font-weight: 600;
  line-height: 100%; /* 20px */
  transition: color .3s;
  padding: 8px 12px;

  &:first-child {padding-top: 16px;}
  &:last-child {padding-bottom: 16px;}
`

export const active = css`
  color: ${secondaryColorDark};
`

export const sortBtn = css`
  color: ${secondaryColorDark};
  font-size: 20px;
  font-weight: 500;
  line-height: 100%; /* 20px */
  display: inline-flex;
  cursor: pointer;
  align-items:center;
  position: relative;
  `;
  
export const sortBtnSvgItem = css`
  width: inherit;
  position: absolute;
`
export const sortBtnSvg = css`
  display: flex;
  flex-direction: column;
  width: 25px;
  height: 29px;

  .${sortBtnSvgItem}:last-child {transform:rotate(180deg);top:4px;}
`


export const sort = css`
  position: relative;
`;
