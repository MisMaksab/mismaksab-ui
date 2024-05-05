import { wrapper, innerLoader, loader, expanded } from "../Loader/styles";
import cn from "classnames";

interface LoaderProps {
  isLoaderExpanded: boolean;
}

export function Loader({ isLoaderExpanded }: LoaderProps) {
  return (
    <div className={cn(wrapper, { [expanded]: isLoaderExpanded })}>
      <div className={loader}>
        <div className={innerLoader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
