import React from "react";
import { SideBar } from "../../../common/SideBar/SideBar";

import VegetablesAndFruitsSvg from '../../../assets/sideBarIcons/vegetablesAndFruits.svg';
import SideBarItemArrow from '../../../assets/sideBarIcons/sideBarItemArrow.svg';


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

export const SideBarStory = () => (
  <SideBar
    layout='desktop'
    data={sideBarData}
    title="категории"
    isOpen={true}
    handleCategoryCb={()=>{}}
  />
);

SideBarStory.storyName = "SideBar";
