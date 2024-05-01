import { css } from "@linaria/core";

export const navBar = css`
    padding: 5px 16px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 4px 0px grey;
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
`
