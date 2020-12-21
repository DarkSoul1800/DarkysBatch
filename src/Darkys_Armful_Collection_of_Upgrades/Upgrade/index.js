const Upgrade = (name, desc, price, icon, buyFunction) => {
    const answer = new Game.Upgrade(name, desc, price, icon, buyFunction);
    answer.darky = 1;

    return answer;
};

export default Upgrade;
