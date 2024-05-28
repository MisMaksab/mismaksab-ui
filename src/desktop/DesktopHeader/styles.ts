import { css } from '@linaria/core';
import { headerHeightDesktop, maxWidthDesktop, minWidthDesktop } from '../../styles';

export const header = css`
  height: ${headerHeightDesktop};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,.03);
  display: flex;
  justify-content: center;
`

export const navBar = css`
  padding: 0 65px 0 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: ${minWidthDesktop};
  max-width: ${maxWidthDesktop};
  width: 100%
`;

export const navBarContent = css`
  width: 100%;
  max-width: ${maxWidthDesktop};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const navBarControls = css`
  display: flex;
  align-items: center;
  flex-grow: 2;
`

export const navBarSearchBar = css`
  width: 100%;
`

export const navBarLogo = css``

export const navBarLangDropdown = css``
