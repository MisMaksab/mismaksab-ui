import { css } from "@linaria/core";

export const hide = css`
    display: flex;
    align-items: flex-end;
    height: 100%;
    transition: transform .3s;
`;

export const svg = css`
    width: 27px;
    height: 27px;
    cursor: pointer;
`;

export const rotateCN = css`
    transform: rotate(180deg);
`