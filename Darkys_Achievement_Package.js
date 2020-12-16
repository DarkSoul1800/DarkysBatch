{
    const DarkysAchievementPackage = {};

    const Achievement = (name, desc, icon) => {
        const answer = new Game.Achievement(name, desc, icon);

        answer.darky = 1;

        return answer;
    };

    const Win = what => {
        Game.Win(what);
        if (Game.Achievements[what] && Game.Achievements[what].darky === 1) {
            DarkySave.Achievements[what] = 1;
            DarkyAchievSaveConfig();
        }
    };

    const CheckUpgrades = upgrades => {
        try {
            upgrades.forEach(upgrade => {
                if (!Game.Has(upgrade)) {
                    throw Error;
                }
            });

            return true;
        } catch {
            return false;
        }
    };

    Game.crate = Game.crate
        .toString()
        .split("shadow';")
        .join(" shadow';\nif (me.darky == 1) classes+=' darky'; //Darky's achievement package injection")
        .split("mysterious?")
        .join(
            "mysterious? (me.darky == 1) ? 'background-image:url(\\'https://i.imgur.com/JKKvixm.png\\')'/*Darky's achievement package injection*/ : "
        );

    Game.crateTooltip = Game.crateTooltip
        .toString()
        .split("if (mysterious) icon=[0,7];")
        .join(
            "if (mysterious) icon=[0,7]; if (mysterious && me.darky == 1) icon = [0, 0, 'https://i.imgur.com/JKKvixm.png']"
        );

    const style = document.createElement("style");
    style.textContent = ".darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}";
    document.head.appendChild(style);
    // -------------------------------------------------------------------
    Game.Achievements["Grand design"].icon = [1, 0, "https://i.imgur.com/RWbOLsf.png"];
    Game.Achievements["Ecumenopolis"].icon = [5, 0, "https://i.imgur.com/RWbOLsf.png"];
    Game.RebuildUpgrades();
    // -------------------------------------------------------------------
    Game.Achievements["Polymath"].order = 6010;
    Game.Achievements["Renaissance baker"].order = 6011;
    Game.Achievements["The elder scrolls"].order = 6012;
    Game.Achievements["Sacrifice"].order = 30015;
    Game.Achievements["Oblivion"].order = 30016;
    Game.Achievements["From scratch"].order = 30017;
    Game.Achievements["Third-party"].order = 30202;
    Game.Achievements["Tabloid addiction"].order = 11003;
    Game.Achievements["Olden days"].order = 11002;
    Game.Achievements["Grand design"].order = 5011;
    Game.Achievements["Ecumenopolis"].order = 5015;
    Game.Achievements["Seven horseshoes"].order = 10000;
    Game.Achievements["Four-leaf cookie"].order = 10002;

    Game.Achievements["Squeak goes the mouse"].order = 1060;
    Game.Achievements["I'm too old for this"].order = 1110;
    Game.Achievements["Gorden garden"].order = 1210;
    Game.Achievements["A fine mine you got there"].order = 1310;
    Game.Achievements["Working 24/7"].order = 1410;
    Game.Achievements["My shipment arrives in the morning"].order = 1510;
    Game.Achievements["Turning cookies into gold since 2013"].order = 1610;
    Game.Achievements["A portal inside of a portal"].order = 1710;
    Game.Achievements["It all began on the 8th of August, 2013"].order = 1810;
    Game.Achievements["AntimatterCon"].order = 1910;
    Game.Achievements["Stop being a prissm"].order = 2010;
    Game.Achievements["Bank on it"].order = 1430;
    Game.Achievements["Temple pun"].order = 1460;
    Game.Achievements["It's magic, Joel!"].order = 1480;
    Game.Achievements["And yet you probably never got a blab"].order = 2110;
    Game.Achievements["Gouchnox"].order = 2210;
    Game.Achievements["Follow the javascript"].order = 2310;
    Game.Achievements["Don't call them fanverses, you fool"].order = 2410;

    Game.Achievements["Stop it, it clickles"].order = 1010;
    Game.Achievements["Keep up the click"].order = 1011;
    Game.Achievements["Clicking is the new booping"].order = 1012;
    Game.Achievements["The final click"].order = 1013;
    Game.Achievements["Sike, thats the wrong achievement"].order = 1014;
    Game.Achievements["How about we tap the cookie now"].order = 1015;
    Game.Achievements["Cookie Destroyer"].order = 1016;
    Game.Achievements["Give it a click"].order = 1017;
    Game.Achievements["Clicking Frenzy: Our Lord and Saviour"].order = 1018;
    Game.Achievements["Hand-made cookies are still the best"].order = 1019;
    Game.Achievements["My strange clicking addiction"].order = 1019;

    Game.Achievements["Owner of Buildings"].order = 5010;
    Game.Achievements["World-dominating company"].order = 5012;
    Game.Achievements["Creator of the Cookieverse"].order = 5013;
    Game.Achievements["Build until you can't build anymore"].order = 5014;
    Game.Achievements["Overlord"].order = 5016;
    Game.Achievements["That's enough, boss"].order = 5017;

    Game.Achievements["Earth-shattering association"].order = 6003;
    Game.Achievements["Maker of the Idleverse"].order = 6004;

    Game.Achievements["Sexcentennial and a half"].order = 7004;

    Game.Achievements["Heavenly"].order = 30010;
    Game.Achievements["Transcendent"].order = 30011;
    Game.Achievements["Higher energy state"].order = 30012;
    Game.Achievements["Omniverse"].order = 30013;
    Game.Achievements["The Ascendant"].order = 30014;

    Game.Achievements["Clicker"].order = 1020;
    Game.Achievements["Advanced Clicker"].order = 1021;
    Game.Achievements["Expert Clicker"].order = 1022;

    Game.Achievements["Secret fortune"].order = 32001;

    Game.Achievements["Getting fancy"].order = 21101;
    Game.Achievements["Emmanuel Macaron"].order = 21102;
    Game.Achievements["You wanna be popular?"].order = 21103;
    Game.Achievements["Rich butterfingers"].order = 21104;
    Game.Achievements["Pastries from the past"].order = 21105;
    Game.Achievements["Bake me, maybe?"].order = 21106;
    Game.Achievements["Burger Clicker"].order = 21107;
    Game.Achievements["Collecting these is like growing plants"].order = 21108;
    Game.Achievements["Spike the dragon"].order = 21109;

    Game.Achievements["Level 1 complete!"].order = 5017;
    Game.Achievements["Five Hive"].order = 5018;
    Game.Achievements["This took forever"].order = 5019;

    Game.Achievements["Pretty prestige"].order = 6005;
    Game.Achievements["Live and learn"].order = 6006;
    Game.Achievements["We will stay with you forever"].order = 6007;

    Game.Achievements["Purrfect Perfection"].order = 10001;
    Game.Achievements["It's sweet, sweet, sweet Synergy"].order = 6008;
    Game.Achievements["Out of Energy? Get Synergy!"].order = 6009;
    Game.Achievements["All you had to do was ask"].order = 11001;

    Game.Achievements["Mod-God complex"].order = 30201;
    Game.Achievements["Golden Jackpot"].order = 10001;
    // -------------------------------------------------------------------
    DarkysAchievementPackage.init = () => {
        let requirements = [""];
        Game.registerHook("check", [
            // Have X buildings
            () => {
                if (Game.Objects["Cursor"].amount >= 900) {
                    Win("Squeak goes the mouse");
                }
                if (Game.Objects["Grandma"].amount >= 650) {
                    Win("I'm too old for this");
                }
                if (Game.Objects["Farm"].amount >= 650) {
                    Win("Gorden garden");
                }
                if (Game.Objects["Mine"].amount >= 650) {
                    Win("A fine mine you got there");
                }
                if (Game.Objects["Factory"].amount >= 650) {
                    Win("Working 24/7");
                }
                if (Game.Objects["Bank"].amount >= 650) {
                    Win("Bank on it");
                }
                if (Game.Objects["Temple"].amount >= 650) {
                    Win("Temple pun");
                }
                if (Game.Objects["Wizard tower"].amount >= 650) {
                    Win("It's magic, Joel!");
                }
                if (Game.Objects["Shipment"].amount >= 650) {
                    Win("My shipment arrives in the morning");
                }
                if (Game.Objects["Alchemy lab"].amount >= 650) {
                    Win("Turning cookies into gold since 2013");
                }
                if (Game.Objects["Portal"].amount >= 650) {
                    Win("A portal inside of a portal");
                }
                if (Game.Objects["Time machine"].amount >= 650) {
                    Win("It all began on the 8th of August, 2013");
                }
                if (Game.Objects["Antimatter condenser"].amount >= 650) {
                    Win("AntimatterCon");
                }
                if (Game.Objects["Prism"].amount >= 650) {
                    Win("Stop being a prissm");
                }
                if (Game.Objects["Chancemaker"].amount >= 650) {
                    Win("And yet you probably never got a blab");
                }
                if (Game.Objects["Fractal engine"].amount >= 650) {
                    Win("Gouchnox");
                }
                if (Game.Objects["Javascript console"].amount >= 650) {
                    Win("Follow the javascript");
                }
                if (Game.Objects["Idleverse"].amount >= 650) {
                    Win("Don't call them fanverses, you fool");
                }
            },
            // Have X of every building
            () => {
                Game.ObjectsById.forEach(object => {
                    minAmount = Math.min(object.amount, 100000);
                });

                if (minAmount >= 650) {
                    Win("Sexcentennial and a half");
                }
            },
            // Buildings owned
            () => {
                if (Game.BuildingsOwned >= 3000) {
                    Win("Owner of Buildings");
                }
                if (Game.BuildingsOwned >= 5000) {
                    Win("World-dominating company");
                }
                if (Game.BuildingsOwned >= 6000) {
                    Win("Creator of the Cookieverse");
                }
                if (Game.BuildingsOwned >= 7000) {
                    Win("Build until you can't build anymore");
                }
                if (Game.BuildingsOwned >= 9000) {
                    Win("Overlord");
                }
                if (Game.BuildingsOwned >= 10000) {
                    Win("That's enough, boss");
                }
            },
            // Upgrades owned
            () => {
                if (Game.UpgradesOwned >= 500) {
                    Win("Earth-shattering association");
                }
                if (Game.UpgradesOwned >= 600) {
                    Win("Maker of the Idleverse");
                }
            },
            // Prestige upgrades owned
            () => {
                let prestigeUpgradesOwned = 0;
                Game.PrestigeUpgrades.forEach(upgrade => {
                    if (upgrade.bought) {
                        prestigeUpgradesOwned++;
                    }
                });

                requirements = ["Lucky digit", "Lucky number", "Lucky payout"];
                if (CheckUpgrades(requirements)) {
                    Win("Secret fortune");
                }
                if (prestigeUpgradesOwned >= 15) {
                    Win("Pretty prestige");
                }
                if (prestigeUpgradesOwned >= 30) {
                    Win("Live and learn");
                }
                if (prestigeUpgradesOwned >= 60) {
                    Win("We will stay with you forever");
                }
            },
            // Big cookie clicks
            () => {
                if (Game.cookieClicks >= 1000) {
                    Win("Clicker");
                }
                if (Game.cookieClicks >= 10000) {
                    Win("Advanced Clicker");
                }
                if (Game.cookieClicks >= 25000) {
                    Win("Expert Clicker");
                }
            },
            // Make X cookies from clicking
            () => {
                if (Game.handmadeCookies >= 1e29) {
                    Win("Stop it, it clickles");
                }
                if (Game.handmadeCookies >= 1e31) {
                    Win("Keep up the click");
                }
                if (Game.handmadeCookies >= 1e33) {
                    Win("Clicking is the new booping");
                }
                if (Game.handmadeCookies >= 1e35) {
                    Win("The final click");
                }
                if (Game.handmadeCookies >= 1e37) {
                    Win("Sike, thats the wrong achievement");
                }
                if (Game.handmadeCookies >= 1e39) {
                    Win("How about we tap the cookie now");
                }
                if (Game.handmadeCookies >= 1e41) {
                    Win("Cookie Destroyer");
                }
                if (Game.handmadeCookies >= 1e43) {
                    Win("Give it a click");
                }
                if (Game.handmadeCookies >= 1e46) {
                    Win("Clicking Frenzy: Our Lord and Saviour");
                }
                if (Game.handmadeCookies >= 1e47) {
                    Win("Hand-made cookies are still the best");
                }
                if (Game.handmadeCookies >= 1e49) {
                    Win("My strange clicking addiction");
                }
            },
            // Prestige amount
            () => {
                if (Game.prestige >= 100) {
                    Win("Heavenly");
                }
                if (Game.prestige >= 10000) {
                    Win("Transcendent");
                }
                if (Game.prestige >= 1000000) {
                    Win("Higher energy state");
                }
                if (Game.prestige >= 100000000) {
                    Win("Omniverse");
                }
                if (Game.prestige >= 10000000000) {
                    Win("The Ascendant");
                }
            },
            // Themed upgrades
            () => {
                requirements = [
                    "British tea biscuits",
                    "Chocolate british tea biscuits",
                    "Round british tea biscuits",
                    "Round chocolate british tea biscuits",
                    "Round british tea biscuits with heart motif",
                    "Round chocolate british tea biscuits with heart motif",
                ];
                if (CheckUpgrades(requirements)) {
                    Win("Getting fancy");
                }
                requirements = [
                    "Caramoas",
                    "Sagalongs",
                    "Shortfoils",
                    "Win mints",
                    "Fig gluttons",
                    "Loreols",
                    "Jaffa cakes",
                    "Grease's cups",
                    "Digits",
                    "Bastenaken cookies",
                    "Festivity loops",
                    "Havabreaks",
                    "Zilla wafers",
                    "Dim Dams",
                    "Pokey",
                ];
                if (CheckUpgrades(requirements)) {
                    Win("You wanna be popular?");
                }
                requirements = [
                    "Rose macarons",
                    "Lemon macarons",
                    "Chocolate macarons",
                    "Pistachio macarons",
                    "Hazelnut macarons",
                    "Violet macarons",
                    "Caramel macarons",
                    "Licorice macarons",
                    "Earl Grey macarons",
                ];
                if (CheckUpgrades(requirements)) {
                    Win("Emmanuel Macaron");
                }
                requirements = ["Butter horseshoes", "Butter pucks", "Butter knots", "Butter slabs", "Butter swirls"];
                if (CheckUpgrades(requirements)) {
                    Win("Rich butterfingers");
                }
                requirements = [
                    "Cookie dough",
                    "Burnt cookie",
                    "A chocolate chip cookie but with the chips picked off for some reason",
                    "Flavor text cookie",
                    "High-definition cookie",
                    "Crackers",
                ];
                if (CheckUpgrades(requirements)) {
                    Win("Bake me, maybe?");
                }
                requirements = [
                    "Toast",
                    "Peanut butter & jelly",
                    "Wookies",
                    "Cheeseburger",
                    "One lone chocolate chip",
                    "Pizza",
                    "Candy",
                ];
                if (CheckUpgrades(requirements)) {
                    Win("Burger Clicker");
                }
                requirements = [
                    "Profiteroles",
                    "Jelly donut",
                    "Glazed donut",
                    "Chocolate cake",
                    "Strawberry cake",
                    "Apple pie",
                    "Lemon meringue pie",
                    "Butter croissant",
                ];
                if (CheckUpgrades(requirements)) {
                    Win("Pastries from the past");
                }
                requirements = [
                    "Kitten helpers",
                    "Kitten workers",
                    "Kitten engineers",
                    "Kitten overseers",
                    "Kitten managers",
                    "Kitten accountants",
                    "Kitten specialists",
                    "Kitten experts",
                    "Kitten consultants",
                    "Kitten assistants to the regional manager",
                    "Kitten marketeers",
                    "Kitten analysts",
                    "Kitten executives",
                    "Fortune #103",
                    "Kitten angels",
                ];
                if (CheckUpgrades(requirements)) {
                    Win("Purrfect Perfection");
                }
                requirements = [
                    "Future almanacs",
                    "Seismic magic",
                    "Quantum electronics",
                    "Contracts from beyond",
                    "Paganism",
                    "Arcane knowledge",
                    "Fossil fuels",
                    "Primordial ores",
                    "Infernal crops",
                    "Relativistic parsec-skipping",
                    "Extra physics funding",
                    "Light magic",
                    "Gemmed talismans",
                    "Recursive mirrors",
                    "Script grannies",
                    "Perforated mille-feuille cosmos",
                ];
                if (CheckUpgrades(requirements)) {
                    Win("It's sweet, sweet, sweet Synergy");
                }
                requirements = [
                    "Rain prayer",
                    "Asteroid mining",
                    "Temporal overclocking",
                    "Printing presses",
                    "God particle",
                    "Magical botany",
                    "Shipyards",
                    "Gold fund",
                    "Abysmal glimmer",
                    "Primeval glow",
                    "Chemical proficiency",
                    "Mystical energies",
                    "Charm quarks",
                    "Mice clicking mice",
                    "Tombola computing",
                    "Infraverses and superverses",
                ];
                if (CheckUpgrades(requirements)) {
                    Win("Out of Energy? Get Synergy!");
                }
                requirements = ["Dragon scale", "Dragon claw", "Dragon fang", "Dragon teddy bear"];
                if (CheckUpgrades(requirements)) {
                    Win("Spike the dragon");
                }
                requirements = [
                    "Elderwort biscuits",
                    "Bakeberry cookies",
                    "Wheat slims",
                    "Duketater cookies",
                    "Green yeast digestives",
                    "Fern tea",
                    "Ichor syrup",
                ];
                if (CheckUpgrades(requirements)) {
                    Win("Collecting these is like growing plants");
                }
            },
            // Buildings' level
            () => {
                const buildingsLevels = Game.ObjectsById.map(object => object.level);

                if (buildingsLevels.filter(level => level >= 1).length === Game.ObjectsById.length) {
                    Win("Level 1 complete!");
                }
                if (buildingsLevels.filter(level => level >= 5).length === Game.ObjectsById.length) {
                    Win("Five Hive");
                }
                if (buildingsLevels.filter(level => level >= 10).length === Game.ObjectsById.length) {
                    Win("This took forever");
                }
            },
            // Shadow achievements
            () => {
                if (Game.bakeryName === "Darky") {
                    Win("Mod-God complex");
                }
            },
            () => {
                if (Game.goldenClicks >= 77777) {
                    Win("Golden Jackpot");
                }
            },
        ]);
        Game.registerHook("create", [
            // Have X buildings
            () => {
                Achievement("Squeak goes the mouse", "Have <b>900</b> cursors.", [0, 19]);
                Achievement("I'm too old for this", "Have <b>650</b> grandmas.", [1, 21]);
                Achievement("Gorden garden", "Have <b>650</b> farms.", [2, 21]);
                Achievement("A fine mine you got there", "Have <b>650</b> mines.", [3, 21]);
                Achievement("Working 24/7", "Have <b>650</b> factories.", [4, 21]);
                Achievement("Bank on it", "Have <b>650</b> banks.", [15, 21]);
                Achievement("Temple pun", "Have <b>650</b> temples.", [16, 21]);
                Achievement("It's magic, Joel!", "Have <b>650</b> wizard towers.", [17, 21]);
                Achievement("My shipment arrives in the morning", "Have <b>650</b> shipments.", [5, 21]);
                Achievement("Turning cookies into gold since 2013", "Have <b>650</b> alchemy labs.", [6, 21]);
                Achievement("A portal inside of a portal", "Have <b>650</b> portals.", [7, 21]);
                Achievement("It all began on the 8th of August, 2013", "Have <b>650</b> time machines.", [8, 21]);
                Achievement("AntimatterCon", "Have <b>650</b> antimatter condensers.", [13, 21]);
                Achievement("Stop being a prissm", "Have <b>650</b> prisms.", [14, 21]);
                Achievement("And yet you probably never got a blab", "Have <b>650</b> chancemakers.", [19, 21]);
                Achievement("Gouchnox", "Have <b>650</b> fractal engines.<q>69</q>", [20, 21]);
                Achievement("Follow the javascript", "Have <b>650</b> javascript consoles.", [32, 21]);
                Achievement("Don't call them fanverses, you fool", "Have <b>650</b> idleverses.", [33, 21]);
            },
            // Have X of every building
            () => {
                Achievement(
                    "Sexcentennial and a half",
                    "Have at least <b>650 of everything</b>.<q>Yes I just did that.</q>",
                    [1, 3, "https://i.imgur.com/Qi5DPKy.png"]
                );
            },
            // Buildings owned
            () => {
                Achievement("Owner of Buildings", "Own <b>3000</b> buildings.", [
                    0,
                    0,
                    "https://i.imgur.com/GGrHHrA.png",
                ]);
                Achievement("World-dominating company", "Own <b>5000</b> buildings.", [
                    2,
                    0,
                    "https://i.imgur.com/GGrHHrA.png",
                ]);
                Achievement("Creator of the Cookieverse", "Own <b>6000</b> buildings.", [
                    3,
                    0,
                    "https://i.imgur.com/GGrHHrA.png",
                ]);
                Achievement("Build until you can't build anymore", "Own <b>7000</b> buildings.", [
                    4,
                    0,
                    "https://i.imgur.com/GGrHHrA.png",
                ]);
                Achievement("Overlord", "Own <b>9000</b> buildings.", [4, 4, "https://i.imgur.com/AWmeHiO.png"]);
                Achievement("That's enough, boss", "Own <b>10000</b> buildings.", [
                    6,
                    0,
                    "https://i.imgur.com/S5BnOGU.png",
                ]);
            },
            // Upgrades owned
            () => {
                Achievement("Earth-shattering association", "Purchase <b>500</b> upgrades.", [
                    2,
                    1,
                    "https://i.imgur.com/S5BnOGU.png",
                ]);
                Achievement("Maker of the Idleverse", "Purchase <b>600</b> upgrades.", [
                    3,
                    1,
                    "https://i.imgur.com/AWmeHiO.png",
                ]);
            },
            // Prestige upgrades owned
            () => {
                Achievement(
                    "Secret fortune",
                    "Purchase the <b>3 secret prestige upgrades</b>.<q>You got more than one ace up your sleeve, huh?",
                    [24, 15]
                );
                Achievement("Pretty prestige", "Purchase <b>15</b> prestige upgrades.", [
                    19,
                    48,
                    "https://i.imgur.com/3jNJJNw.png",
                ]);
                Achievement("Live and learn", "Purchase <b>30</b> prestige upgrades.<q>And never forget.", [
                    19,
                    47,
                    "https://i.imgur.com/3jNJJNw.png",
                ]);
                Achievement(
                    "We will stay with you forever",
                    "Purchase <b>60</b> prestige upgrades.<q>Don't reset us.</q>",
                    [19, 46, "https://i.imgur.com/3jNJJNw.png"]
                );
            },
            // Big cookie clicks
            () => {
                Achievement("Clicker", "Click on the big cookie <b>1,000</b> times.", [11, 22]);
                Achievement("Advanced Clicker", "Click on the big cookie <b>10,000</b> times.", [11, 23]);
                Achievement("Expert Clicker", "Click on the big cookie <b>25,000</b> times.", [11, 24]);
            },
            // Make X cookies from clicking
            () => {
                Achievement("Stop it, it clickles", "Make <b>100 octillion</b> cookies from clicking.", [11, 21]);
                Achievement("Keep up the click", "Make <b>10 nonillion</b> cookies from clicking.", [
                    0,
                    69,
                    "https://i.imgur.com/3jNJJNw.png",
                ]);
                Achievement("Clicking is the new booping", "Make <b>1 decillion</b> cookies from clicking.", [
                    0,
                    34,
                    "https://i.imgur.com/3jNJJNw.png",
                ]);
                Achievement(
                    "The final click",
                    "Make <b>100 decillion</b> cookies from clicking.<q>But its never over.</q>",
                    [0, 46, "https://i.imgur.com/3jNJJNw.png"]
                );
                Achievement(
                    "Sike, thats the wrong achievement",
                    "Make <b>10 undecillion</b> cookies from clicking.<q>The last achievement wasn't the final one.</q>",
                    [0, 5, "https://i.imgur.com/nv69nsg.png"]
                );
                Achievement(
                    "How about we tap the cookie now",
                    "Make <b>1 duodecillion</b> cookies from clicking.<q>I heard the mobile version is out now.</q>",
                    [1, 5, "https://i.imgur.com/nv69nsg.png"]
                );
                Achievement(
                    "Cookie Destroyer",
                    "Make <b>100 duodecillion</b> cookies from clicking.<q>Agent Johnson was here</q>",
                    [2, 5, "https://i.imgur.com/nv69nsg.png"]
                );
                Achievement("Give it a click", "Make <b>10 tredecillion</b> cookies from clicking.", [
                    3,
                    5,
                    "https://i.imgur.com/nv69nsg.png",
                ]);
                Achievement(
                    "Clicking Frenzy: Our Lord and Saviour",
                    "Make <b>1 quattuordecillion</b> cookies from clicking.",
                    [4, 5, "https://i.imgur.com/nv69nsg.png"]
                );
                Achievement(
                    "Hand-made cookies are still the best",
                    "Make <b>100 quattuordecillion</b> cookies from clicking.",
                    [5, 5, "https://i.imgur.com/nv69nsg.png"]
                );
                Achievement("My strange clicking addiction", "Make <b>10 quindecillion</b> cookies from clicking.", [
                    6,
                    5,
                    "https://i.imgur.com/nv69nsg.png",
                ]);
            },
            // Prestige amount
            () => {
                Achievement("Heavenly", "Reach prestige level <b>100</b>.", [19, 7]);
                Achievement("Transcendent", "Reach prestige level <b>10,000</b>.", [18, 7]);
                Achievement("Higher energy state", "Reach prestige level <b>1 million</b>.", [17, 7]);
                Achievement("Omniverse", "Reach prestige level <b>100 million</b>.", [16, 7]);
                Achievement("The Ascendant", "Reach prestige level <b>10 billion</b>.", [15, 7]);
            },
            // Themed upgrades
            () => {
                Achievement("Getting fancy", "Purchase <b>all fancy biscuits</b>.", [21, 8]);
                Achievement("You wanna be popular?", "Purchase <b>all popular biscuits</b>.", [20, 9]);
                Achievement("Emmanuel Macaron", "Purchase <b>all macarons</b>.", [20, 8]);
                Achievement("Rich butterfingers", "Purchase <b>all rich butter cookies</b>.", [21, 9]);
                Achievement("Bake me, maybe?", "Purchase <b>all maybe cookies</b>.", [25, 29]);
                Achievement(
                    "Burger Clicker",
                    "Purchase <b>all not cookies</b>.<q>Shoutout to the old Idle Game Maker!</q>",
                    [26, 29]
                );
                Achievement("Pastries from the past", "Purchase <b>all pastries</b>.", [27, 29]);
                Achievement(
                    "Purrfect Perfection",
                    "Purrchase <b>every kitten upgrade</b>.<q>Are you sick of these puns yet?</q>",
                    [26, 7]
                );
                Achievement(
                    "It's sweet, sweet, sweet Synergy",
                    "Purchase <b>all Synergy I upgrades</b>.<q>It's ours for the baking.</q>",
                    [9, 20]
                );
                Achievement("Out of Energy? Get Synergy!", "Purchase <b>all Synergy II upgrades</b>.", [9, 29]);
                Achievement(
                    "Spike the dragon",
                    "Purchase <b>all dragon upgrades</b>.<q>Keep an eye on your gems.</q>",
                    [30, 12]
                );
                Achievement(
                    "Collecting these is like growing plants",
                    "Purchase <b>all plant upgrades</b>.<q>It takes a looooong time.</q>",
                    [24, 25]
                );
            },
            // Buildings' level
            () => {
                Achievement("Level 1 complete!", "Reach level <b>1</b> of every building.", [
                    0,
                    2,
                    "https://i.imgur.com/GGrHHrA.png",
                ]);
                Achievement("Five Hive", "Reach level <b>5</b> of every building.", [
                    1,
                    2,
                    "https://i.imgur.com/GGrHHrA.png",
                ]);
                Achievement("This took forever", "Reach level <b>10</b> of every building.", [
                    2,
                    2,
                    "https://i.imgur.com/Qi5DPKy.png",
                ]);
            },
            // Shadow achievements
            () => {
                Achievement("Mod-God complex", "Name yourself <b>Darky</b>.<q>Ducky.</q>", [2, 12]);
                Game.last.pool = "shadow";
                Achievement("Golden Jackpot", "Click <b>77,777 golden cookies</b>.", [
                    0,
                    3,
                    "https://i.imgur.com/GGrHHrA.png",
                ]);
                Game.last.pool = "shadow";
            },
            // Etc
            () => {
                Achievement("All you had to do was ask", "Click this custom achievement's slot.<q>Here you go.</q>", [
                    2,
                    4,
                    "https://i.imgur.com/sl3FeNY.png",
                ]);
                Game.last.clickFunction = () => {
                    if (!Game.HasAchiev("All you had to do was ask")) {
                        PlaySound("snd/tick.mp3");
                        Win("All you had to do was ask");
                    }
                };
            },
        ]);
    };
    // -------------------------------------------------------------------
    DarkysAchievementPackage.save = () => {
        const DarkySave = {};

        Game.AchievementsById.forEach(achievement => {
            if (achievement.darky && achievement.won) {
                const formattedName = achievement.name
                    .toLowerCase()
                    .replace(/\s+(.)/g, (match, group) => group.toUpperCase());

                Object.assign(DarkySave, {
                    [formattedName]: true,
                });
            }
        });

        return JSON.stringify(DarkySave);
    };
    DarkysAchievementPackage.load = saveString => {
        const save = JSON.parse(saveString);

        const entries = Object.keys(save);
        const names = Object.keys(save).map(achievementName => {
            const sentenceCase = achievementName.replace(/([A-Z])/g, (group, match) => ` ${match.toLowerCase()}`);
            const normalName = sentenceCase.charAt(0).toUpperCase() + sentenceCase.slice(1);

            return normalName;
        });

        entries.forEach((achievement, index) => {
            const achievementName = names[index];
            Game.Achievements[achievementName].won = 1;
        });
    };
    const oldReset = Game.HardReset;
    Game.HardReset = new Proxy(oldReset, {
        apply: (func, thisArg, args) => {
            if (args[0] === 2) {
                DarkyAchievSaveDefault();
            }
            return func.apply(thisArg, args);
        },
    });

    // const DarkyAchievMigrateOldSave = () => {
    //     for (const i in Game.Achievements) {
    //         const me = Game.Achievements[i];
    //         if (me.darky === 1) {
    //             if (DarkySave[me.name]) {
    //                 DarkySave.Achievements[me.name] = DarkySave[me.name];
    //                 if (DarkySave[me.name]) {
    //                     Win(me.name);
    //                 }
    //                 delete DarkySave[me.name];
    //             }
    //         }
    //     }
    // };
    // -------------------------------------------------------------------
    Game.registerMod("Darkys Achievement Package", DarkysAchievementPackage);
    Game.Notify(
        "Darky's Achievement Package 1.7",
        " <b>68</b> new Achievements have been added, enjoy and thank you for using my mod!",
        [17, 26, "https://i.imgur.com/3jNJJNw.png"]
    );
    PlaySound("https://freesound.org/data/previews/203/203121_777645-lq.mp3");
}
