import Achievement from "AchievementsRoot/Achievement";

const totalUpgradesOwned = () => {
    Achievement("Earth-shattering association", "Purchase <b>500</b> upgrades.", [
        2,
        1,
        "https://i.imgur.com/AWmeHiO.png",
    ]);
    Game.last.order = 6003;

    Achievement("Maker of the Idleverse", "Purchase <b>600</b> upgrades.", [3, 1, "https://i.imgur.com/AWmeHiO.png"]);
    Game.last.order = 6004;
};

export default totalUpgradesOwned;
