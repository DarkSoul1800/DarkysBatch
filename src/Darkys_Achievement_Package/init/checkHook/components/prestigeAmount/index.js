const prestigeAmount = [
    () => {
        if (Game.prestige >= 100) {
            Game.Win("Heavenly");
        }
    },
    () => {
        if (Game.prestige >= 10000) {
            Game.Win("Transcendent");
        }
    },
    () => {
        if (Game.prestige >= 1000000) {
            Game.Win("Higher energy state");
        }
    },
    () => {
        if (Game.prestige >= 1e8) {
            Game.Win("Omniverse");
        }
    },
    () => {
        if (Game.prestige >= 1e10) {
            Game.Win("The Ascendant");
        }
    },
];

export default prestigeAmount;
