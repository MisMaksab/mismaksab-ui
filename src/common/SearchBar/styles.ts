import { css } from '@linaria/core';
import { secondaryColorLight } from "../../styles";

export const search = css`
  display: flex;
  flex-grow: 2;
  align-items: center;
  position: relative;
  margin: 0 40px;
  border-radius: 50px;
  background-color: ${secondaryColorLight};
  transition: .2s;
  height: 42px;
`

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

export const shownCN = css`
  box-shadow: 0px 0px 4px 5px rgba(0,0,0,.04);
`

export const sideBarOpenCN = css`
  margin: 0;
  height: 30px;

  &.searchInput {
    padding: 0 0 0 12px;
    font-size: 15px;
  }
`

export const searchSvgCN = css`
  height: 100%;
  min-width: 20px;
  display: flex;
  align-items: center;
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