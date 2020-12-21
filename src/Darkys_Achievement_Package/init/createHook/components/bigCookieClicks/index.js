import Achievement from "AchievementsRoot/Achievement";

const bigCookieClicks = () => {
    Achievement("Clicker", "Click on the big cookie <b>1,000</b> times.", [11, 22]);
    Game.last.order = 1020;

    Achievement("Advanced Clicker", "Click on the big cookie <b>10,000</b> times.", [11, 23]);
    Game.last.order = 1021;

    Achievement("Expert Clicker", "Click on the big cookie <b>25,000</b> times.", [11, 24]);
    Game.last.order = 1022;
};

export default bigCookieClicks;
