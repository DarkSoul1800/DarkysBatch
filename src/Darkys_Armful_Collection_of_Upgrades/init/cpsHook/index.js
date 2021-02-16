const cpsHookContent = cps => {
 let modifiedCps = cps;

 if (Game.Has('Building up')) {
  modifiedCps *= Game.BuildingsOwned * 1.00005;
 }

 return modifiedCps;
};

export default cpsHookContent;
