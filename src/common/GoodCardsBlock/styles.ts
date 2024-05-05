import {css} from "@linaria/core";
import { MobileCN } from "../../styles";

export const goodCardsBlock = css`
    margin-left: -7px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px 0px;
    padding-top: 50px;

    &.${MobileCN} {
        padding-top: 13px;
        margin-left:0;
        justify-content: center;
    }
`;
