const TieredUpgrade = (name, desc, building, tier) => {
 const answer = new Game.TieredUpgrade(name, desc, building, tier);
 answer.darky = 1;

 return answer;
};

export default TieredUpgrade;
