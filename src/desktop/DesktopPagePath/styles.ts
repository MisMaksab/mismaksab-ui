import {css} from "@linaria/core";
import { fontColorDark } from "../../styles";

export const pagePathContainer = css`
  display: flex;
  justify-content: space-between;
  gap: 0 30px;
`

export const pagePath = css`
  display: flex;
`;

export const pagePathItemWrapper = css`
  display: flex;
  align-items: center;
`

export const pagePathItem = css`
  color: ${fontColorDark};
  font-size: 20px;
  font-weight: 400;
  line-height: 100%; /* 20px */
  cursor: pointer;
`

export const pagePathItemSVG = css`
  padding:0 10px;
`;