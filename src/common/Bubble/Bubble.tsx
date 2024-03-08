import React from "react";
import cn from "classnames";
import { MobileCN } from "../../styles";
import { LayoutProp } from "../LayoutProp";
import BubbleArrowSvg from "../../assets/icons/bubble_arrow.svg";
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

export enum BubbleModeEnum {
  bubbleBlue = "bubbleBlue",
  bubbleGreen = "bubbleGreen",
  bubbleLightgreen = "bubbleLightgreen",
  bubbleLightblue = "bubbleLightblue",
  bubbleOrange = "bubbleOrange",
  bubbleLightorange = "bubbleLightorange",
  bubbleDisabled = "bubbleDisabled",
  bubbleMobile = "bubbleMobile",
  bubbleMobileActive = "bubbleMobileActive",
  bubbleDesktopSort = "bubbleDesktopSort",
}

export interface BubbleProps extends LayoutProp {
  mode: BubbleModeEnum;
  text: string;
  onClick: () => void;
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
      onClick={onClick}
      className={cn(bubble, modeStyle[mode], applyTextMode, {
        [MobileCN]: layout === "mobile",
      })}
    >
      {text}

      {isDropdown && (
        <div
          className={cn(bubbleArrow, {
            [rotate]: isDropdownExpanded,
          })}
          dangerouslySetInnerHTML={{ __html: BubbleArrowSvg }}
        />
      )}
    </span>
  );
}
