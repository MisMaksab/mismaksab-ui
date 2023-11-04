const path = require("path");

module.exports = {
    stories: ["../src/**/*.{story,stories}.@(ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
    ],
    staticDirs: ["../src"],
    webpackFinal: (config) => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto",
        });
        config.resolve.extensions.push(".mjs");
        config.module.rules[0].use.push({
            loader: "@linaria/webpack-loader",
            options: {
                sourceMap: false,
                babelOptions: {
                    presets: [
                        "@babel/preset-typescript",
                        "@babel/preset-react",
                        "@linaria/babel-preset",
                    ],
                },
            }
        });
        config.resolve.modules = [
            ...(config.resolve.modules || []),
            path.resolve(__dirname, "../src"),
        ];
        return config;
    }
};
