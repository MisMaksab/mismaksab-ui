import React from 'react';

import styles from './MobileHeader.scss';

interface MobileHeaderProps {
  logo: React.ReactElement;
  languages: React.ReactElement;
  burger: React.ReactElement;
}

export function MobileHeader({ logo, languages, burger }: MobileHeaderProps) {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarContent}>
        <div className={styles.navBarBurger}>
          {burger}
        </div>
        <div className={styles.navBarLogo}>
          {logo}
        </div>
        <div className={styles.navBarLangDropdown}>
          {languages}
        </div>
      </div>
    </nav>
  )
}
