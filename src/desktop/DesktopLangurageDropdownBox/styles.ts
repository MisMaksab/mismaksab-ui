import {css} from "@linaria/core";
import { fontColorDark, fontColorLight, secondaryColorLight } from 'styles';

export const language = css`
    border: 1px solid ${fontColorLight};
    box-shadow: 0px 0px 8.4px 0px rgba(0, 0, 0, 0.20);
`

export const languageLang = css`
    padding: 8px 0;
    color:${fontColorDark};
    display: flex;
    align-items: center;
    transition: .3s;
    font-weight: 400;
    font-size: 16px;
    position: relative;

    &:hover {
        background: ${secondaryColorLight};
    }
`

export const languageLink = css`
    text-decoration: none;
`

export const markCN = css`
    position: absolute;
    right: 12px;
    width: 20px;
    height: 20px;
`

export const active = css`
    background: ${secondaryColorLight};
`

export const shortText = css`
    text-transform: uppercase;
    width: 60px;
    display: flex;
    text-align: center;
    justify-content: center;
`

export const longText = css`
    text-transform: capitalize;
    display: flex;
    align-items: center;

    &:before {
        content:'';
        display: block;
        width: 1px;
        height: 17px;
        background: #DEDEDE;
        margin-right: 10px;
    }
`