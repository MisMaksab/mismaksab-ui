import { css } from '@linaria/core';
import { fontColorMain, primaryColorMain } from 'styles';

export const footerInfo = css`
  display: flex;
  justify-content: space-between;
  font-size: 21px;
  line-height: 100%; /* 21px */
`

export const copyright = css`
  color: ${primaryColorMain};
`

export const mail = css`
  text-decoration: none;
  color: ${fontColorMain};
`