import { css } from '@linaria/core';

import {MobileCN, DesktopCN, fontColorDark} from "../../styles";

export const titleCN = css`
    color: ${fontColorDark};
    font-size: 32px;
    font-weight: 600;
    line-height: 100%; /* 32px */
    margin: 0;
`;

export const blockHeaderGoBackBtn = css`
    position: absolute;
    left: 17px;
`;

export const subTitleCN = css`
    color: ${fontColorDark};
    font-size: 20px;
    font-weight: 400;
    line-height: 100%; /* 20px */
    padding-top: 24px;
    display: inline-block;
    width: 100%;
    margin: 0;
`;

export const blockHeader = css`
    padding: 79px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    
    &.${MobileCN} {
        gap:15px;
        padding: 29px 19px 19px;

        .${titleCN} {
            font-size: 24px;
            font-weight: 600;
        }
    }

    .${DesktopCN} {}
`;

export const removePaddingTop = css`
    padding-top: 0; 
`;

export const thin = css`
    font-weight: 400;
`;

export const justifyCenter = css`
    justify-content: center;
`;