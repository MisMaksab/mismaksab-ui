import { css } from "@linaria/core";
import { fontColorDark } from "../../styles";

export const logo = css`
    display: flex;
    align-items: center;
    color: ${fontColorDark};
    padding-left: 15px;
    text-decoration: none;
`;

export const img = css`
    height: 52px;
    width: 53px;
    margin-right: 0.7rem;
`;

export const title = css`
    margin: 0;
    text-align: center;
    font-size: 48px;
    font-weight: 500;
    line-height: 1;
`;

export const subTitle = css`
    margin: 0;
    text-shadow: 21px 10.5px 21px 0px rgba(255, 255, 255, 0.40);
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
`;
