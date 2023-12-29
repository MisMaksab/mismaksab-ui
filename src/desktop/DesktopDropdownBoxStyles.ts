import {css} from "@linaria/core";

export const dropdown = css`
  z-index: 10;
  padding: 0;
  list-style-type: none;
  position: absolute;
  min-width: 195px;
  top: calc(100% + 5px);
  background: white;
  border-radius: 10px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: .3s;
`

export const shown = css`
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto
`