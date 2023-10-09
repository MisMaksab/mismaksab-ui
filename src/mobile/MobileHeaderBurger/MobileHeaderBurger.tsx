import React, { useCallback, useState } from 'react'
import styles from './MobileHeaderBurger.scss';
import { LanguageDropdown } from '../../common/LanguageDropdown/LanguageDropdown';
import { ShrinkButton } from '../../common/ShrinkButton/ShrinkButton';
import { SideBar } from '../../common/SideBar/SideBar';
import cn from 'classnames';


import VegetablesAndFruitsSvg from '../../assets/sideBarIcons/vegetablesAndFruits.svg';
import SideBarItemArrow from '../../assets/sideBarIcons/sideBarItemArrow.svg';
const LANGUAGES_ARR = [
  {text: 'Estonian', id: 'est', link: '/'},
  {text: 'Russian', id: 'rus', link: '/'},
  {text: 'English', id: 'eng', link: '/'},
]
const sideBarData = [
  {
    title: "овощи",
    svg: VegetablesAndFruitsSvg,
    subSvg: SideBarItemArrow,
    link: '/',
    dropdownItems: [
      
    ]
  },
  {
    title: "фрукты",
    svg: VegetablesAndFruitsSvg,
    dropdownItems: [
      {
        title: "сливы",
        link: "/"
      },
      {
        title: "яблоко",
        link: "/"
      },
      {
        title: "груша",
        link: "/"
      }
    ]
  },
  {
    title: "мясо",
    svg: VegetablesAndFruitsSvg,
    dropdownItems: [
      {
        title: "сливы",
        link: "/"
      },
      {
        title: "яблоко",
        link: "/"
      },
      {
        title: "груша",
        link: "/"
      }
    ]
  }
]

export function MobileHeaderBurger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuCb = useCallback(() => {
    setIsMenuOpen(val => !val);
  }, [isMenuOpen]);

  return (
    <div className={styles.burger}>
      <div className={styles.burgerIcon} onClick={handleMenuCb}>
        <span className={styles.burgerItem}></span>
        <span className={styles.burgerItem}></span>
        <span className={styles.burgerItem}></span>
      </div>

      <BurgerMenu isMenuOpen={isMenuOpen} handleBurgerMenu={handleMenuCb}/>
    </div>
  )
}

interface BurgerMenuProps{
  isMenuOpen: boolean;
  handleBurgerMenu: ()=>void;
}

function BurgerMenu({isMenuOpen, handleBurgerMenu}: BurgerMenuProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const handleCategoryCb = useCallback(() => {
    setIsCategoryOpen(val => !val);
  }, [isCategoryOpen])

  return (
    <>
    <div className={cn(styles.burgerMenu, {
      [styles.open]: isMenuOpen
    })}>
      <div className={styles.burgerMenuControls}>
        <LanguageDropdown layout='mobile' selectedLanguage="est" data={LANGUAGES_ARR}/>
        <ShrinkButton onHide={handleBurgerMenu}/>
      </div>
      <div className={styles.burgerMenuContent}>
        <div className={styles.burgerMenuItem} onClick={handleCategoryCb}>
          категории
        </div>
      </div>
    </div>

    <SideBar title='Категории' layout='mobile' data={sideBarData} isOpen={isCategoryOpen} handleCategoryCb={handleCategoryCb}/>
    </>
  )
}