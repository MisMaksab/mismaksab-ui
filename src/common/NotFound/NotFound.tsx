;
import { description, errorCN, link, name, svg } from "./styles";
import NotFoundIcon from "../../assets/icons/404.svg";
import { LayoutProp } from "../../common/LayoutProp";
import cn from "classnames";
import { MobileCN } from "../../styles";

interface NotFoundProps extends LayoutProp {
  error: string;
  errorDescription: string;
  goBackText?: string;
  goBackLink?: string;
}

export function NotFound({
  error,
  errorDescription,
  goBackText = "Go back",
  goBackLink = "/",
  layout,
}: NotFoundProps) {
  return (
    <div
      className={cn(errorCN, {
        [MobileCN]: layout === "mobile",
      })}
    >
      <h2 className={description}>{errorDescription}</h2>
      <h1 className={name}>{error}</h1>
      <a className={link} href={goBackLink}>
        {goBackText}
      </a>
      <div className={svg} dangerouslySetInnerHTML={{ __html: NotFoundIcon }} />
    </div>
  );
}
