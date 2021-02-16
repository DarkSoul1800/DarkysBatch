const Achievement = (name, desc, icon) => {
 const answer = new Game.Achievement(name, desc, icon);
 answer.darky = 1;

 return answer;
};

export default Achievement;
