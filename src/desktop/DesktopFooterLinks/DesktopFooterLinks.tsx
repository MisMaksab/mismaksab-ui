import React from "react";
import instIcon from "../../assets/icons/footerInst.svg";
import fbIcon from "../../assets/icons/footerFb.svg";
import {
  FooterLinksSC,
  SocialMediaItemImgSC,
  SocialMediaItemSC,
  SocialMediaSC,
  UsefulLinksItemSC,
  UsefulLinksLinkSC,
  UsefulLinksSC,
} from "./styles";

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
          <SocialMediaItemImgSC src={instIcon} />
        </SocialMediaItemSC>
        <SocialMediaItemSC href={fbLink}>
          <SocialMediaItemImgSC src={fbIcon} />
        </SocialMediaItemSC>
      </SocialMediaSC>

      <UsefulLinksSC>
        {usefulLinksArr.map((el) => (
          <UsefulLinksItemSC>
            <UsefulLinksLinkSC href={el.link}>{el.title}</UsefulLinksLinkSC>
          </UsefulLinksItemSC>
        ))}
      </UsefulLinksSC>
    </FooterLinksSC>
  );
}
