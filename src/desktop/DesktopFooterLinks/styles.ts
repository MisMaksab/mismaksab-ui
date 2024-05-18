import { css } from "@linaria/core";

import { fontColorMain, tertiaryColorMain } from "../../styles";

export const footerLinks = css`
  display: flex;
  flex-wrap: wrap;
`;

export const socialMedia = css`
  max-width: 370px;
  width: 100%;
  display: flex;
  gap:20px;
  padding-bottom: 20px;
`;

export const socialMediaItem = css`
  width: 47px;
  height: 47px;
  transition: .3s;
  border-radius: 50%;

  &:hover {
    box-shadow: 0px 0px 10px ${tertiaryColorMain};
  }
`;

export const socialMediaItemImg = css`
  width: 100%;
  height: 100%;
`;

export const usefulLinks = css`
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
`;

export const usefulLinksItem = css`
  width: 50%;
  padding: 12px 0px;
  box-sizing: border-box;
`;

export const usefulLinksLink = css`
  font-size: 20px;
  line-height: 100%; /* 20px */
  color: ${fontColorMain};
  text-decoration: none;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;
