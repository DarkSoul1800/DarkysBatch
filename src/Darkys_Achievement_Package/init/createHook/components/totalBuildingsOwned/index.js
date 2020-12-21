import Achievement from "AchievementsRoot/Achievement";

const totalBuildingsOwned = () => {
    Achievement("Owner of Buildings", "Own <b>3000</b> buildings.", [0, 0, "https://i.imgur.com/AWmeHiO.png"]);
    Game.last.order = 5010;

    Achievement("World-dominating company", "Own <b>5000</b> buildings.", [2, 0, "https://i.imgur.com/AWmeHiO.png"]);
    Game.last.order = 5012;

    Achievement("Creator of the Cookieverse", "Own <b>6000</b> buildings.", [3, 0, "https://i.imgur.com/AWmeHiO.png"]);
    Game.last.order = 5013;

    Achievement("Build until you can't build anymore", "Own <b>7000</b> buildings.", [
        4,
        0,
        "https://i.imgur.com/AWmeHiO.png",
    ]);
    Game.last.order = 5014;

    Achievement("Overlord", "Own <b>9000</b> buildings.", [4, 4, "https://i.imgur.com/AWmeHiO.png"]);
    Game.last.order = 5016;

    Achievement("That's enough, boss", "Own <b>10000</b> buildings.", [6, 0, "https://i.imgur.com/AWmeHiO.png"]);
    Game.last.order = 5017;
};

export default totalBuildingsOwned;
