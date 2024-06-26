import { css } from "@linaria/core";

export const button = css`
    border-radius: 10px;
    padding: 12px 20px;
    border: none;
    outline:none;
    transition: .3s;
    cursor: pointer;
    font-size: 20px;
    display: inline-block;
    height: 44px;

    &:hover {
        box-shadow: 0px 0px 4px 5px rgba(0,0,0,.04);
    }
`;

export const yellow = css`
    background: #EAD700;
    color: #373F41;
`;
