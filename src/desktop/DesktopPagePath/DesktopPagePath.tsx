;
import {
  pagePath,
  pagePathItem,
  pagePathItemSVG,
  pagePathItemWrapper,
} from "./styles";
import PagePathSVG from "../../assets/icons/desktopPagePath.svg";

export interface DesktopPagePathItemProps {
  link: string | undefined;
  text: string;
}

interface DesktopPagePathProps {
  data: DesktopPagePathItemProps[];
}

export function DesktopPagePath({ data }: DesktopPagePathProps) {
  return <PagePath data={data} />;
}

interface PagePathProps {
  data: DesktopPagePathItemProps[];
}

function PagePath({ data }: PagePathProps) {
  return (
    <div className={pagePath}>
      {data.map((item, id) => (
        <div className={pagePathItemWrapper}>
          <a href={item.link && item.link} className={pagePathItem}>
            {item.text}
          </a>
          {id < data.length - 1 && (
            <div
              className={pagePathItemSVG}
              dangerouslySetInnerHTML={{ __html: PagePathSVG }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
