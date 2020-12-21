let minAmount = 0;
Game.ObjectsById.forEach(object => {
    minAmount = Math.min(object.amount, 100000);
});

const everyBuildingOwned = [
    () => {
        if (minAmount >= 650) {
            Game.Win("Sexcentennial and a half");
        }
    },
];

export default everyBuildingOwned;
