import cn from "classnames";
import React from "react";
import arrowSvg from "./../../assets/icons/slider_arrow.svg";
import { arrowButton, shown, arrowButtonArrow, next, prev } from "./styles";

interface DesktopArrowButtonProps {
  type: "next" | "prev";
  isShown: boolean;
  onClick: () => void;
}

export function DesktopArrowButton({
  type,
  isShown,
  onClick,
}: DesktopArrowButtonProps) {
  return (
    <div
      className={cn(arrowButton, {
        [shown]: isShown,
        [prev]: type === "prev",
        [next]: type === "next",
      })}
      onClick={onClick}
    >
      <div
        className={arrowButtonArrow}
        dangerouslySetInnerHTML={{ __html: arrowSvg }}
      />
    </div>
  );
}
