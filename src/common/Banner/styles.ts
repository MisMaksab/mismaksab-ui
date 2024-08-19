import {css} from "@linaria/core";
import { fontColorDark, fontColorLight, MobileCN, primaryColorDark, primaryColorMain, quaternaryColorMain, secondaryColorDark, secondaryColorMain, tertiaryColorMain } from "../../styles";

export const bannerText = css``;
export const textCN = css``;
export const titleCN = css``;
export const linkCN = css``;
export const blue = css``;
export const bannerImg = css``;
export const imgCN = css``;
export const yellow = css``;
export const green = css``;
export const bannerCN = css`
    padding: 20px 20px 20px 45px;
    display: flex;
    justify-content: space-between;
    border-radius: 16px;
    color: ${fontColorDark};
    max-width: 910px;
    box-sizing: border-box;
  
    &.${MobileCN} {
      margin: auto;
      border-radius: 10px;
      padding: 8px 8px 8px 16px;
      .${bannerText} {
        width: calc(50% - 20px);
        .${titleCN} {
          font-size: 20px;
        }
        .${textCN} {
          padding: 0 0 7px 0;
          font-size: 10px;
          line-height: 1;
        }
        .${linkCN} {
          font-size: 14px;
          padding: 4px;
        }
      }
    }
  
    .${bannerText} {
      width: calc(50% - 60px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  
      .${titleCN} {
        font-size: 53px;
        font-weight: 400;
      }
  
      .${textCN} {
        font-size: 18px;
        font-weight: 400;
        line-height: 21px; /* 116.667% */
        padding: 20px 0 35px 0;
      }
  
      .${linkCN} {
        color: ${fontColorLight};
        text-decoration: none;
        border-radius: 30px;
        padding: 12px;
        display: inline-block;
        width: 100%;
        text-align: center;
        box-sizing: border-box;
        font-size: 25px;
        line-height: 1;
      }
    }
  
    .${bannerImg} {
      width: 50%;
      border-radius: inherit;
      overflow: hidden;
      position: relative;
  
      .${imgCN} {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &.${blue} {
        background: ${tertiaryColorMain};
        .${bannerText} .${linkCN} {
          background: ${quaternaryColorMain};
        }
      }
      &.${yellow} {
        background: ${secondaryColorMain};
        .${bannerText} .${linkCN} {
          background: ${secondaryColorDark};
        }
      }
      &.${green} {
        background: ${primaryColorMain};
        .${bannerText} .${linkCN} {
          background: ${primaryColorDark};
        }
      }
`;

export { MobileCN };
