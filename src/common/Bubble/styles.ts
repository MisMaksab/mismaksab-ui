import { MobileCN, fontColorDark, fontColorLight, primaryColorLight, primaryColorMain, secondaryColorDark, secondaryColorLight, tertiaryColorLight, tertiaryColorMain } from "../../styles";
import { css } from "@linaria/core";

export const bubble = css`
  padding: 12px 16px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  line-height: 100%; /* 20px */
  display: flex;
  align-items: center;
  white-space:nowrap;

  &.${MobileCN} {
    padding: 6px 13px;
    font-size: 20px;
    border-radius: 20px;
    font-weight: 400;
  }
`;

export const bubbleArrow = css`
  width: 9px;
  display: flex;
  margin-left: 6px;
  transition: transform .3s;
  transform-origin: center center;
`;

export const rotate = css`
  transform: rotate(180deg);
  color:red;
`;

export const bubbleDesktopSort = css`
  background: white;
  border: 1px solid ${secondaryColorDark};
  color: ${secondaryColorDark};
`

export const applyTextMode = css``;

export const bubbleBlue = css` {
  background: ${tertiaryColorMain};
    &.${applyTextMode} {color: ${fontColorDark};}
  }
`;
export const bubbleBlack = css` {
  background: ${fontColorDark};
    &.${applyTextMode} {color:${fontColorLight};}
  }
`;
export const bubbleGreen = css` {
  background: ${primaryColorMain};
    &.${applyTextMode} {color: white;}
  }
`;
export const bubbleLightgreen = css` {
  background: ${primaryColorLight};
    &.${applyTextMode} {color: ${fontColorDark}; }
  }
`;
export const bubbleLightblue = css` {
  background: ${tertiaryColorLight};
    &.${applyTextMode} {color: ${fontColorDark};}
  }
`;
export const bubbleOrange = css` {
  background: ${secondaryColorDark};
    &.${applyTextMode} {color: ${fontColorDark};}
  }
`;
export const bubbleLightorange = css` {
  background: ${secondaryColorLight};
    &.${applyTextMode} {color: ${fontColorDark};}
  }
`;
export const bubbleDisabled = css` {
  pointer-events: none;
  background: ${fontColorLight};
  user-select: none;

    &.${applyTextMode} {color: white};

    .${bubbleArrow} {
      filter: invert(1);
    }
  }
`;

export const bubbleMobile = css` {
  border-color: transparent;
    color: ${fontColorDark};
  }
`;
  export const bubbleMobileActive = css` {
  border: 1px solid ${primaryColorMain};
    color: ${fontColorDark};
}`;