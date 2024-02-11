'use client'

import React from "react";
import cn from "classnames";
import { MobileCN } from "../../styles";
import arrow from "../../assets/icons/arrow.svg";
import { LayoutProp } from "../LayoutProp";
import { active, rotate, svg, title, yellowButton } from "./styles";

interface YellowButtonProps extends LayoutProp {
  text: string | undefined;
  onClick?: () => void;
  isActive?: boolean;
  isArrowRotated?: boolean;
  link?: string;
}

export function YellowButton({
  layout,
  text,
  onClick,
  isActive = false,
  isArrowRotated = false,
  link,
}: YellowButtonProps) {
  return (
    <a
      href={link}
      className={cn(yellowButton, {
        [MobileCN]: layout === "mobile",
      })}
      onClick={onClick}
    >
      <span className={title}>{text}</span>
      <div
        className={cn(svg, {
          [active]: isActive,
          [rotate]: isArrowRotated,
        })}
        dangerouslySetInnerHTML={{ __html: arrow }}
      />
    </a>
  );
}
