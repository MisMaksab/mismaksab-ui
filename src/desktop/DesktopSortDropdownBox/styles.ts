import {css} from '@linaria/core';
import { fontColorDark, secondaryColorDark } from 'styles';

export const sort = css`
  border: 1px solid ${secondaryColorDark};
`

export const sortItem = css`
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