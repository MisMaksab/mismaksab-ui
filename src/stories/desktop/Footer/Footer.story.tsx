import React from "react";
import { DesktopFooter } from "../../../desktop/DesktopFooter/DesktopFooter";
import { DesktopFooterLinks } from "../../../desktop/DesktopFooterLinks/DesktopFooterLinks";
import { DesktopFooterInfo } from "../../../desktop/DesktopFooterInfo/DesktopFooterInfo";


export const FooterStory = () => (
  <DesktopFooter
    footerLinks={<DesktopFooterLinks
      instLink="/"
      fbLink="/"
      usefulLinksArr={[{title:"О нас", link: '/'}, {title: "Контакты", link: '/'}, {title:"Магазины", link: '/'}, {title: "Политика конфиденциальности", link: '/'}]}
    />}
    footerInfo={<DesktopFooterInfo
      copyright="© MisMaksab, 2023"
      mail={{mail:"info@mismaksab.ee",title:"info@mismaksab.ee"}}
    />}
  />
);

FooterStory.storyName = "Footer";
