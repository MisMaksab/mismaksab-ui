import React from "react";
import cn from "classnames";
import { MobileCN } from "../../styles";
import { LayoutProp } from "../LayoutProp";
// import BubbleArrowSvg from "../../assets/icons/bubble_arrow.svg";
import {
  applyTextMode,
  bubble,
  bubbleArrow,
  bubbleBlue,
  bubbleDisabled,
  bubbleGreen,
  bubbleLightorange,
  bubbleLightblue,
  bubbleLightgreen,
  bubbleOrange,
  rotate,
  bubbleDesktopSort,
  bubbleMobile,
  bubbleMobileActive,
} from "./styles";

interface BubbleProps extends LayoutProp {
  mode:
    | "bubbleBlue"
    | "bubbleGreen"
    | "bubbleLightgreen"
    | "bubbleLightblue"
    | "bubbleOrange"
    | "bubbleLightorange"
    | "bubbleDisabled"
    | "bubbleMobile"
    | "bubbleMobileActive"
    | "bubbleDesktopSort";
  text: string;
  onClick: (val: any) => void;
  isDropdown?: boolean;
  isDropdownExpanded?: boolean;
}

const modeStyle = {
  bubbleBlue,
  bubbleGreen,
  bubbleLightgreen,
  bubbleLightblue,
  bubbleOrange,
  bubbleLightorange,
  bubbleDisabled,
  bubbleDesktopSort,
  bubbleMobile,
  bubbleMobileActive,
};
export function Bubble({
  mode,
  text,
  layout,
  onClick,
  isDropdown = false,
  isDropdownExpanded = false,
}: BubbleProps) {
  return (
    <span
      onClick={() => onClick(text)}
      className={cn(bubble, modeStyle[mode], applyTextMode, {
        [MobileCN]: layout === "mobile",
      })}
    >
      {text}

      {isDropdown && (
        <span
          className={cn(bubbleArrow, {
            [rotate]: isDropdownExpanded,
          })}
          // src={BubbleArrowSvg}
        >
          ?
        </span>
      )}
    </span>
  );
}
