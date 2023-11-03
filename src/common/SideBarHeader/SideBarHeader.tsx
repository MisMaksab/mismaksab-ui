import React, { useEffect, useState } from 'react';
import styles from './SideBarHeader.scss';
import SideBarHideSvg from '../../assets/icons/sideBarHide.svg';
import cn from 'classnames';
import { LayoutProp } from '../LayoutProp';
import { SearchBar } from '../SearchBar/SearchBar';
import { ShrinkButton } from '../ShrinkButton/ShrinkButton';

interface SideBarHeaderProps extends LayoutProp{
  title: string;
  isOpen: boolean;
  onCategoryClick: ()=>void;
  changeExpandedIdCb?: (id: number | null) => void;
}

export function SideBarHeader({layout, title, isOpen, onCategoryClick, changeExpandedIdCb}: SideBarHeaderProps) {
  const [showSearchBar, setShowSearchBar] = useState(true);

  function handleShrinkButtonClick() {
    onCategoryClick()
    if (typeof changeExpandedIdCb !== 'undefined') changeExpandedIdCb(null)
  }

  useEffect(() => {

    const handleScroll = () => {
      if (isOpen && layout === 'mobile') setShowSearchBar(window.scrollY <= 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn({
      [styles.fixedBlock]: layout === 'mobile',
        [styles.open]: isOpen,
    })}>
      <div className={cn(styles.sideBarHeader, styles[layout])}>
        <h1 className={cn(styles.title, {
          [styles.active]: !showSearchBar || isOpen
        })}>{title}</h1>
        <ShrinkButton onClick={handleShrinkButtonClick} />

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