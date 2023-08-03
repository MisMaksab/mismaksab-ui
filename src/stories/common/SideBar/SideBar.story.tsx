import React from "react";
import { SideBar } from "../../../common/SideBar/SideBar";

import VegetablesAndFruitsSvg from '../../../assets/sideBarIcons/vegetablesAndFruits.svg';

const sideBarData = [
  {
    title: "овощи",
    svg: VegetablesAndFruitsSvg,
    dropdownItems: [
      {
        title: "картошка",
        link: "/"
      },
      {
        title: "помидор",
        link: "/"
      },
      {
        title: "фирамир",
        link: "/"
      }
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
  }
]

export const SideBarStory = () => (
  <SideBar
    data={sideBarData}
    title="категории"
  />
);

SideBarStory.storyName = "SideBar";
