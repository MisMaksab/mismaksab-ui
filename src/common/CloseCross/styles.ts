import { css } from "@linaria/core";
import { fontColorDark, primaryColorDark, quaternaryColorMain, secondaryColorDark } from "../../styles";

export const cross = css`
    cursor: pointer;
    width: 15px;
    height: 15px;
    position: relative;
    transform:rotate(45deg);
    -ms-transform:rotate(45deg); /* IE 9 */
    -webkit-transform:rotate(45deg); /* Safari and Chrome */
`;

export const crossBar = css`
    position: absolute;
    z-index: -1;
    border-radius: 5px;
`;

export const one = css`
    left: 50%;
    width: 20%;
    margin-left: -10%;
    height: 100%;
`;

export const two = css`
    top: 50%;
    height: 20%;
    margin-top: -10%;
    width: 100%;
`;

export const color = css``;
export const border = css``;
export const bg = css``;

export const popupGreen = css`
    &.${color} {color: ${primaryColorDark};}
    &.${border} {border-color: ${primaryColorDark};}
    &.${bg} {background: ${primaryColorDark};}
`;

export const popupYellow = css`
    &.${color} {color: ${secondaryColorDark};}
    &.${border} {border-color: ${secondaryColorDark};}
    &.${bg} {background: ${secondaryColorDark};}
`;

export const popupBlue = css`
    &.${color} {color: ${quaternaryColorMain};}
    &.${border} {border-color: ${quaternaryColorMain};}
    &.${bg} {background: ${quaternaryColorMain};}
`;

export const popupDefault = css`
    &.${color} {color: ${fontColorDark};}
    &.${border} {border-color: ${fontColorDark};}
    &.${bg} {background: ${fontColorDark};}
`;