import {
    bigCookieClicks,
    buildingsLevel,
    buildingsOwned,
    cookiesFromClicking,
    everyBuildingOwned,
    prestigeAmount,
    prestigeUpgradesOwned,
    shadow,
    themedUpgrades,
    totalBuildingsOwned,
    totalUpgradesOwned,
} from "./components";

const checkHookContent = [
    ...bigCookieClicks,
    ...buildingsLevel,
    ...buildingsOwned,
    ...cookiesFromClicking,
    ...everyBuildingOwned,
    ...prestigeAmount,
    ...prestigeUpgradesOwned,
    ...shadow,
    ...themedUpgrades,
    ...totalBuildingsOwned,
    ...totalUpgradesOwned,
];

export default checkHookContent;
