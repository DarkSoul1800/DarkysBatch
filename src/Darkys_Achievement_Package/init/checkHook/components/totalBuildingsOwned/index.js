const totalBuildingsOwned = [
    () => {
        if (Game.BuildingsOwned >= 3000) {
            Game.Win("Owner of Buildings");
        }
    },
    () => {
        if (Game.BuildingsOwned >= 5000) {
            Game.Win("World-dominating company");
        }
    },
    () => {
        if (Game.BuildingsOwned >= 6000) {
            Game.Win("Creator of the Cookieverse");
        }
    },
    () => {
        if (Game.BuildingsOwned >= 7000) {
            Game.Win("Build until you can't build anymore");
        }
    },
    () => {
        if (Game.BuildingsOwned >= 9000) {
            Game.Win("Overlord");
        }
    },
    () => {
        if (Game.BuildingsOwned >= 10000) {
            Game.Win("That's enough, boss");
        }
    },
];

export default totalBuildingsOwned;
