import {css} from "@linaria/core";
import { MobileCN, fontColorDark, secondaryColorLight } from "styles";

export const serviceBlockTitle = css`
    margin: 0;
    color: ${fontColorDark};
    text-transform: capitalize;
    text-align: left;
    font-size: 32px;
    font-weight: 500;
    line-height: 100%; /* 32px */
    padding-bottom: 48px;
`;

export const serviceBlockContent = css`
    display: flex;
    flex-direction: column;
    gap: 27px;
`;

export const centeredCN = css`
    text-align: center;
`;

export const serviceBlockParagraph = css`
    margin: 0;
    padding: 35px 44px 31px;
    border-radius: 10px;
    background: ${secondaryColorLight};
    color: black;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%; /* 16px */
`;

export const serviceBlock = css`
    max-width: 1150px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 50px 0 80px;

    .${MobileCN} {
        padding: 30px 0 50px;
    
        .${serviceBlockTitle} {
            text-align: center;
            font-size: 24px;
            font-weight: 600;
            padding-bottom: 31px;
        }

        .${serviceBlockContent} {
            gap: 8px;

            .${serviceBlockParagraph} {
                padding: 30px 19px 28px 25px;
            }
        }
    }
`;
