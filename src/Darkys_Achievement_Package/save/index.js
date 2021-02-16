const save = () => {
 const DarkySave = {
  unlockedAchievs: [],
 };

 Game.AchievementsById.forEach(achievement => {
  if (achievement.darky && achievement.won) {
   DarkySave.unlockedAchievs.push(achievement.name);
  }
 });

 return JSON.stringify(DarkySave);
};

export default save;
