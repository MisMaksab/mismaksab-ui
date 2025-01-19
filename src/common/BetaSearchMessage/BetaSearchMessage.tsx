import { LayoutProp } from "../LayoutProp";
import { message } from "./styles";
import cn from "classnames";
import { MobileCN } from "../../styles";

interface BetaSearchMessageProps extends LayoutProp {
  text: string;
}

export function BetaSearchMessage({ layout, text }: BetaSearchMessageProps) {
  return (
    <div className={cn(message, { [MobileCN]: layout === "mobile" })}>
      <span>{text}</span>
    </div>
  );
}
