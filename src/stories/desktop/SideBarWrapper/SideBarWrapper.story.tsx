import React from "react";
import { SideBar } from "../../../common/SideBar/SideBar";

import VegetablesAndFruitsSvg from "../../../assets/sideBarIcons/vegetablesAndFruits.svg";
import SideBarItemArrow from "../../../assets/sideBarIcons/sideBarItemArrow.svg";
import { DesktopSideBarWrapper } from "../../../desktop/DesktopSideBarWrapper/DesktopSideBarWrapper";

const sideBarData = [
  {
    title: "овощи",
    svg: VegetablesAndFruitsSvg,
    subSvg: SideBarItemArrow,
    link: "/",
    dropdownItems: [],
  },
  {
    title: "фрукты",
    svg: VegetablesAndFruitsSvg,
    dropdownItems: [
      {
        title: "сливы",
        link: "/",
      },
      {
        title: "яблоко",
        link: "/",
      },
      {
        title: "груша",
        link: "/",
      },
    ],
  },
  {
    title: "мясо",
    svg: VegetablesAndFruitsSvg,
    dropdownItems: [
      {
        title: "сливы",
        link: "/",
      },
      {
        title: "яблоко",
        link: "/",
      },
      {
        title: "груша",
        link: "/",
      },
    ],
  },
];

export const SideBarWrapperStory = () => (
  <DesktopSideBarWrapper data={sideBarData} title="категории" />
);

SideBarWrapperStory.storyName = "SideBar";
