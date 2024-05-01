;
import logoSvg from "../../assets/icons/mobileLogo.svg";
import { logo, titleCN, svg } from "./styles";

interface MobileHeaderLogoProps {
  title: string;
  href?: string;
}

export function MobileHeaderLogo({ title, href = "/" }: MobileHeaderLogoProps) {
  return (
    <a href={href} className={logo}>
      <div className={svg} dangerouslySetInnerHTML={{ __html: logoSvg }} />
      <div>
        <h1 className={titleCN}>{title}</h1>
      </div>
    </a>
  );
}
