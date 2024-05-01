import {css} from "@linaria/core";
import { secondaryColorLight } from "../../styles";

export const searchSvgCN = css`
    width: 20px;
    height: 50%;
    box-sizing: content-box;
`;

export const searchSvgContainer = css`
    background: ${secondaryColorLight};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    padding: 0 17px;
    border-radius: 50%;
`;

export const header = css`
    padding: 0;
    width: 29px;
    height: 29px;
`;
