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


interface MobileHeaderBurgerProps {
  title: string;
}

export function MobileHeaderBurger({title}: MobileHeaderBurgerProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onShrinkClick = useCallback(() => {
    setIsMenuOpen(val => !val);
  }, [isMenuOpen]);

  return (
    <div className={styles.burger}>
      <div className={styles.burgerIcon} onClick={onShrinkClick}>
        <span className={styles.burgerItem}></span>
        <span className={styles.burgerItem}></span>
        <span className={styles.burgerItem}></span>
      </div>

      <BurgerMenu title={title} isMenuOpen={isMenuOpen} onShrinkClick={onShrinkClick}/>
    </div>
  )
}

interface BurgerMenuProps{
  isMenuOpen: boolean;
  onShrinkClick: ()=>void;
  title: string;
}

function BurgerMenu({title, isMenuOpen, onShrinkClick}: BurgerMenuProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const onCategoryClick = useCallback(() => {
    setIsCategoryOpen(val => !val);
  }, [isCategoryOpen])

  return (
    <>
    <div className={cn(styles.burgerMenuWrapper, {
        [styles.open]: isMenuOpen
      })}></div>
    <div className={cn(styles.burgerMenu, {
      [styles.open]: isMenuOpen
    })}>
      <div className={styles.burgerMenuControls}>
        <LanguageDropdown layout='mobile' selectedLanguage="est" data={LANGUAGES_ARR}/>
        <ShrinkButton onClick={onShrinkClick}/>
      </div>
      <ul className={styles.burgerMenuContent}>
        <li className={styles.burgerMenuItem}>
          <a className={styles.burgerMenuLink} href="/">лучшие предложения</a>
        </li>
        <li className={styles.burgerMenuItem}>
          <a className={styles.burgerMenuLink} href="/">магазины</a>
        </li>
        <li className={styles.burgerMenuItem} onClick={onCategoryClick}>
          категории
        </li>
        <div className={styles.burgerMenuBar}></div>
        <li className={styles.burgerMenuItem}>
          <a className={styles.burgerMenuLink} href="/">контакты</a>
        </li>
        <li className={styles.burgerMenuItem}>
          <a className={styles.burgerMenuLink} href="/">о нас</a>
        </li>
        <li className={styles.burgerMenuItem}>
          <a className={styles.burgerMenuLink} href="/">политика<br/>конфиденциальности</a>
        </li>
      </ul>
    </div>

    <SideBar title={title} layout='mobile' data={sideBarData} isOpen={isCategoryOpen} onCategoryClick={onCategoryClick}/>
    </>
  )
}