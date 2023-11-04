import { styled } from "@linaria/react";

import { MobileCN } from "../../styles";

export const FooterSC = styled.footer`
  padding: 48px 67px 24px;
  background: red;
`;

export const FooterContent = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const FooterLinks = styled.div``;

export const FooterInfo = styled.div`
  padding-top: 24px;
`;


export const BannerCN = styled.div`
    padding: 20px 20px 20px 45px;
    display: flex;
    justify-content: space-between;
    border-radius: 16px;
    color: $fontColorDark;
    max-width: 910px;
    box-sizing: border-box;

    .${MobileCN} & {
        border-radius: 10px;
        max-width: 340px;
        padding: 8px 8px 8px 16px;
        .bannerText {
        width: calc(50% - 20px);
        .title {
            font-size: 20px;
        }
        .text {
            padding: 0 0 7px 0;
            font-size: 10px;
            line-height: 1;
        }
        .link {
            font-size: 14px;
            padding: 4px;
        }
    }

    &.blue {
        background: $tertiaryColorMain;
        .bannerText .link {
            background: $quaternaryColorMain;
        }
    }
    &.yellow {
        background: $secondaryColorMain;
        .bannerText .link {
            background: $secondaryColorDark;
        }
    }
    &.green {
        background: $primaryColorMain;
        .bannerText .link {
            background: $primaryColorDark;
        }
    }
`

//   .bannerText {
//     width: calc(50 % - 60px);
//     display: flex;
//     flex - direction: column;
//     justify - content: space - between;

//     .title {
//         font - size: 53px;
//         font - weight: 400;
//     }

//     .text {
//         font - size: 18px;
//         font - weight: 400;
//         line - height: 21px; /* 116.667% */
//         padding: 20px 0 35px 0;
//     }

//     .link {
//         color: $fontColorLight;
//         text - decoration: none;
//         border - radius: 30px;
//         padding: 12px;
//         display: inline - block;
//         width: 100 %;
//         text - align: center;
//         box - sizing: border - box;
//         font - size: 25px;
//         line - height: 1;
//     }
// }

//   .bannerImg {
//     width: 50 %;
//     border - radius: inherit;
//     overflow: hidden;
//     position: relative;

//     .img {
//         position: absolute;
//         width: 100 %;
//         height: 100 %;
//         object - fit: cover;
//     }
// }
// }