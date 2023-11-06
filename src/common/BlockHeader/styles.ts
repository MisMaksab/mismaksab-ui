import { css } from '@linaria/core';

import {MobileCN, DesktopCN, fontColorDark} from "../../styles";

export const thin = css`
    font-weight: 400;
`;

export const title = css`
    color: ${fontColorDark};
    font-size: 32px;
    font-weight: 500;
    line-height: 100%; /* 32px */
    margin: 0;
`;

export const blockHeaderGoBackBtn = css`
    position: absolute;
    left: 17px;
`;

export const subTitle = css`
    color: ${fontColorDark};
    font-size: 20px;
    font-weight: 400;
    line-height: 100%; /* 20px */
    padding-top: 24px;
    display: inline-block;
    width: 100%;
`;

export const removePaddingTop = css`
    padding-top: 0; 
`;

export const justifyCenter = css`
    justify-content: center;
`;

export const blockHeader = css`
    padding: 79px 0px 51px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    gap:15px;

    .${MobileCN} {
        padding: 29px 19px 19px;
    }

    .${title} {
        font-size: 24px;
        font-weight: 600;
    }

    .${DesktopCN} {}
`;
