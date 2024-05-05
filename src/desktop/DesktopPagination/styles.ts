import {css} from "@linaria/core";
import { fontColorLight, fontColorMain, primaryColorLight } from "../../styles";

export const pagination = css`
  display: flex;
  gap: 0 14px;
  padding-top: 75px;
`;

export const active = css`
`;

export const paginationBtn = css`
  min-width: 27px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid ${fontColorLight};
  color: ${fontColorMain};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.1px;
  cursor: pointer;
  transition: background .3s;

  &:hover, &.${active}{
    background: ${primaryColorLight};
  }
`

export const paginationPrevPageBtn = css`
  padding: 0px 10px;
`

export const paginationNextPageBtn = css`
  padding: 0px 10px;
`

export const paginationPages = css`
  display: flex;
  gap: 0px 14px;
`