import cn from "classnames";
import { MobileCN } from "../../styles";
import { LayoutProp } from "../LayoutProp";
import {
  centeredCN,
  serviceBlock,
  serviceBlockContent,
  serviceBlockParagraph,
  serviceBlockTitle,
} from "./styles";

interface ServiceBlockProps extends LayoutProp {
  title?: string;
  paragraphs: string[];
  centered?: boolean;
}

export function ServiceBlock({
  layout,
  title,
  paragraphs,
  centered,
}: ServiceBlockProps) {
  return (
    <div
      className={cn(serviceBlock, {
        [MobileCN]: layout === "mobile",
      })}
    >
      {title && (
        <h2
          className={cn(serviceBlockTitle, {
            [centeredCN]: centered,
          })}
        >
          {title}
        </h2>
      )}
      <div className={cn(serviceBlockContent, { [centeredCN]: centered })}>
        {paragraphs.map((content) => (
          <p key={content} className={serviceBlockParagraph} dangerouslySetInnerHTML={{__html: content}}>
          </p>
        ))}
      </div>
    </div>
  );
}
