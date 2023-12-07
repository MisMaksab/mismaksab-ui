import {css} from "@linaria/core";
import { retailersSliderWidth } from "../../styles";

export const retailersSlider = css`
    width: ${retailersSliderWidth};

    @media screen and (max-width: 1200px) {
        & {
            width: 690px;
        }
    }
    
    @media screen and (max-width: 950px) {
        & {
            width: 460px;
        }
    }
    
    @media screen and (max-width: 768px) {
        & {
            width: 230px;
        }
    }
`;
