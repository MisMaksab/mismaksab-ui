import React from "react";
import instIcon from '../../assets/icons/footerInst.svg';
import fbIcon from '../../assets/icons/footerFb.svg';
import { FooterLinksSC, SocialMediaItemImgSC, SocialMediaItemSC, SocialMediaSC, usefulLinks, usefulLinksItem, usefulLinksLink } from './styles';

interface DesktopFooterLinksProps {
  instLink: string;
  fbLink: string;
  usefulLinksArr: Array<{ title: string; link: string }>;
}

export function DesktopFooterLinks({
  instLink,
  fbLink,
  usefulLinksArr,
}: DesktopFooterLinksProps) {
  return (
    <FooterLinksSC>
      <SocialMediaSC>
        <SocialMediaItemSC href={instLink}>
          <SocialMediaItemImgSC src={instIcon}/>
        </SocialMediaItemSC>
        <SocialMediaItemSC href={fbLink}>
          <SocialMediaItemImgSC src={fbIcon}/>
        </SocialMediaItemSC>
      </SocialMediaSC>

      <div className={usefulLinks}>
        {usefulLinksArr.map((el) => (
          <div key={el.title} className={usefulLinksItem}>
            <a className={usefulLinksLink} href={el.link}>
              {el.title}
            </a>
          </div>
        ))}
      </div>
    </FooterLinksSC>
  )
}
