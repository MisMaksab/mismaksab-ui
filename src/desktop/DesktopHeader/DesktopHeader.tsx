import React from 'react';

import styles from './DesktopHeader.scss';

interface DesktopHeaderProps {
  logo: React.ReactElement;
  searchBar: React.ReactElement;
  languages: React.ReactElement;
}

export function DesktopHeader({ logo, searchBar, languages }: DesktopHeaderProps) {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarContent}>
        <div className={styles.navBarLogo}>
          {logo}
        </div>
        <div className={styles.navBarControls}>
          <div className={styles.navBarSearchBar}>
            {searchBar}
          </div>
          <div className={styles.navBarLangDropdown}>
            {languages}
          </div>
        </div>
      </div>
    </nav>
  )
}
