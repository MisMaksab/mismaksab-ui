import {css} from "@linaria/core";
import { fontColorLight } from "../../styles";

export const sideBarWrapper = css`
  border-radius: 0px 10px 10px 0px;
  border: 1px solid ${fontColorLight};
  width: 116px;
  transition: .3s;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 192px;
`

export const open = css`
  width: 100%;
  border-color: transparent;
`
