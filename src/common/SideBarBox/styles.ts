import { css } from "@linaria/core";
import { MobileCN, mobileSideBarVerticalPadding } from "styles";

export const sideBarBox = css`
    padding-top: 10px;

    .${MobileCN} {
        padding-top: calc(45px - ${mobileSideBarVerticalPadding});
    }
`;
