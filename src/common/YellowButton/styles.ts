import { css } from '@linaria/core';

import { secondaryColorLight, fontColorDark, tertiaryColorMain, MobileCN } from "../../styles";

export const title = css`
    font-size: 20px;
    font-weight: 400;
    line-height: 100%; /* 20px */
`;

export const svg = css`
    transition: transform .3s;
    margin-left: 6px;
    transform-origin: center;
    width: 11px;
    height: 6px;
`;

export const yellowButton = css`
    cursor: pointer;
    color: ${fontColorDark};
    text-decoration: none;
    background-color: ${secondaryColorLight};
    border-radius: 50px;
    padding: 0 13px 0 16px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    transition: .3s;

    &:hover {
        box-shadow: 0px 0px 8px 0px ${tertiaryColorMain};
    }

    &:active {
        background-color: ${tertiaryColorMain};
    }

    &.${MobileCN} {
        display: inline-flex;
        align-items: center;
        border-radius: 15px;
        height: 27px;
        box-sizing: border-box;
        padding: 0.4rem 0.5rem 0.4rem 0.7rem;

        .${title} {
                font-size: 14px;
            }

        .${svg} {
                width: 7px;
                
                margin-left: 2px;
            }
        }
    }
`;

export const active = css`
    transform: rotate(180deg);
`;

export const rotate = css`
    transform: rotate(-90deg);
    margin-top: 1px;
`;
