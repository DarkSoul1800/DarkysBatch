const Achievement = (name, desc, icon) => {
    const answer = new Game.Achievement(name, desc, icon);
    answer.darky = 1;
    answer.ddesc = desc;

    return answer;
};

export default Achievement;
