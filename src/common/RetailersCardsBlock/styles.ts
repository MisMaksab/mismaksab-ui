import {css} from "@linaria/core";
import { MobileCN } from '../../styles';

export const retailersCardsBlock = css`
    margin-left: -7px;
    display: flex;
    flex-wrap: wrap;
    padding-top: 38px;

    &.${MobileCN} {
        justify-content: center;
        padding-top: 20px;
        margin-left: 0;
    }
`;
