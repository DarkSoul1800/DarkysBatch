const overrides = () => {
    const style = document.createElement('style');
    style.textContent =
        '.darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}';
    document.head.appendChild(style);

    Game.crate = new Function(
        `return ${Game.crate
            .toString()
            .split("shadow';")
            .join(
                " shadow';\nif (me.darky === 1) classes+=' darky'; //Darky's achievement package injection",
            )
            .split('mysterious?')
            .join(
                "mysterious? (me.darky === 1) ? 'background-image:url(\\'https://i.imgur.com/JKKvixm.png\\')'/*Darky's achievement package injection*/ : ",
            )}`,
    )();
    Game.crateTooltip = new Function(
        `return ${Game.crateTooltip
            .toString()
            .split('if (mysterious) icon=[0,7];')
            .join(
                "if (mysterious) icon=[0,7]; if (mysterious && me.darky === 1) icon = [1, 4, 'https://i.imgur.com/AWmeHiO.png']",
            )}`,
    )();

    Game.Achievements['Grand design'].icon = [1, 0, 'https://i.imgur.com/AWmeHiO.png'];
    Game.Achievements.Ecumenopolis.icon = [5, 0, 'https://i.imgur.com/AWmeHiO.png'];
    Game.RebuildUpgrades();
    Game.Achievements['Grand design'].order = 5011;
    Game.Achievements.Ecumenopolis.order = 5015;
    Game.Achievements.Polymath.order = 6010;
    Game.Achievements['Renaissance baker'].order = 6011;
    Game.Achievements['The elder scrolls'].order = 6012;
    Game.Achievements['Tabloid addiction'].order = 11003;
    Game.Achievements['Olden days'].order = 11002;
    Game.Achievements.Sacrifice.order = 30015;
    Game.Achievements.Oblivion.order = 30016;
    Game.Achievements['From scratch'].order = 30017;
    Game.Achievements['Four-leaf cookie'].order = 10002;
    Game.Achievements['Seven horseshoes'].order = 10000;
    Game.Achievements['Third-party'].order = 30202;
};

export default overrides;
