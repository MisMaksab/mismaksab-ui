import cn from "classnames";
import {
  cross,
  popup,
  popupBlue,
  popupDefault,
  popupGreen,
  popupYellow,
  searchCross,
  searchDefault,
} from "./styles";
import { MobilePopupModeType } from "../../mobile/MobilePopupModeType";

export type CloseCrossType = "popup" | "searchCross";

interface CloseCrossProps {
  mode: MobilePopupModeType;
  onClick?: () => void;
  type?: CloseCrossType;
}

const stylesMap = {
  popupGreen,
  popupYellow,
  popupBlue,
  popupDefault,
  searchDefault,
};

const stylesTypeMap = {
  popup,
  searchCross,
};

export function CloseCross({
  mode,
  onClick = () => {},
  type = "popup",
}: CloseCrossProps) {
  return (
    <div
      onClick={onClick}
      className={cn(cross, stylesMap[mode], stylesTypeMap[type])}
    ></div>
  );
}
