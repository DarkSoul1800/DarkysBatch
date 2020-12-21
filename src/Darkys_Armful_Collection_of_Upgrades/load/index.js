const load = saveString => {
    const save = JSON.parse(saveString);

    save.unlockedUpgrades.forEach(upgradeName => {
        Game.Achievements[upgradeName].unlocked = 1;
    });
    save.boughtUpgrades.forEach(upgradeName => {
        Game.Achievements[upgradeName].bought = 1;
    });
};

export default load;
