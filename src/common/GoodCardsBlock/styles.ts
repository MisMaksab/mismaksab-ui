import {css} from "@linaria/core";
import { MobileCN } from "../../styles";

export const goodCardsBlock = css`
    margin-left: -7px;
    margin-right: -7px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px 0px;
    padding-top: 38px;

    &.${MobileCN} {
        padding-top: 13px;
        margin-left:0;
        margin-right:0;
        justify-content: center;
    }
`;
