import {css} from "@linaria/core";

import { MobileCN, fontColorDark, fontColorLight, fontColorMain, tertiaryColorLight, tertiaryColorMain } from "styles";

const desktopCardDimensions = "216px";
const mobileCardDimensions = "114px";
const retailerCardHeaderHeight = "106px";

export const retailerCardHeader = css`
    margin: 25px;
    border: 1px solid ${fontColorLight};
    border-radius: 10px;
    background: white;
    height: ${retailerCardHeaderHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const retailerImage = css`
    max-width: 120px;
    max-height: 70px;
`;

export const discountText = css`
    max-width: 120px;
    max-height: 70px;
`;

export const retailerCardFooter = css`
    padding: 0 33px 14px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: ${fontColorDark};
`;

export const retailer = css`
    font-size: 14px;
    text-transform: capitalize;
    padding-bottom: 5px;
`;

export const offers = css`
    font-size: 18px;
    flex-grow: 2;
`;

export const disabled = css`
    background: ${fontColorLight};
    pointer-events: none;

    .${discountText} {
        background: ${fontColorMain};
    }
`;

export const retailerCardShopLink = css`
    text-decoration: underline;
    color: ${tertiaryColorMain};
    font-size: 20px;
    font-weight: 400;
    line-height: 100%;
    margin: 28px 0;
    margin-bottom: 28px;
    padding: 12px 10px;
`;

export const retailerCard = css`
    text-decoration: none;
    position: relative;
    min-height: ${desktopCardDimensions};
    width: ${desktopCardDimensions};
    border-radius: 10px;
    margin: 7px;
    border: 1px solid ${fontColorLight};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .3s;
    background: ${tertiaryColorLight};

    &:hover {
        box-shadow: 0px 0px 7px 0px rgba(90, 194, 233, 0.80);;
    }

    &.${MobileCN} {
        width: ${mobileCardDimensions};
        min-height: ${mobileCardDimensions};
        border-radius: 5px;

        .${retailerCardShopLink} {
            font-size: 14px;
            margin-top: 0;
        }

        .${retailerCardHeader} {
            border-radius: 5px;
            margin: 12px 12px 3px;
            height: calc(${retailerCardHeaderHeight} / 2);
      
            .${retailerImage} {
              max-width: 60px;
              max-height: 40px;
            }
      
            .${discountText} {
              font-size: 9px;
              right: 5px;
              padding: 0 3px;
              border-radius: 5px;
            }
          }
      
          .${retailerCardFooter} {
            padding: 0 16px 6px;
      
            .${retailer} {
              line-height: 140%;
              font-size: 9px;
              padding: 0;
              font-weight: 600;
            }
            
            .${offers} {
              line-height: 140%;
              font-size: 10px;
            }
          }
    }
`;

export const retailerCardWrapper = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.${MobileCN} {
        max-width: 140px;

        .${retailerCardShopLink} {
            font-size: 14px;
            padding: 5px;
            margin: 5px 0 35px;
            text-align: center;
        }
    }

    .${retailerCardShopLink} {
        font-size: 14px;
        padding: 5px;
        margin: 5px 0 35px;
        text-align: center;
    }
`;
