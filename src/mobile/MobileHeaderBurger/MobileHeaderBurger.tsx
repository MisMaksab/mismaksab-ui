"use client";

import { useCallback, useState } from "react";
import { LanguageDropdown } from "../../common/LanguageDropdown/LanguageDropdown";
import { SideBar } from "../../common/SideBar/SideBar";
import cn from "classnames";
import {
  burger,
  burgerIcon,
  burgerItem,
  burgerMenuWrapper,
  burgerMenu,
  burgerMenuControls,
  burgerMenuContent,
  burgerMenuItem,
  burgerMenuLink,
  burgerMenuBar,
  open,
} from "./styles";
import { ShrinkButton } from "../../common/ShrinkButton/ShrinkButton";
import { SideBarItemDataProps } from "../../common/SideBarBoxItem/SideBarBoxItem";

interface MobileHeaderBurgerProps {
  title: string;
  sideBarData: SideBarItemDataProps[];
  selectedLanguage: string;
  languagesData: { text: string; id: string; link: string }[];
  menuData: { text: string; link?: string }[];
}

export function MobileHeaderBurger({
  title,
  sideBarData,
  languagesData,
  selectedLanguage,
  menuData,
}: MobileHeaderBurgerProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onShrinkClick = useCallback(() => {
    setIsMenuOpen((val) => !val);
  }, [isMenuOpen]);

  return (
    <div className={burger}>
      <div className={burgerIcon} onClick={onShrinkClick}>
        <span className={burgerItem}></span>
        <span className={burgerItem}></span>
        <span className={burgerItem}></span>
      </div>

      <BurgerMenu
        title={title}
        isMenuOpen={isMenuOpen}
        onShrinkClick={onShrinkClick}
        sideBarData={sideBarData}
        selectedLanguage={selectedLanguage}
        languagesData={languagesData}
        menuData={menuData}
      />
    </div>
  );
}

interface BurgerMenuProps {
  isMenuOpen: boolean;
  onShrinkClick: () => void;
  title: string;
  sideBarData: SideBarItemDataProps[];
  selectedLanguage: string;
  languagesData: { text: string; id: string; link: string }[];
  menuData: { text: string; link?: string }[];
}

function BurgerMenu({
  title,
  isMenuOpen,
  onShrinkClick,
  sideBarData,
  selectedLanguage,
  languagesData,
  menuData,
}: BurgerMenuProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const onCategoryClick = useCallback(() => {
    setIsCategoryOpen((val) => !val);
  }, [isCategoryOpen]);

  return (
    <>
      <div
        className={cn(burgerMenuWrapper, {
          [open]: isMenuOpen,
        })}
      ></div>
      <div
        className={cn(burgerMenu, {
          [open]: isMenuOpen,
        })}
      >
        <div className={burgerMenuControls}>
          <LanguageDropdown
            layout="mobile"
            selectedLanguage={selectedLanguage}
            data={languagesData}
          />
          <ShrinkButton onClick={onShrinkClick} />
        </div>
        <ul className={burgerMenuContent}>
          <li className={burgerMenuItem}>
            <a className={burgerMenuLink} href={menuData[0].link}>
              {menuData[0].text}
            </a>
          </li>
          <li className={burgerMenuItem}>
            <a className={burgerMenuLink} href={menuData[1].link}>
              {menuData[1].text}
            </a>
          </li>
          <li className={burgerMenuItem} onClick={onCategoryClick}>
            {menuData[2].text}
          </li>
          <div className={burgerMenuBar}></div>
          <li className={burgerMenuItem}>
            <a className={burgerMenuLink} href={menuData[3].link}>
              {menuData[3].text}
            </a>
          </li>
          <li className={burgerMenuItem}>
            <a className={burgerMenuLink} href={menuData[4].link}>
              {menuData[4].text}
            </a>
          </li>
          <li className={burgerMenuItem}>
            <a className={burgerMenuLink} href={menuData[5].link}>
              {menuData[5].text}
            </a>
          </li>
        </ul>
      </div>

      <SideBar
        title={title}
        layout="mobile"
        data={sideBarData}
        isOpen={isCategoryOpen}
        onCategoryClick={onCategoryClick}
        mobileSearchPathWithoutValue={`/${selectedLanguage}/search?query=`}
      />
    </>
  );
}
