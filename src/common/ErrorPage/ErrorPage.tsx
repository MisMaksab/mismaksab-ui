import cn from "classnames";
import NotFoundIcon from "../../assets/icons/404.svg";
import { LayoutProp } from "../LayoutProp";
import { MobileCN } from "../../styles";
import {
  description,
  errorCN,
  link,
  name,
  optionalDescription,
  optionalDescriptionText,
  svg,
} from "./styles";

interface NotFoundProps extends LayoutProp {
  error: string;
  errorDescription: string;
  goBackText: string;
  goBackLink: string;
  optionalErrorDescription?: string;
}

export function ErrorPage({
  error,
  errorDescription,
  goBackText,
  goBackLink,
  layout,
  optionalErrorDescription,
}: NotFoundProps) {
  return (
    <div
      className={cn(errorCN, {
        [MobileCN]: layout === "mobile",
      })}
    >
      <h2 className={description}>{errorDescription}</h2>
      <h1 className={name}>{error}</h1>
      {optionalErrorDescription && (
        <div className={optionalDescription}>
          <span className={optionalDescriptionText}>
            {optionalErrorDescription}
          </span>
        </div>
      )}
      <a className={link} href={goBackLink}>
        {goBackText}
      </a>
      <div className={svg} dangerouslySetInnerHTML={{ __html: NotFoundIcon }} />
    </div>
  );
}
