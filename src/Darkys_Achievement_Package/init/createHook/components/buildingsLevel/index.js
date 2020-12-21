import Achievement from "AchievementsRoot/Achievement";

const buildingsLevel = () => {
    Achievement("Level 1 complete!", "Reach level <b>1</b> of every building.", [
        0,
        2,
        "https://i.imgur.com/AWmeHiO.png",
    ]);
    Game.last.order = 5017;

    Achievement("Five Hive", "Reach level <b>5</b> of every building.", [1, 2, "https://i.imgur.com/AWmeHiO.png"]);
    Game.last.order = 5018;

    Achievement("This took forever", "Reach level <b>10</b> of every building.", [
        2,
        2,
        "https://i.imgur.com/AWmeHiO.png",
    ]);
    Game.last.order = 5019;
};

export default buildingsLevel;
