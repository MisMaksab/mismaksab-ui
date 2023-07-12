import React from 'react';

import styles from './Header.scss';

interface Props {
  info: React.ReactElement;
  logo: React.ReactElement;
  searchBar: React.ReactElement;
  languages: React.ReactElement;
  myListButton: React.ReactElement;
}

export function Header({ logo, searchBar, languages }: Props) {
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
