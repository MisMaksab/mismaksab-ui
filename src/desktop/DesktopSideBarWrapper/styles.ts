import {css} from "@linaria/core";
import { fontColorLight } from "../../styles";

export const sideBarWrapper = css`
  border-radius: 0px 10px 10px 0px;
  border: 1px solid ${fontColorLight};
  width: 116px;
  transition: .3s;
  overflow: hidden;
  background: rgba(255,255,255,.8);
  backdrop-filter: blur(8px);
`

export const open = css`
  width: 356px;
  border-color: transparent;
  box-shadow: 0px 0px 3px ${fontColorLight};
`
