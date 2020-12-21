import Achievement from "AchievementsRoot/Achievement";

const shadow = () => {
    Achievement("Mod-God complex", "Name yourself <b>Darky</b>.<q>Ducky.</q>", [2, 12]);
    Game.last.order = 30201;
    Game.last.pool = "shadow";

    Achievement("Golden Jackpot", "Click <b>77,777 golden cookies</b>.", [0, 3, "https://i.imgur.com/AWmeHiO.png"]);
    Game.last.order = 10001;
    Game.last.pool = "shadow";
};

export default shadow;
