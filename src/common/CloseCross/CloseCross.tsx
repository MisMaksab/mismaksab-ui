;
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
import { MobilePopupModeEnum } from "../../mobile/MobilePopupModeEnum";

export enum CloseCrossTypeEnum {
  popup = "popup",
  searchCross = "searchCross",
}

interface CloseCrossProps {
  mode: MobilePopupModeEnum;
  onClick: () => void;
  type?: CloseCrossTypeEnum;
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
  onClick,
  type = CloseCrossTypeEnum.popup,
}: CloseCrossProps) {
  return (
    <div
      onClick={onClick}
      className={cn(cross, stylesMap[mode], stylesTypeMap[type])}
    ></div>
  );
}
