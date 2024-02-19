import { css } from "@linaria/core";
import { MobileCN, mobileSideBarVerticalPadding } from "../../styles";

export const smoothOverflow = css`
    position: relative;

    &:after {
        content: '';
        display: block;
        position: absolute;
        right: -14px;
        top: 0;
        bottom: 0;
        width: 30px;
        background: linear-gradient(90deg,transparent 0%, rgba(255,255,255,.8) 60% ,white 100%);
        pointer-events:none;
    }
`;

export const sideBarBox = css`
    padding-top: 10px;

    &.${MobileCN} {
        padding-top: calc(45px - ${mobileSideBarVerticalPadding});
    }
`;
