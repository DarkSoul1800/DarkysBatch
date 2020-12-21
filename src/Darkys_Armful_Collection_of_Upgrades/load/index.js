const load = saveString => {
    const save = JSON.parse(saveString);

    save.unlockedUpgrades.forEach(upgradeName => {
        Game.Unlock(upgradeName);
    });
    save.boughtUpgrades.forEach(upgradeName => {
        Game.Upgrades[upgradeName].bought = 1;
    });
};

export default load;
