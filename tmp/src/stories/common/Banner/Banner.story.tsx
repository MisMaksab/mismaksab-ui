import React from "react";
import { Banner } from "../../../common/Banner/Banner";
import plumsImg from '../../../assets/banner/plums.svg';

export const BannerStory = () => (
  <>
  <Banner
    layout="desktop"
    mode="blue"
    title="Скидка"
    text="Выгодные предложения в категории Фрукты"
    searchLink="/"
    searchText="Искать"
    img={plumsImg}
  />
  <br/>
  <Banner
    layout="mobile"
    mode="blue"
    title="Скидка"
    text="Выгодные предложения в категории Фрукты"
    searchLink="/"
    searchText="Искать"
    img={plumsImg}
  /></>
);

BannerStory.storyName = "banner";
