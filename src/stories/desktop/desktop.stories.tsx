export { HeaderStory } from "./Header/Header.story";
export { FooterStory } from "./Footer/Footer.story";
export { SliderStory } from "./Slider/Slider.story";
export { RetailersSliderStory } from "./RetailerSlider/RetailerSlider.story";
export { SideBarWrapperStory } from "./SideBarWrapper/SideBarWrapper.story";
export { BubbleBlockStory } from "./BubbleBlock/BubbleBlock.story";

export default {
  title: "Desktop",
  parameters: {
    backgrounds: {
      default: "white",
      values: [
        { name: "white", value: "#FFF" },
        { name: "black", value: "#000" },
        { name: "dark", value: "#333" },
        { name: "grey", value: "#777" },
        { name: "light", value: "#eee" },
        { name: "green", value: "#1c653f" },
      ],
    },
  },
};
