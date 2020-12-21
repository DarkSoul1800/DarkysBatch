import Achievement from "AchievementsRoot/Achievement";

const prestigeUpgradesOwned = () => {
    Achievement(
        "Secret fortune",
        "Purchase the <b>3 secret prestige upgrades</b>.<q>You got more than one ace up your sleeve, huh?",
        [24, 15]
    );
    Game.last.order = 32001;

    Achievement("Pretty prestige", "Purchase <b>15</b> prestige upgrades.", [
        19,
        48,
        "https://i.imgur.com/3jNJJNw.png",
    ]);
    Game.last.order = 6005;

    Achievement("Live and learn", "Purchase <b>30</b> prestige upgrades.<q>And never forget.", [
        19,
        47,
        "https://i.imgur.com/3jNJJNw.png",
    ]);
    Game.last.order = 6006;

    Achievement("We will stay with you forever", "Purchase <b>60</b> prestige upgrades.<q>Don't reset us.</q>", [
        19,
        46,
        "https://i.imgur.com/3jNJJNw.png",
    ]);
    Game.last.order = 6007;
};

export default prestigeUpgradesOwned;
