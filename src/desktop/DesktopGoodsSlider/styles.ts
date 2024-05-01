import {css} from "@linaria/core";
import { retailersSliderWidth } from "../../styles";

export const goodsSlider = css`
    width: ${retailersSliderWidth};

    @media screen and (max-width: 1200px) {
        & {
            width: 736px;
        }
    }
    
    @media screen and (max-width: 950px) {
        & {
            width: 552px;
        }
    }
    
    @media screen and (max-width: 768px) {
        & {
            width: 368px;
        }
    }
`;