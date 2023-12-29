import { css } from "@linaria/core";
import { fontColorDark, fontColorMain, primaryColorDark, quaternaryColorMain, secondaryColorDark } from "../../styles";

export const popup = css``
export const searchCross = css``
export const cross = css`
    cursor: pointer;
    position: relative;

    :before, :after {
        position: absolute;
        content: ' ';
        width: 2px;
    }

    :before {
        transform: rotate(45deg);
    }
    :after {
        transform: rotate(-45deg);
    }

    &.${popup} {
        left: 50%;
        width: 13px;
        height: 13px;

        :before, :after {
            height: 13px;
        }
    }

    &.${searchCross} {
        left: 50%;
        width: 13px;
        height: 13px;

        :before, :after {
            height: 13px;
        }
    }
`;


export const searchDefault = css`
    :before, :after {
        background-color: ${fontColorMain};
    }
`;

export const popupGreen = css`
    :before, :after {
        background-color: ${primaryColorDark};
    }
`;

export const popupYellow = css`
    :before, :after {
        background-color:  ${secondaryColorDark};
    }
`;

export const popupBlue = css`
    :before, :after {
        background-color: ${quaternaryColorMain};
    }
    color: ;}
`;

export const popupDefault = css`
    :before, :after {
        background-color: ${fontColorDark};
    }
`;