const totalUpgradesOwned = [
    () => {
        if (Game.UpgradesOwned >= 500) {
            Game.Win("Earth-shattering association");
        }
    },
    () => {
        if (Game.UpgradesOwned >= 600) {
            Game.Win("Maker of the Idleverse");
        }
    },
];
export default totalUpgradesOwned;
