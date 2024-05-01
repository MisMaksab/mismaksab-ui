import cn from "classnames";
import BubbleArrowSvg from "../../assets/icons/bubble_arrow.svg";
import { MobileCN } from "../../styles";
import { LayoutProp } from "../LayoutProp";
import {
  applyTextMode,
  bubble,
  bubbleArrow,
  bubbleBlue,
  bubbleDesktopSort,
  bubbleDisabled,
  bubbleGreen,
  bubbleLightblue,
  bubbleLightgreen,
  bubbleLightorange,
  bubbleMobile,
  bubbleMobileActive,
  bubbleOrange,
  rotate,
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
