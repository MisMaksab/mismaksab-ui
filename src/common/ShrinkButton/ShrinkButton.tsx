import React from "react";
import SideBarHideSvg from "../../assets/icons/sideBarHide.svg";
import { hide, rotateCN, svg } from "./styles";
import cn from "classnames";

interface ShrinkButtonProps {
  onClick: () => void;
  rotate?: boolean;
}

export function ShrinkButton({ onClick, rotate }: ShrinkButtonProps) {
  return (
    <div className={cn(hide, { [rotateCN]: rotate })} onClick={onClick}>
      <img className={svg} src={SideBarHideSvg} />
    </div>
  );
}
