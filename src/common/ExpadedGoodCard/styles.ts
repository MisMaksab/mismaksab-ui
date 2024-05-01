import { css } from "@linaria/core";
import { MobileCN, fontColorDark, fontColorLight, fontColorMain, primaryColorMain, tertiaryColorMain } from "../../styles";

export const expandedGoodCardMainInfo = css`
    display: flex;
`;

export const productImage = css`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const img = css`
    width: 300px;
`;

export const expandedGoodCardTextWrapper = css`
    padding-left: 36px;
    display: flex;
    flex-grow: 2;
    flex-direction: column;
`;

export const title = css`
    font-size: 30px;
    font-weight: 500;
    margin: 0;
    color: $fontColorDark;
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-grow: 2;

    &:hover {
        text-decoration: underline;
        color: ${tertiaryColorMain};
    }
`;

export const discountUntil = css`
    margin: 0;
    color: ${fontColorMain};
    font-weight: 400;
    font-size: 30px;
    text-transform: lowercase;
    text-align: right;
    line-height: 0;
`;

export const pricePerKilo = css`
    margin: 0;
    color: ${fontColorMain};
    font-weight: 400;
    font-size: 30px;
`;

export const expandedGoodCardPrices = css`
    display: flex;
    align-items: center;
`;

export const current = css`
    font-size: 50px;
    font-weight: 700;
    padding-right: 16px;
    color: ${fontColorDark};
`;

export const old = css`
    color: ${fontColorMain};
    font-size: 40px;
    font-weight: 400;
    text-decoration:line-through;
`;

export const expandedGoodCardSecondaryInfo = css`
    padding-left: 30px;
    font-size: 20px;
`;

export const discountCN = css`
    padding-top: 20px;
    display: flex;
    align-items: center;
`;

export const discountText = css`
    padding: 0 20px;
    color: ${fontColorDark};
    max-width: 230px;
    line-height: 1.4;
`;

export const retailer = css`
    display: flex;
    align-items: center;
    padding-top: 17px;

    .${img} {
        max-width: 70px;
    }
`;

export const retailerImage = css`
    width: 110px;
    border: 2px solid ${primaryColorMain};
    border-radius: 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 0px;
`;

export const retailerText = css`
    padding: 12px 20px;
    color: ${tertiaryColorMain};
    line-height: 1;
`;

export const expandedGoodCardLogo = css`
    position: absolute;
    right: 50px;
    bottom: 25px;
`;

export const expandedGoodCard = css`
    border-radius: 10px;
    border: 1px solid ${fontColorLight};
    box-sizing: border-box;
    position: relative;
    padding: 70px 50px 25px 20px;
    max-width: 990px;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.20);
    margin-top: 50px;

    &.${MobileCN} {
        margin: 40px 15px 0px 15px;
        max-width: 340px;
        padding: 15px 18px 20px 0;
        margin-top: 40px;

        .${expandedGoodCardMainInfo} {
            align-items: flex-end;
        }

        .${productImage} {
            .${img} {
                width: 110px;
            }
        }

        .${expandedGoodCardTextWrapper} {
            padding-left: 0;
        }

        .${title} {
            font-size: 16px;
            padding-top: 12px;
        }

        .${discountUntil} {
            font-size: 16px;
            line-height: 1.4;
        }

        .${pricePerKilo} {
            font-size: 14px;
        }

        .${current} {
            font-size: 19px;
            padding-right: 5px;
        }

        .${old} {
            font-size: 14px;
        }

        .${expandedGoodCardSecondaryInfo} {
            padding-left: 20px;
        }

        .${retailer} {
            .${retailerImage} {
                width: 42px;
                padding: 0;
                border-radius: 5px;
                border-width: 1px;
            }

            .${img} {
                max-width: 35px;
            }

            .${retailerText} {
                padding: 5px 7px 5px 12px;
                font-size: 14px;
            }
        }

        .${discountCN} {
            padding-top: 10px;
        }

        .${discountText} {
            padding: 5px 7px 5px 12px;
            font-size: 14px;
            max-width: 200px;
        }
    }
`;
