;
import logoSvg from "../../assets/icons/logo.svg";
import { img, logo, subTitle } from "./styles";

interface DesktopHeaderLogoProps {
  title: string;
  subtitle: string;
  href?: string;
}

export function DesktopHeaderLogo({
  title,
  subtitle,
  href = "/",
}: DesktopHeaderLogoProps) {
  return (
    <a href={href} className={logo}>
      <div className={img} dangerouslySetInnerHTML={{ __html: logoSvg }} />
      <div>
        <h1 className={title}>{title}</h1>
        <h6 className={subTitle}>{subtitle}</h6>
      </div>
    </a>
  );
}
