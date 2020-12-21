import Achievement from "AchievementsRoot/Achievement";

const etc = () => {
    Achievement("All you had to do was ask", "Click this custom achievement's slot.<q>Here you go.</q>", [
        2,
        4,
        "https://i.imgur.com/AWmeHiO.png",
    ]);
    Game.last.order = 11001;
    Game.last.clickFunction = () => {
        if (!Game.HasAchiev("All you had to do was ask")) {
            PlaySound("snd/tick.mp3");
            Game.Win("All you had to do was ask");
        }
    };
};

export default etc;
