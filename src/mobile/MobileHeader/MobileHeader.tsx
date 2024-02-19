import React from "react";
import {
  navBar,
  navBarContent,
  navBarLeftItem,
  navBarCenterItem,
  navBarRightItem,
} from "./styles";

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
    <nav className={navBar}>
      <div className={navBarContent}>
        <div className={navBarLeftItem}>{leftItem}</div>
        <div className={navBarCenterItem}>{centerItem}</div>
        <div className={navBarRightItem}>{rightItem}</div>
      </div>
    </nav>
  );
}
