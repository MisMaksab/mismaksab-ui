import React from "react";
import { Footer } from "../../../mobile/Footer/Footer";
import { FooterLinks } from "../../../mobile/FooterLinks/FooterLinks";
import { FooterInfo } from "../../../mobile/FooterInfo/FooterInfo";


export const FooterStory = () => (
  <Footer
    footerLinks={<FooterLinks
      instLink="/"
      fbLink="/"
      usefulLinksArr={[{title:"О нас", link: '/'}, {title: "Контакты", link: '/'}, {title:"Магазины", link: '/'}, {title: "Политика конфиденциальности", link: '/'}]}
    />}
    footerInfo={<FooterInfo
      copyright="© MisMaksab, 2023"
      mail={{mail:"info@mismaksab.ee",title:"info@mismaksab.ee"}}
    />}
  />
);

FooterStory.storyName = "Footer";
