export { BlockHeaderStory } from "./BlockHeader/BlockHeader.story";
export { BubbleStory } from "./Bubble/Bubble.story";
export { ButtonStory } from "./Button/Button.story";
export { CloseCrossStory } from "./CloseCross/CloseCross.story";
export { ExpadnedGoodCardStory } from "./ExpadedGoodCard/ExpadedGoodCard.story";
export { GoodCardStory } from "./GoodCard/GoodCard.story";
export { NotFoundStory } from "./404/404.story";
export { ShrinkButtonStory } from "./ShrinkButton/ShrinkButton.story";
export { BubbleBlockStory } from "./BubbleBlock/BubbleBlock.story";
export { BannerStory } from "./Banner/Banner.story";
export { LoaderStory } from "./Loader/Loader.story";

export default {
  title: "Common",
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
