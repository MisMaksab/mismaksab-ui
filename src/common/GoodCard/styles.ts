import {css} from "@linaria/core";
import { MobileCN, fontColorDark, fontColorLight, fontColorMain, tertiaryColorMain } from "../../styles";

export const goodCardInfo = css``;

export const goodCardImage = css`
    position: relative;
    text-align: center;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    box-sizing: border-box;
`;

export const retailerImg = css`
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
`;

export const goodCardTextWrapper = css`
    padding: 3px 10px 10px 10px;
    display: flex;
    flex-grow: 2;
    flex-direction: column;
`;

export const title = css`
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: ${fontColorDark};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: ${tertiaryColorMain};
    }
`;

export const pricePerKilo = css`
    padding: 2px 0;
    font-size: 14px;
    flex-grow: 2;
    margin: 0;
    color: ${fontColorMain};
    font-weight: 400;
`;

export const discountUntil = css`
    margin: 0;
    color: ${fontColorMain};
    font-weight: 400;
    font-size: 16px;
    text-align: center;
`;


export const goodCardPrices = css`
    display: flex;
    align-items: center;
`;

export const old = css`
    color: ${fontColorMain};
    font-size: 16px;
    font-weight: 400;
    text-decoration:line-through;
`;

export const current = css`
    font-size: 20px;
    font-weight: 700;
    padding-right: 10px;
    color: ${fontColorDark};
`;

export const goodCardAdd = css`
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    background: $secondaryColorMain;
    width: 35px;
    height: 35px;
    border-bottom-left-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
`;

export const added = css`
    background: ${tertiaryColorMain};
`;

export const disabled = css`
    pointer-events: none;

    .${goodCardTextWrapper} .${current}, .${goodCardPrices} .${old}, .${title}, .${pricePerKilo}, .${discountUntil} {
        color:${fontColorLight};
    }

    .${goodCardAdd} {
        background: ${fontColorLight};
    }
`;


export const smallMobile = css`
`

export const goodCard = css`
    position: relative;
    border-radius: 10px;
    margin: 0 7px;
    border: 1px solid ${fontColorLight};
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: .3s;
    min-height: 340px;
    width: 170px;

    &:hover {
        box-shadow: 0px 0px 7px 0px rgba(90, 194, 233, 0.80);
    }

    &.${MobileCN} {
        width: 115px;
        min-height: 230px;

        &.${smallMobile} {
            width:103px;
            min-height: 200px;

            .${goodCardImage} {
                height: 90px;
            }

            .${goodCardTextWrapper} {
                .${title} {
                    font-size: 12px;
                }
                
                .${goodCardPrices} {
                    .${old} {
                        font-size: 12px;
                    }
    
                    .${current} {
                        font-size: 14px;
                    }
                }

                .${discountUntil} {
                    font-size: 10px;
                }
            }
        }

        .${goodCardImage} {
            height: 100px;
            padding: 2px;
        }

        .${goodCardTextWrapper} {
            padding: 6px;

            .${title} {
                font-size: 14px;
                flex-grow: 2;
            }
            
            .${goodCardPrices} {
                .${old} {
                    font-size: 14px;
                }

                .${current} {
                    font-size: 16px;
                    padding-right: 4px;
                }
            }

            .${discountUntil} {
                font-size: 12px;
            }
        }
    }
`;