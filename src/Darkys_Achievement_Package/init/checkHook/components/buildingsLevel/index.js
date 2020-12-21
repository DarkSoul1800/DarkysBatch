const checkBuildingsLevel = Game.ObjectsById.map(object => object.level);

const buildingsLevel = [
    () => {
        if (checkBuildingsLevel.filter(level => level >= 1).length === Game.ObjectsById.length) {
            Game.Win("Level 1 complete!");
        }
    },
    () => {
        if (checkBuildingsLevel.filter(level => level >= 5).length === Game.ObjectsById.length) {
            Game.Win("Five Hive");
        }
    },
    () => {
        if (checkBuildingsLevel.filter(level => level >= 10).length === Game.ObjectsById.length) {
            Game.Win("This took forever");
        }
    },
];

export default buildingsLevel;
