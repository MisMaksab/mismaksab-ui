import { css } from "@linaria/core";
import { MobileCN, fontColorDark, tertiaryColorMain } from "../../styles";

export const description = css`
  margin: 0;
  color: ${fontColorDark};
  font-size: 50px;
  font-weight: 400;
  line-height: 100%; /* 50px */
  padding-bottom: 24px;
`

export const name = css`
  color: ${fontColorDark};
  font-size: 70px;
  font-weight: 400;
  line-height: 100%; /* 70px */
  padding-bottom: 69px;
    margin: 0;
`

export const link = css`
  margin: 0;
  padding: 12px 20px;
  color: ${tertiaryColorMain};
  font-size: 20px;
  font-weight: 400;
  line-height: 100%; /* 20px */
  text-decoration-line: underline;
  padding-bottom: 80px;
`

export const svg = css`
  width: 300px;
`

export const errorCN = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.${MobileCN} {
    padding: 70px 15px 40px;
    .${description} {
      font-size: 24px;
      font-weight: 600;
      padding-bottom: 17px;
    }

    .${name} {
      font-size: 24px;
      font-weight: 400;
      padding-bottom: 100px;
    }

    .${link} {display: none}

    .${svg} {
      width: 180px;
    }
  }
`