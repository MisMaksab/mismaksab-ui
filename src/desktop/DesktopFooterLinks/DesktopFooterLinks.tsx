'use client'

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
          <SocialMediaItemImgSC
            dangerouslySetInnerHTML={{ __html: instIcon }}
          />
        </SocialMediaItemSC>
        <SocialMediaItemSC href={fbLink}>
          <SocialMediaItemImgSC dangerouslySetInnerHTML={{ __html: fbIcon }} />
        </SocialMediaItemSC>
      </SocialMediaSC>

      <UsefulLinksSC>
        {usefulLinksArr.map((el) => (
          <UsefulLinksItemSC key={el.link}>
            <UsefulLinksLinkSC href={el.link}>{el.title}</UsefulLinksLinkSC>
          </UsefulLinksItemSC>
        ))}
      </UsefulLinksSC>
    </FooterLinksSC>
  );
}
