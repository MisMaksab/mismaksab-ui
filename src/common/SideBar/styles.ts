import { css } from "@linaria/core";
import { MobileCN, mobileSideBarHorizontalPadding, mobileSideBarVerticalPadding } from "../../styles";

export const open = css``;

export const sideBar = css`
    z-index: 100;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    transition: .3s;
    padding: 18px 14px 34px 38px;
    
    &.${MobileCN} {
        background: white;
        position: absolute;
        left: -100%;
        width: 100vw;
        top: 0;
        right: 0;
        max-width: 100%;
        padding: ${mobileSideBarVerticalPadding} ${mobileSideBarHorizontalPadding};

        &.${open} {
            left: 0;
            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
        }
    }
`;
