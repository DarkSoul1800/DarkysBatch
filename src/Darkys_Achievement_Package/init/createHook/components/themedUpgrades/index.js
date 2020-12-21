import Achievement from "AchievementsRoot/Achievement";

const themedUpgrades = () => {
    Achievement("Getting fancy", "Purchase <b>all fancy biscuits</b>.", [21, 8]);
    Game.last.order = 21101;

    Achievement("You wanna be popular?", "Purchase <b>all popular biscuits</b>.", [20, 9]);
    Game.last.order = 21103;

    Achievement("Emmanuel Macaron", "Purchase <b>all macarons</b>.", [20, 8]);
    Game.last.order = 21102;

    Achievement("Rich butterfingers", "Purchase <b>all rich butter cookies</b>.", [21, 9]);
    Game.last.order = 21104;

    Achievement("Bake me, maybe?", "Purchase <b>all maybe cookies</b>.", [25, 29]);
    Game.last.order = 21106;

    Achievement("Burger Clicker", "Purchase <b>all not cookies</b>.<q>Shoutout to the old Idle Game Maker!</q>", [
        26,
        29,
    ]);
    Game.last.order = 21107;

    Achievement("Pastries from the past", "Purchase <b>all pastries</b>.", [27, 29]);
    Game.last.order = 21105;

    Achievement("Purrfect Perfection", "Purrchase <b>every kitten upgrade</b>.<q>Are you sick of these puns yet?</q>", [
        26,
        7,
    ]);
    Game.last.order = 10001;

    Achievement(
        "It's sweet, sweet, sweet Synergy",
        "Purchase <b>all Synergy I upgrades</b>.<q>It's ours for the baking.</q>",
        [9, 20]
    );
    Game.last.order = 6008;

    Achievement("Out of Energy? Get Synergy!", "Purchase <b>all Synergy II upgrades</b>.", [9, 29]);
    Game.last.order = 6009;

    Achievement("Spike the dragon", "Purchase <b>all dragon upgrades</b>.<q>Keep an eye on your gems.</q>", [30, 12]);
    Game.last.order = 21109;

    Achievement(
        "Collecting these is like growing plants",
        "Purchase <b>all plant upgrades</b>.<q>It takes a looooong time.</q>",
        [24, 25]
    );
    Game.last.order = 21108;
};

export default themedUpgrades;
