import { css } from "@linaria/core";

import { maxWidthDesktop, minWidthDesktop, primaryColorLight } from "../../styles";

export const footer = css`
  padding: 48px 67px 24px;
  background: ${primaryColorLight};
  width: 100%
`;

export const footerContent = css`
  min-width: ${minWidthDesktop};
  max-width: ${maxWidthDesktop};
  margin: 0 auto;
  width: 100%;
`;

export const footerLinksCN = css``;

export const footerInfoCN = css`
  padding-top: 24px;
`;
