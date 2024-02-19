import React from "react";
import cn from "classnames";
import {
  popupGreen,
  popupYellow,
  popupBlue,
  popupDefault,
  cross,
  searchCross,
  popup,
  searchDefault,
} from "./styles";

interface CloseCrossProps {
  mode:
    | "popupGreen"
    | "popupYellow"
    | "popupBlue"
    | "popupDefault"
    | "searchDefault";
  onClick: () => void;
  type?: "popup" | "searchCross";
}

const stylesMap = {
  popupGreen,
  popupYellow,
  popupBlue,
  popupDefault,
  searchCross,
  searchDefault,
};

const stylesTypeMap = {
  popup,
  searchCross,
};

export function CloseCross({ mode, onClick, type = "popup" }: CloseCrossProps) {
  return (
    <div
      onClick={onClick}
      className={cn(cross, stylesMap[mode], stylesTypeMap[type])}
    ></div>
  );
}
