import instIcon from "../../assets/icons/footerInst.svg";
import fbIcon from "../../assets/icons/footerFb.svg";
import {
  footerLinks,
  socialMedia,
  socialMediaItem,
  socialMediaItemImg,
  usefulLinks,
  usefulLinksItem,
  usefulLinksLink,
} from "./styles";

export interface DesktopFooterLinkProps {
  title: string;
  link: string;
}

interface DesktopFooterLinksProps {
  instLink: string;
  fbLink: string;
  usefulLinksArr: DesktopFooterLinkProps[];
}

export function DesktopFooterLinks({
  instLink,
  fbLink,
  usefulLinksArr,
}: DesktopFooterLinksProps) {
  return (
    <div className={footerLinks}>
      <div className={socialMedia}>
        <a className={socialMediaItem} href={instLink}>
          <div
            className={socialMediaItemImg}
            dangerouslySetInnerHTML={{ __html: instIcon }}
          />
        </a>
        <a className={socialMediaItem} href={fbLink}>
          <div
            className={socialMediaItemImg}
            dangerouslySetInnerHTML={{ __html: fbIcon }}
          />
        </a>
      </div>

      <div className={usefulLinks}>
        {usefulLinksArr.map((el) => (
          <div className={usefulLinksItem} key={el.link}>
            <a className={usefulLinksLink} href={el.link}>
              {el.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
