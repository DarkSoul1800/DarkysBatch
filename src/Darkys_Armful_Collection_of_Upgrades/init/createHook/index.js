import Upgrade from 'UpgradesRoot/Upgrade';
import TieredUpgrade from 'UpgradesRoot/TieredUpgrade';

const createHook = () => {
 // Original
 Upgrade(
  'Building up',
  'Everything is more efficient per building owned.<q>I can already feel the power building up.</q>',
  1000000,
  [2, 6],
 );
 // Tiered
 // Upgrade(
 //  'Nonillion fingers',
 //  "The mouse and cursors gain <b>+50000000</b> cookies for each non-cursor object owned.<q>That's quite the finger power.</q>",
 //  1e25,
 //  [13, 19],
 // );
 // Game.last.order = 113;
 // Game.MakeTiered(Game.last, 13, 0);
 Upgrade('Loyalystic mouse', 'Clicking gains <b>+1% of your CpS</b>.<q>A true, true mouse.</q>', 5e28, [11, 31]);
 Game.last.order = 163;
 Game.MakeTiered(Game.last, 13, 11);
 TieredUpgrade('Granny talk', 'Grandmas are <b>twice</b> as efficient.<q>Only a few have survived.</q>', 'Grandma', 13);
 Game.last.order = 201;
 TieredUpgrade('Chocolate chip seeds', 'Farms are <b>twice</b> as efficient.<q>Makes sense, right?</q>', 'Farm', 13);
 Game.last.order = 301;
 TieredUpgrade(
  'Omegadrill',
  "Mines are <b>twice</b> as efficient.<q>It's coming in late but we go it.</q>",
  'Mine',
  13,
 );
 Game.last.order = 401;
 TieredUpgrade(
  'Pumping out new workers',
  'Factories are <b>twice</b> as efficient.<q>Yes, we no longer need the birds and the bees, we can just create life itself!</q>',
  'Factory',
  13,
 );
 Game.last.order = 501;
 TieredUpgrade(
  'Baking the dough',
  'Banks are <b>twice</b> as efficient.<q>Instead of making the bucks.</q>',
  'Bank',
  13,
 );
 Game.last.order = 526;
 TieredUpgrade(
  'Cookie cults',
  'Temples are <b>twice</b> as efficient.<q>Every sunday they meet to bake in secret.</q>',
  'Temple',
  13,
 );
 Game.last.order = 551;
 TieredUpgrade(
  'Trix™️',
  'Wizard towers are <b>twice</b> as efficient.<q>Brand cookies which taste pretty bad but not taken off the market for some reason. These darn wizards and their silly magic, keeping their brand cookies alive with their magic!</q>',
  'Wizard tower',
  13,
 );
 Game.last.order = 576;
 TieredUpgrade('Hyperspeed', 'Shipments are <b>twice</b> as efficient.<q>HYPE, HYPE, HYPE, HYPE!</q>', 'Shipment', 13);
 Game.last.order = 601;
 TieredUpgrade(
  'The way we make golden cookies',
  'Alchemy labs are <b>twice</b> as efficient.<q>[REDACTED]</q>',
  'Alchemy lab',
  13,
 );
 Game.last.order = 701;
 TieredUpgrade(
  'Portal to nowhere',
  "Portals are <b>twice</b> as efficient.<q>A quiet place to store the cookies. I don't know why you would want to do that though.</q>",
  'Portal',
  13,
 );
 Game.last.order = 801;
 TieredUpgrade(
  'Year of the weekly months without the days',
  'Time machines are <b>twice</b> as efficient.<q>Counting the hourly seconds by minutes.</q>',
  'Time machine',
  13,
 );
 Game.last.order = 901;
 TieredUpgrade(
  'Bake matter',
  'Antimatter condensers are <b>twice</b> as efficient.<q>Just a bunch of tiny balls during scientific baking.</q>',
  'Antimatter condenser',
  13,
 );
 Game.last.order = 1001;
 TieredUpgrade('Shiny!!', "Prisms are <b>twice</b> as efficient.<q>Let's baking!</q>", 'Prism', 13);
 Game.last.order = 1101;
 TieredUpgrade(
  'Casino fever',
  'Chancemakers are <b>twice</b> as efficient.<q>A dangerous place for your wallet has become heaven on earth for it.</q>',
  'Chancemaker',
  13,
 );
 Game.last.order = 1201;
 TieredUpgrade(
  'Big brain time',
  'Fractal engines are <b>twice</b> as efficient.<q>Think thonk.</q>',
  'Fractal engine',
  13,
 );
 Game.last.order = 1301;
 TieredUpgrade(
  "Darky can't actually code",
  'Javascript consoles are <b>twice</b> as efficient.<q>He just happened to be smart enough to make both an achievement and upgrade mod for Cookie Clicker.</q>',
  'Javascript console',
  13,
 );
 Game.last.order = 1401;
};

export default createHook;
