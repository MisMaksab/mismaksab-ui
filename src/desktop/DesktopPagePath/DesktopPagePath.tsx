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
  t: (key: string) => string;
  t_prefix?: string;
}

export function DesktopPagePath({ data, t, t_prefix }: DesktopPagePathProps) {
  return <PagePath data={data} t={t} t_prefix={t_prefix} />;
}

interface PagePathProps {
  data: DesktopPagePathItemProps[];
  t: (key: string) => string;
  t_prefix?: string;
}

function PagePath({ data, t, t_prefix = "" }: PagePathProps) {
  return (
    <div className={pagePath}>
      {data.map((item, id) => (
        <div className={pagePathItemWrapper}>
          <a href={item.link && item.link} className={pagePathItem}>
            {t(`${t_prefix}${item.text.toString()}`)}
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
