export { HeaderStory } from "./Header/Header.story";
export { GoodCardStory } from "./GoodCard/GoodCard.story";

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