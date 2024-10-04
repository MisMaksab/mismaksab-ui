import { css } from '@linaria/core';
import { secondaryColorLight } from "../../styles";

export const defaultStyles = css`
  display: flex;
  flex-grow: 2;
  align-items: center;
  position: relative;
  background-color: ${secondaryColorLight};
  transition: .2s;
`;
  
export const desktopExpanedCN = css`
  margin: 0 40px;
  border-radius: 50px;
  height: 42px;
`;

export const searchInput = css`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 0 0 33px;
  font-size: 20px;
  background: none;
  width: 100%;
  height: 100%;
  outline:none;
  border:none;

  &:hover {
      border: none;
  }
`

export const hideInputCN = css`
  .${searchInput} {
    display: none;
  }
`

export const mobileExpandedCN = css`
  border-radius: 50px;
  height: 42px;
`;

export const mobileShrinkedCN = css`
  position: absolute;
  right: -4px;
  border-radius: 50px;
  height: 42px;

  width: calc(100vw - 30px);
`;

export const highlightCN = css`
  box-shadow: 0px 0px 4px 5px rgba(0,0,0,.04);
`

export const searchSvgContainer = css`
  outline: none;
  border: none;
  margin: 0;
  background: transparent;
  line-height: 1.5;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 0 17px;
`

export const mobileBurgerMenuCN = css`
  margin: 0;
  height: 30px;

  &.${searchInput} {
    padding: 0 0 0 12px;
    font-size: 15px;
  }

  .${searchSvgContainer} {
    padding: 0 12px;
  }
`

export const searchSvgCN = css`
  height: 100%;
  min-width: 20px;
  display: flex;
  align-items: center;
`