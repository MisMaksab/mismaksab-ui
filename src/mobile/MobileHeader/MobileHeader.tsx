import React from "react";

import styles from "./MobileHeader.scss";

interface MobileHeaderProps {
  centerItem: React.ReactElement;
  leftItem: React.ReactElement;
  rightItem: React.ReactElement;
}

export function MobileHeader({
  centerItem,
  leftItem,
  rightItem,
}: MobileHeaderProps) {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarContent}>
        <div className={styles.navBarLeftItem}>{leftItem}</div>
        <div className={styles.navBarCenterItem}>{centerItem}</div>
        <div className={styles.navBarRightItem}>{rightItem}</div>
      </div>
    </nav>
  );
}
