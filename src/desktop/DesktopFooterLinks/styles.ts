import { styled } from "@linaria/react";
import { css } from "@linaria/core";

import { tertiaryColorMain } from "../../styles";

export const FooterLinksSC = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SocialMediaSC = styled.div`
  max-width: 370px;
  width: 100%;
  display: flex;
  gap:20px;
  padding-bottom: 20px;
`;

export const SocialMediaItemSC = styled.a`
  width: 47px;
  height: 47px;
  transition: .3s;
  border-radius: 50%;

  &:hover {
    box-shadow: 0px 0px 10px ${tertiaryColorMain};
  }
`;

export const SocialMediaItemImgSC = styled.div`
  width: 100%;
  height: 100%;
`;

export const UsefulLinksSC = styled.div`
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
`;

export const UsefulLinksItemSC = styled.div`
  width: 50%;
  padding: 12px 0px;
  box-sizing: border-box;
`;

export const UsefulLinksLinkSC = styled.a`
  font-size: 20px;
  line-height: 100%; /* 20px */
  color: $fontColorMain;
  text-decoration: none;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
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
  color: $fontColorMain;
  text-decoration: none;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;
