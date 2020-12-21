import Achievement from "AchievementsRoot/Achievement";

const everyBuildingOwned = () => {
    Achievement("Sexcentennial and a half", "Have at least <b>650 of everything</b>.<q>Yes I just did that.</q>", [
        1,
        3,
        "https://i.imgur.com/AWmeHiO.png",
    ]);
    Game.last.order = 7004;
};

export default everyBuildingOwned;
