import React, { useEffect, useState } from 'react';
import styles from './SideBarHeader.scss';
import SideBarHideSvg from '../../assets/icons/sideBarHide.svg';
import cn from 'classnames';
import { LayoutProp } from '../LayoutProp';
import { SearchBar } from '../SearchBar/SearchBar';

interface SideBarHeaderProps extends LayoutProp{
  title: string;
  onHide: () => void;
}

export function SideBarHeader({layout, title, onHide}: SideBarHeaderProps) {
  const [showSearchBar, setShowSearchBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setShowSearchBar(false);
      else setShowSearchBar(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.fixedBlock}>
      <div className={cn(styles.sideBarHeader, styles[layout])}>
        <h1 className={cn(styles.title, {
          [styles.active]: !showSearchBar
        })}>{title}</h1>
        <div className={styles.hide} onClick={onHide}>
          <img className={styles.svg} src={SideBarHideSvg} />
        </div>

        {layout === 'mobile' &&
          <div className={cn(styles.searchBar, {
            [styles.active]: showSearchBar
          })}>
            <SearchBar sideBarOpen={true} onChange={(val: string) => null} placeHolderText="Найти в MisMaksab" />
          </div>
        }
      </div>
    </div>
  )
}