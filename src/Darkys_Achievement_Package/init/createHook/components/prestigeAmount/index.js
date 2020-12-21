import Achievement from "AchievementsRoot/Achievement";

const prestigeAmount = () => {
    Achievement("Heavenly", "Reach prestige level <b>100</b>.", [19, 7]);
    Game.last.order = 30010;

    Achievement("Transcendent", "Reach prestige level <b>10,000</b>.", [18, 7]);
    Game.last.order = 30011;

    Achievement("Higher energy state", "Reach prestige level <b>1 million</b>.", [17, 7]);
    Game.last.order = 30012;

    Achievement("Omniverse", "Reach prestige level <b>100 million</b>.", [16, 7]);
    Game.last.order = 30013;

    Achievement("The Ascendant", "Reach prestige level <b>10 billion</b>.", [15, 7]);
    Game.last.order = 30014;
};

export default prestigeAmount;
