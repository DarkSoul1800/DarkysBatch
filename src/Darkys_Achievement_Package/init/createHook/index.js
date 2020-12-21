import {
    bigCookieClicks,
    buildingsLevel,
    buildingsOwned,
    cookiesFromClicking,
    etc,
    everyBuildingOwned,
    prestigeAmount,
    prestigeUpgradesOwned,
    shadow,
    themedUpgrades,
    totalBuildingsOwned,
    totalUpgradesOwned,
} from "./components";

const createHook = () => {
    bigCookieClicks();
    buildingsLevel();
    buildingsOwned();
    cookiesFromClicking();
    etc();
    everyBuildingOwned();
    prestigeAmount();
    prestigeUpgradesOwned();
    shadow();
    themedUpgrades();
    totalBuildingsOwned();
    totalUpgradesOwned();
};

export default createHook;
