import { footer, footerContent, footerLinksCN, footerInfoCN } from "./styles";

interface FooterDesktopProps {
  footerLinks: React.ReactElement;
  footerInfo: React.ReactElement;
}

export function DesktopFooter({ footerLinks, footerInfo }: FooterDesktopProps) {
  return (
    <footer className={footer}>
      <div className={footerContent}>
        <div className={footerLinksCN}>{footerLinks}</div>
        <div className={footerInfoCN}>{footerInfo}</div>
      </div>
    </footer>
  );
}
