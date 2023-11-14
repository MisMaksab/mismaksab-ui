import React from "react";
import cn from "classnames";
import { MobileCN } from "styles";
import { LayoutProp } from "../LayoutProp";
import BubbleArrowSvg from "../../assets/icons/bubble_arrow.svg";
import {
  applyTextMode,
  bubble,
  bubbleArrow,
  bubbleBlue,
  bubbleDisabled,
  bubbleGreen,
  bubbleLightOrange,
  bubbleLightblue,
  bubbleLightgreen,
  bubbleOrange,
  rotate,
  bubbleDesktopSort,
} from "./styles";

interface BubbleProps extends LayoutProp {
  mode:
    | "bubbleBlue"
    | "bubbleGreen"
    | "bubbleLightgreen"
    | "bubbleLightblue"
    | "bubbleOrange"
    | "bubbleLightOrange"
    | "bubbleDisabled"
    | "bubbleDesktopSort";
  text: string;
  link?: string;
  onClick?: () => void;
  isDropdown?: boolean;
  isDropdownExpanded?: boolean;
}

const modeStyle = {
  bubbleBlue,
  bubbleGreen,
  bubbleLightgreen,
  bubbleLightblue,
  bubbleOrange,
  bubbleLightOrange,
  bubbleDisabled,
  bubbleDesktopSort,
};

export function Bubble({
  mode,
  text,
  link,
  layout,
  onClick,
  isDropdown = false,
  isDropdownExpanded = false,
}: BubbleProps) {
  return (
    <a
      onClick={onClick}
      href={link}
      className={cn(bubble, modeStyle[mode], applyTextMode, {
        [MobileCN]: layout === "mobile",
      })}
    >
      {text}

      {isDropdown && (
        <img
          className={cn(bubbleArrow, {
            [rotate]: isDropdownExpanded,
          })}
          src={BubbleArrowSvg}
        />
      )}
    </a>
  );
}
