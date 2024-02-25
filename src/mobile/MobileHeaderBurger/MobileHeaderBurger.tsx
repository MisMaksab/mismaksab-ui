"use client";

import React, { useCallback, useState } from "react";
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
import { SideBarItemDataProps } from "common/SideBarBoxItem/SideBarBoxItem";

// ПАШУ СПРОСИТЬ
const LANGUAGES_ARR = [
  { text: "Estonian", id: "est", link: "/" },
  { text: "Russian", id: "rus", link: "/" },
  { text: "English", id: "eng", link: "/" },
];

interface MobileHeaderBurgerProps {
  title: string;
  sideBarData: SideBarItemDataProps[];
}

export function MobileHeaderBurger({
  title,
  sideBarData,
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
      />
    </div>
  );
}

interface BurgerMenuProps {
  isMenuOpen: boolean;
  onShrinkClick: () => void;
  title: string;
  sideBarData: SideBarItemDataProps[];
}

function BurgerMenu({
  title,
  isMenuOpen,
  onShrinkClick,
  sideBarData,
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
            selectedLanguage="est"
            data={LANGUAGES_ARR}
          />
          <ShrinkButton onClick={onShrinkClick} />
        </div>
        <ul className={burgerMenuContent}>
          <li className={burgerMenuItem}>
            <a className={burgerMenuLink} href="/">
              лучшие предложения
            </a>
          </li>
          <li className={burgerMenuItem}>
            <a className={burgerMenuLink} href="/">
              магазины
            </a>
          </li>
          <li className={burgerMenuItem} onClick={onCategoryClick}>
            категории
          </li>
          <div className={burgerMenuBar}></div>
          <li className={burgerMenuItem}>
            <a className={burgerMenuLink} href="/">
              контакты
            </a>
          </li>
          <li className={burgerMenuItem}>
            <a className={burgerMenuLink} href="/">
              о нас
            </a>
          </li>
          <li className={burgerMenuItem}>
            <a className={burgerMenuLink} href="/">
              политика
              <br />
              конфиденциальности
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
      />
    </>
  );
}
