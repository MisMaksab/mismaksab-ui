import { css } from "@linaria/core";
import { DesktopCN, MobileCN, fontColorDark, secondaryColorLight, tertiaryColorMain } from "../../styles";

export const logoSvg = css`
    width: 27px;
    height: 27px;
    cursor: pointer;
`;

export const arrowSvg = css`
    margin-left: 3px;
    width: 14px;
    height: 11px;
`;

export const activeCN = css``
export const sideBarBoxItemBtnText = css``
export const sideBarBoxItemBtn = css`
    cursor: auto;
    display: inline-flex;
    align-items: center;
    flex-grow: 2;
    text-decoration: none;
    padding: 10px 0px;
    color: ${fontColorDark};
    text-transform: capitalize;
    font-size: 23px;
    font-weight: 500;
    line-height: 140%; /* 32.2px */
    transition: color .3s;
    position: relative;
    margin: 0;
    width: 100%;
    
    .${sideBarBoxItemBtnText} {
        padding-left: 12px;
        
        &.${activeCN}, &:hover{
            color: ${tertiaryColorMain};
            text-decoration: underline;
        }
    }
`;

export const sideBarBoxItemDropdown = css`
    overflow: hidden;
    transition: grid-template-rows .5s ease;
    position: relative;
    grid-template-rows: 0fr;
    display: grid;
`;

export const expanded = css`
    grid-template-rows: 1fr;
`;

export const sideBarBoxItemDropdownContainer = css`
    min-height: 0;
`;

export const sideBarBoxItemDropdownItem = css`
    padding:10px 20px 10px 65px;

    &:last-child {
        padding-bottom: 10px;
    }
`;

export const link = css`
    text-transform: capitalize;
    color: ${fontColorDark};
    font-size: 16px;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    text-decoration: none;
    cursor: pointer;
`;

export const mobileSideBarArrowCN = css``;
export const rotate = css``;
export const shown = css``;
export const justifyStart = css``;


export const sideBarBoxItem = css`
    &.${MobileCN} {
        border-bottom: 1px solid ${secondaryColorLight};

        .${sideBarBoxItemBtn} {
            display: flex;
      
            .${sideBarBoxItemBtnText} {
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                width: 100%;
                align-items: center;

                &.${justifyStart} {
                    justify-content: start;
                }
            }
        }

        .${mobileSideBarArrowCN} {
            display: flex;
            height: 7px;
            width: 13px;
            transition: transform .3s;
            margin-left: 10px;
      
            &.${rotate} {
                backgound: red;
                transform: rotate(180deg);
            }
        }

        .${sideBarBoxItemBtn} {
            padding: 8px 2px 8px 0px;
            font-size: 16px;
      
            .${logoSvg} {
                width: 19px;
                height: 19px;
            }

            .${arrowSvg} {
                width: 10px;
                height: 8px;
            }
        }

        .${sideBarBoxItemDropdown} {
            .${sideBarBoxItemDropdownItem} {
                padding: 3px 14px 3px 50px;

                &:last-child {
                    padding-bottom: 15px;
                }
        
                .${link} {
                    font-size: 12px;
                }
            }
        }
    }

    &.${DesktopCN} {
        .${sideBarBoxItemBtnText} {
          cursor: auto;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transform: translateX(-10px);
          transition: .3s;
          overflow: hidden;
          text-overflow: ellipsis;
    
          &.${shown} {
            cursor: pointer;
            opacity: 1;
            pointer-events: all;
            transform: translateX(0);
          }
        }
      }
`;
