import { css } from "@linaria/core";

export const navBar = css`
    padding: 15px 19px;
    display: flex;
    justify-content: center;
    height: 42px;
    box-sizing: content-box;
`

export const navBarContent = css`
    width: 100%;
    max-width: 768px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const navBarLeftItem = css``

export const navBarSearchBar = css`
    width: 100%;
`

export const navBarCenterItem = css`
    h1 {
        margin: 0;
        color: $fontColorDark;
        font-size: 24px;
        font-weight: 500;
        line-height: 100%; /* 24px */
    }
`

export const navBarRightItem = css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-width: 42px;
`
