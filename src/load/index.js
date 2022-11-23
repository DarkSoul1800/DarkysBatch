const load = saveString => {
    const save = JSON.parse(saveString);

    save.unlockedAchievs.forEach(achievementName => {
        Game.Achievements[achievementName].won = 1;
    });
};

export default load;
