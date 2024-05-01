;
import cn from "classnames";

import { button, yellow } from "./styles";

interface Props {
  mode: "button" | "yellow"; // TODO change modes
  children: React.ReactNode;
}

const stylesMap = {
  yellow,
  button,
};

export function Button({ mode, children }: Props) {
  return <button className={cn(stylesMap[mode])}>{children}</button>;
}
