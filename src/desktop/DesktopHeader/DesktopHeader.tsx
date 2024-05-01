;
import {
  navBar,
  navBarContent,
  navBarControls,
  navBarLangDropdown,
  navBarLogo,
  navBarSearchBar,
} from "./styles";

interface DesktopHeaderProps {
  logo: React.ReactElement;
  searchBar: React.ReactElement;
  languages: React.ReactElement;
}

export function DesktopHeader({
  logo,
  searchBar,
  languages,
}: DesktopHeaderProps) {
  return (
    <nav className={navBar}>
      <div className={navBarContent}>
        <div className={navBarLogo}>{logo}</div>
        <div className={navBarControls}>
          <div className={navBarSearchBar}>{searchBar}</div>
          <div className={navBarLangDropdown}>{languages}</div>
        </div>
      </div>
    </nav>
  );
}
