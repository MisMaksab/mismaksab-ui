import React from "react";
// import logoSvg from "../../assets/icons/mobileLogo.svg";
import { logo, titleCN } from "./styles";

interface MobileHeaderLogoProps {
  title: string;
  href?: string;
}

export function MobileHeaderLogo({ title, href = "/" }: MobileHeaderLogoProps) {
  return (
    <a href={href} className={logo}>
      <img
        alt="logo"
        // src={logoSvg}
      />
      <div>
        <h1 className={titleCN}>{title}</h1>
      </div>
    </a>
  );
}
