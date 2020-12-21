import init from "./init";
import load from "./load";
import save from "./save";
import TieredUpgrade from "./TieredUpgrade";
import Upgrade from "./Upgrade";

const DarkysUpgradeCollection = {
    init,
    save,
    load,
    Upgrade,
    TieredUpgrade,
};

Game.registerMod("Darkys Upgrade Collection", DarkysUpgradeCollection);
Game.Notify(
    "Darky's Armful Collection of Upgrades 1.1",
    " <b>16</b> new Upgrades have been added, enjoy and thank you for using my mod!",
    [19, 26, "https://i.imgur.com/3jNJJNw.png"]
);
PlaySound("https://freesound.org/data/previews/172/172589_71257-lq.mp3");
