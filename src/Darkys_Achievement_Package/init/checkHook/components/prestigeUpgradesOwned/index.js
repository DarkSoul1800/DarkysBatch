let prestigeUpgradesTotal = 0;
Game.PrestigeUpgrades.forEach(upgrade => {
    if (upgrade.bought) {
        prestigeUpgradesTotal++;
    }
});

const prestigeUpgradesOwned = [
    () => {
        if (Game.Has("Lucky digit") && Game.Has("Lucky number") && Game.Has("Lucky payout")) {
            Game.Win("Secret fortune");
        }
    },
    () => {
        if (prestigeUpgradesTotal >= 15) {
            Game.Win("Pretty prestige");
        }
    },
    () => {
        if (prestigeUpgradesTotal >= 30) {
            Game.Win("Live and learn");
        }
    },
    () => {
        if (prestigeUpgradesTotal >= 60) {
            Game.Win("We will stay with you forever");
        }
    },
];

export default prestigeUpgradesOwned;
