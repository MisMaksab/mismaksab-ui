import { css } from "@linaria/core";
import { MobileCN, primaryColorMain } from "../../styles";

export const discountPercentage = css`
    font-weight: 700;
    background: ${primaryColorMain};
    color:white;
    text-align: center;
`;

export const discountImage = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const img = css`
    max-width: 90%;
`;

export const expandedCN = css`
    width: 110px;
    border-radius: 15px;

    &.${MobileCN} {
        width: 42px;
        border-radius: 5px;

        .${img} {
            max-width: 24px;
        }
    }

    .${discountPercentage} {
        font-size: 29px;
    }

    .${discountImage} {
        padding: 10px 0 15px;
    }

    .${img} {
        max-width: 65px;
    }
`;

export const discountCN = css`
    border-radius: 7px;
    border: 1px solid ${primaryColorMain};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    width: 45px;

    .${discountPercentage} {
        font-size: 14px;
    }

    &.${MobileCN} {
        width: 30px;
        margin: 0 6px;

        .${discountPercentage} {
            font-size: 10px;
            padding: 0;
        }
    }
`;

export const small = css`
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0 10px;
`;
