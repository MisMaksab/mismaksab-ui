import { css } from "@linaria/core";
import { DesktopCN, MobileCN, fontColorDark, mobileSideBarHorizontalPadding, mobileSideBarVerticalPadding } from "../../styles";

export const active = css``;
export const fixedBlock = css`
    width:100vw;
    position: fixed;
    left: 0;
    right:0;
    top:0;
    z-index: 1;
    background: white;
    padding: ${mobileSideBarVerticalPadding} ${mobileSideBarHorizontalPadding};
    box-sizing: border-box;
    transition: .3s;
    left: -100%;
`;

export const open = css`
    left: 0;
`;

export const searchBar = css`
    width: calc(100% - 40px);
    position: absolute;
    right: 0;
    top: 0;
`;

export const shrinkBtn = css`
    padding-right: 0;
    transition: padding-right .3s;
`;

export const titleCN = css`
    position: absolute;
    left: 0;
    transition: .3s;
    pointer-events: none;
    transform: scale(0);
    opacity: 0;
    text-transform: capitalize;
    color: ${fontColorDark};
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 32px */
    margin: 0;
`;


export const sideBarHeader = css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;

    &.${DesktopCN} {
        justify-content: flex-end;
    
        .${titleCN} {
          left: 0;
          transition: .3s;
          pointer-events: none;
          transform: scale(0) translateY(15px);
          opacity: 0;
    
          &.${active} {
            transform: scale(1) translateY(0px);
            opacity: 1;
            pointer-events: all;
          }
        }
      }

    &.${MobileCN} {
        
        .${titleCN} {
            text-align: center;
            font-size: 24px;
            font-weight: 500;
            order:2;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &.${MobileCN} .${titleCN}, .${searchBar} {
        opacity: 0;
        transition: opacity .3s;
        pointer-events: none;
        
        &.${active} {
          opacity: 1;
          pointer-events: all;
        }
    }
`;
