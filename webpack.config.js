const path = require("path");

module.exports = {
    entry: {
        Darkys_Achievement_Package: path.resolve(__dirname, "src", "Darkys_Achievement_Package", "index.js"),
        Darkys_Armful_Collection_of_Upgrades: path.resolve(
            __dirname,
            "src",
            "Darkys_Armful_Collection_of_Upgrades",
            "index.js"
        ),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    resolve: {
        alias: {
            AchievementsRoot: path.resolve(__dirname, "src", "Darkys_Achievement_Package"),
            UpgradesRoot: path.resolve(__dirname, "src", "Darkys_Armful_Collection_of_Upgrades"),
        },
    },
    devtool: "source-map",
};
