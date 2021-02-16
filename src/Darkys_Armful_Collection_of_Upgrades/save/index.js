const save = () => {
 const DarkySave = {
  boughtUpgrades: [],
  unlockedUpgrades: [],
 };

 Game.UpgradesById.forEach(upgrade => {
  if (upgrade.darky) {
   if (upgrade.unlocked) {
    DarkySave.unlockedUpgrades.push(upgrade.name);
   }

   if (upgrade.bought) {
    DarkySave.boughtUpgrades.push(upgrade.name);
   }
  }
 });

 return JSON.stringify(DarkySave);
};

export default save;
