import cn from "classnames";
import SideBarHideSvg from "../../assets/icons/sideBarHide.svg";
import { hide, rotateCN, svg } from "./styles";

interface ShrinkButtonProps {
  onClick: (val: any) => void;
  rotate?: boolean;
}

export function ShrinkButton({ onClick, rotate }: ShrinkButtonProps) {
  return (
    <div className={cn(hide, { [rotateCN]: rotate })} onClick={onClick}>
      <div
        className={svg}
        dangerouslySetInnerHTML={{ __html: SideBarHideSvg }}
      />
    </div>
  );
}
