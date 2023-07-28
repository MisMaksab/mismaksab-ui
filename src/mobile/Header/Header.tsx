import React from 'react';

import styles from './Header.scss';
import cn from 'classnames';

interface Props {
  logo: React.ReactElement;
  searchBar: React.ReactElement;
  languages: React.ReactElement;
  burger: React.ReactElement;
}

export function Header({ logo, searchBar, languages, burger }: Props) {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarContent}>
        <div className={styles.navBarBurger}>
          {burger}
        </div>
        <div className={styles.navBarLogo}>
          {logo}
        </div>
        <div className={cn(styles.navBarLangDropdown)}>
          {languages}
        </div>
      </div>
    </nav>
  )
}
