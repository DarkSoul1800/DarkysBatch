{
    const DarkysAchievementPackage = {};

    DarkysAchievementPackage.init = () => {
        const buildingsLevels = Game.ObjectsById.map(object => object.level);
        let minAmount = 0;
        let prestigeUpgradesOwned = 0;

        Game.ObjectsById.forEach(object => {
            minAmount = Math.min(object.amount, 100000);
        });
        Game.PrestigeUpgrades.forEach(upgrade => {
            if (upgrade.bought) {
                prestigeUpgradesOwned++;
            }
        });

        // Overrides
        const style = document.createElement("style");
        style.textContent =
            ".darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}";
        document.head.appendChild(style);
        Game.crate = new Function(
            `return ${Game.crate
                .toString()
                .split("shadow';")
                .join(" shadow';\nif (me.darky === 1) classes+=' darky'; //Darky's achievement package injection")
                .split("mysterious?")
                .join(
                    "mysterious? (me.darky === 1) ? 'background-image:url(\\'https://i.imgur.com/JKKvixm.png\\')'/*Darky's achievement package injection*/ : "
                )}`
        )();
        Game.crateTooltip = new Function(
            `return ${Game.crateTooltip
                .toString()
                .split("if (mysterious) icon=[0,7];")
                .join(
                    "if (mysterious) icon=[0,7]; if (mysterious && me.darky === 1) icon = [1, 4, 'https://i.imgur.com/AWmeHiO.png']"
                )}`
        )();
        {
            Game.Achievements["Grand design"].icon = [1, 0, "https://i.imgur.com/AWmeHiO.png"];
            Game.Achievements["Ecumenopolis"].icon = [5, 0, "https://i.imgur.com/AWmeHiO.png"];
            Game.RebuildUpgrades();
            Game.Achievements["Grand design"].order = 5011;
            Game.Achievements["Ecumenopolis"].order = 5015;
            Game.Achievements["Polymath"].order = 6010;
            Game.Achievements["Renaissance baker"].order = 6011;
            Game.Achievements["The elder scrolls"].order = 6012;
            Game.Achievements["Tabloid addiction"].order = 11003;
            Game.Achievements["Olden days"].order = 11002;
            Game.Achievements["Sacrifice"].order = 30015;
            Game.Achievements["Oblivion"].order = 30016;
            Game.Achievements["From scratch"].order = 30017;
            Game.Achievements["Four-leaf cookie"].order = 10002;
            Game.Achievements["Seven horseshoes"].order = 10000;
            Game.Achievements["Third-party"].order = 30202;
        }

        Game.registerHook("check", [
            // Have X buildings
            () => {
                if (Game.Objects["Cursor"].amount >= 900) {
                    Game.Win("Squeak goes the mouse");
                }
            },
            () => {
                if (Game.Objects["Grandma"].amount >= 650) {
                    Game.Win("I'm too old for this");
                }
            },
            () => {
                if (Game.Objects["Farm"].amount >= 650) {
                    Game.Win("Gorden garden");
                }
            },
            () => {
                if (Game.Objects["Mine"].amount >= 650) {
                    Game.Win("A fine mine you got there");
                }
            },
            () => {
                if (Game.Objects["Factory"].amount >= 650) {
                    Game.Win("Working 24/7");
                }
            },
            () => {
                if (Game.Objects["Bank"].amount >= 650) {
                    Game.Win("Bank on it");
                }
            },
            () => {
                if (Game.Objects["Temple"].amount >= 650) {
                    Game.Win("Temple pun");
                }
            },
            () => {
                if (Game.Objects["Wizard tower"].amount >= 650) {
                    Game.Win("It's magic, Joel!");
                }
            },
            () => {
                if (Game.Objects["Shipment"].amount >= 650) {
                    Game.Win("My shipment arrives in the morning");
                }
            },
            () => {
                if (Game.Objects["Alchemy lab"].amount >= 650) {
                    Game.Win("Turning cookies into gold since 2013");
                }
            },
            () => {
                if (Game.Objects["Portal"].amount >= 650) {
                    Game.Win("A portal inside of a portal");
                }
            },
            () => {
                if (Game.Objects["Time machine"].amount >= 650) {
                    Game.Win("It all began on the 8th of August, 2013");
                }
            },
            () => {
                if (Game.Objects["Antimatter condenser"].amount >= 650) {
                    Game.Win("AntimatterCon");
                }
            },
            () => {
                if (Game.Objects["Prism"].amount >= 650) {
                    Game.Win("Stop being a prissm");
                }
            },
            () => {
                if (Game.Objects["Chancemaker"].amount >= 650) {
                    Game.Win("And yet you probably never got a blab");
                }
            },
            () => {
                if (Game.Objects["Fractal engine"].amount >= 650) {
                    Game.Win("Gouchnox");
                }
            },
            () => {
                if (Game.Objects["Javascript console"].amount >= 650) {
                    Game.Win("Follow the javascript");
                }
            },
            () => {
                if (Game.Objects["Idleverse"].amount >= 650) {
                    Game.Win("Don't call them fanverses, you fool");
                }
            },
            // Have X of every building
            () => {
                if (minAmount >= 650) {
                    Game.Win("Sexcentennial and a half");
                }
            },
            // Buildings owned
            () => {
                if (Game.BuildingsOwned >= 3000) {
                    Game.Win("Owner of Buildings");
                }
            },
            () => {
                if (Game.BuildingsOwned >= 5000) {
                    Game.Win("World-dominating company");
                }
            },
            () => {
                if (Game.BuildingsOwned >= 6000) {
                    Game.Win("Creator of the Cookieverse");
                }
            },
            () => {
                if (Game.BuildingsOwned >= 7000) {
                    Game.Win("Build until you can't build anymore");
                }
            },
            () => {
                if (Game.BuildingsOwned >= 9000) {
                    Game.Win("Overlord");
                }
            },
            () => {
                if (Game.BuildingsOwned >= 10000) {
                    Game.Win("That's enough, boss");
                }
            },
            // Upgrades owned
            () => {
                if (Game.UpgradesOwned >= 500) {
                    Game.Win("Earth-shattering association");
                }
            },
            () => {
                if (Game.UpgradesOwned >= 600) {
                    Game.Win("Maker of the Idleverse");
                }
            },
            // Prestige upgrades owned
            () => {
                if (Game.Has("Lucky digit") && Game.Has("Lucky number") && Game.Has("Lucky payout")) {
                    Game.Win("Secret fortune");
                }
            },
            () => {
                if (prestigeUpgradesOwned >= 15) {
                    Game.Win("Pretty prestige");
                }
            },
            () => {
                if (prestigeUpgradesOwned >= 30) {
                    Game.Win("Live and learn");
                }
            },
            () => {
                if (prestigeUpgradesOwned >= 60) {
                    Game.Win("We will stay with you forever");
                }
            },
            // Big cookie clicks
            () => {
                if (Game.cookieClicks >= 1000) {
                    Game.Win("Clicker");
                }
            },
            () => {
                if (Game.cookieClicks >= 10000) {
                    Game.Win("Advanced Clicker");
                }
            },
            () => {
                if (Game.cookieClicks >= 25000) {
                    Game.Win("Expert Clicker");
                }
            },
            // Make X cookies from clicking
            () => {
                if (Game.handmadeCookies >= 1e29) {
                    Game.Win("Stop it, it clickles");
                }
            },
            () => {
                if (Game.handmadeCookies >= 1e31) {
                    Game.Win("Keep up the click");
                }
            },
            () => {
                if (Game.handmadeCookies >= 1e33) {
                    Game.Win("Clicking is the new booping");
                }
            },
            () => {
                if (Game.handmadeCookies >= 1e35) {
                    Game.Win("The final click");
                }
            },
            () => {
                if (Game.handmadeCookies >= 1e37) {
                    Game.Win("Sike, thats the wrong achievement");
                }
            },
            () => {
                if (Game.handmadeCookies >= 1e39) {
                    Game.Win("How about we tap the cookie now");
                }
            },
            () => {
                if (Game.handmadeCookies >= 1e41) {
                    Game.Win("Cookie Destroyer");
                }
            },
            () => {
                if (Game.handmadeCookies >= 1e43) {
                    Game.Win("Give it a click");
                }
            },
            () => {
                if (Game.handmadeCookies >= 1e45) {
                    Game.Win("Clicking Frenzy: Our Lord and Saviour");
                }
            },
            () => {
                if (Game.handmadeCookies >= 1e47) {
                    Game.Win("Hand-made cookies are still the best");
                }
            },
            () => {
                if (Game.handmadeCookies >= 1e49) {
                    Game.Win("My strange clicking addiction");
                }
            },
            // Prestige amount
            () => {
                if (Game.prestige >= 100) {
                    Game.Win("Heavenly");
                }
            },
            () => {
                if (Game.prestige >= 10000) {
                    Game.Win("Transcendent");
                }
            },
            () => {
                if (Game.prestige >= 1000000) {
                    Game.Win("Higher energy state");
                }
            },
            () => {
                if (Game.prestige >= 1e8) {
                    Game.Win("Omniverse");
                }
            },
            () => {
                if (Game.prestige >= 1e10) {
                    Game.Win("The Ascendant");
                }
            },
            // Themed upgrades
            () => {
                if (
                    Game.Has("British tea biscuits") &&
                    Game.Has("Chocolate british tea biscuits") &&
                    Game.Has("Round british tea biscuits") &&
                    Game.Has("Round chocolate british tea biscuits") &&
                    Game.Has("Round british tea biscuits with heart motif") &&
                    Game.Has("Round chocolate british tea biscuits with heart motif")
                ) {
                    Game.Win("Getting fancy");
                }
            },
            () => {
                if (
                    Game.Has("Caramoas") &&
                    Game.Has("Sagalongs") &&
                    Game.Has("Shortfoils") &&
                    Game.Has("Win mints") &&
                    Game.Has("Fig gluttons") &&
                    Game.Has("Loreols") &&
                    Game.Has("Jaffa cakes") &&
                    Game.Has("Grease's cups") &&
                    Game.Has("Digits") &&
                    Game.Has("Lombardia cookies") &&
                    Game.Has("Bastenaken cookies") &&
                    Game.Has("Festivity loops") &&
                    Game.Has("Havabreaks") &&
                    Game.Has("Zilla wafers") &&
                    Game.Has("Dim Dams") &&
                    Game.Has("Pokey")
                ) {
                    Game.Win("You wanna be popular?");
                }
            },
            () => {
                if (
                    Game.Has("Rose macarons") &&
                    Game.Has("Lemon macarons") &&
                    Game.Has("Chocolate macarons") &&
                    Game.Has("Pistachio macarons") &&
                    Game.Has("Hazelnut macarons") &&
                    Game.Has("Violet macarons") &&
                    Game.Has("Caramel macarons") &&
                    Game.Has("Licorice macarons") &&
                    Game.Has("Earl Grey macarons")
                ) {
                    Game.Win("Emmanuel Macaron");
                }
            },
            () => {
                if (
                    Game.Has("Butter horseshoes") &&
                    Game.Has("Butter pucks") &&
                    Game.Has("Butter knots") &&
                    Game.Has("Butter slabs") &&
                    Game.Has("Butter swirls")
                ) {
                    Game.Win("Rich butterfingers");
                }
            },
            () => {
                if (
                    Game.Has("Cookie dough") &&
                    Game.Has("Burnt cookie") &&
                    Game.Has("A chocolate chip cookie but with the chips picked off for some reason") &&
                    Game.Has("Flavor text cookie") &&
                    Game.Has("High-definition cookie") &&
                    Game.Has("Crackers")
                ) {
                    Game.Win("Bake me, maybe?");
                }
            },
            () => {
                if (
                    Game.Has("Toast") &&
                    Game.Has("Peanut butter & jelly") &&
                    Game.Has("Wookies") &&
                    Game.Has("Cheeseburger") &&
                    Game.Has("One lone chocolate chip") &&
                    Game.Has("Pizza") &&
                    Game.Has("Candy")
                ) {
                    Game.Win("Burger Clicker");
                }
            },
            () => {
                if (
                    Game.Has("Profiteroles") &&
                    Game.Has("Jelly donut") &&
                    Game.Has("Glazed donut") &&
                    Game.Has("Chocolate cake") &&
                    Game.Has("Strawberry cake") &&
                    Game.Has("Apple pie") &&
                    Game.Has("Lemon meringue pie") &&
                    Game.Has("Butter croissant")
                ) {
                    Game.Win("Pastries from the past");
                }
            },
            () => {
                if (
                    Game.Has("Kitten helpers") &&
                    Game.Has("Kitten workers") &&
                    Game.Has("Kitten engineers") &&
                    Game.Has("Kitten overseers") &&
                    Game.Has("Kitten managers") &&
                    Game.Has("Kitten accountants") &&
                    Game.Has("Kitten specialists") &&
                    Game.Has("Kitten experts") &&
                    Game.Has("Kitten consultants") &&
                    Game.Has("Kitten assistants to the regional manager") &&
                    Game.Has("Kitten marketeers") &&
                    Game.Has("Kitten analysts") &&
                    Game.Has("Kitten executives") &&
                    Game.Has("Kitten angels") &&
                    Game.Has("Fortune #103")
                ) {
                    Game.Win("Purrfect Perfection");
                }
            },
            () => {
                if (
                    Game.Has("Future almanacs") &&
                    Game.Has("Seismic magic") &&
                    Game.Has("Quantum electronics") &&
                    Game.Has("Contracts from beyond") &&
                    Game.Has("Paganism") &&
                    Game.Has("Arcane knowledge") &&
                    Game.Has("Fossil fuels") &&
                    Game.Has("Primordial ores") &&
                    Game.Has("Infernal crops") &&
                    Game.Has("Relativistic parsec-skipping") &&
                    Game.Has("Extra physics funding") &&
                    Game.Has("Light magic") &&
                    Game.Has("Gemmed talismans") &&
                    Game.Has("Recursive mirrors") &&
                    Game.Has("Script grannies") &&
                    Game.Has("Perforated mille-feuille cosmos")
                ) {
                    Game.Win("It's sweet, sweet, sweet Synergy");
                }
            },
            () => {
                if (
                    Game.Has("Rain prayer") &&
                    Game.Has("Asteroid mining") &&
                    Game.Has("Temporal overclocking") &&
                    Game.Has("Printing presses") &&
                    Game.Has("God particle") &&
                    Game.Has("Magical botany") &&
                    Game.Has("Shipyards") &&
                    Game.Has("Gold fund") &&
                    Game.Has("Abysmal glimmer") &&
                    Game.Has("Primeval glow") &&
                    Game.Has("Chemical proficiency") &&
                    Game.Has("Mystical energies") &&
                    Game.Has("Charm quarks") &&
                    Game.Has("Mice clicking mice") &&
                    Game.Has("Tombola computing") &&
                    Game.Has("Infraverses and superverses")
                ) {
                    Game.Win("Out of Energy? Get Synergy!");
                }
            },
            () => {
                if (
                    Game.Has("Dragon scale") &&
                    Game.Has("Dragon claw") &&
                    Game.Has("Dragon fang") &&
                    Game.Has("Dragon teddy bear")
                ) {
                    Game.Win("Spike the dragon");
                }
            },
            () => {
                if (
                    Game.Has("Elderwort biscuits") &&
                    Game.Has("Bakeberry cookies") &&
                    Game.Has("Duketater cookies") &&
                    Game.Has("Green yeast digestives") &&
                    Game.Has("Fern tea") &&
                    Game.Has("Ichor syrup") &&
                    Game.Has("Wheat slims")
                ) {
                    Game.Win("Collecting these is like growing plants");
                }
            },
            // Buildings' level
            () => {
                if (buildingsLevels.filter(level => level >= 1).length === Game.ObjectsById.length) {
                    Game.Win("Level 1 complete!");
                }
            },
            () => {
                if (buildingsLevels.filter(level => level >= 5).length === Game.ObjectsById.length) {
                    Game.Win("Five Hive");
                }
            },
            () => {
                if (buildingsLevels.filter(level => level >= 10).length === Game.ObjectsById.length) {
                    Game.Win("This took forever");
                }
            },
            // Shadow achievements
            () => {
                if (Game.bakeryName === "Darky") {
                    Game.Win("Mod-God complex");
                }
            },
            () => {
                if (Game.goldenClicks >= 77777) {
                    Game.Win("Golden Jackpot");
                }
            },
        ]);
        // Custom content creation
        {
            // Have X buildings
            {
                DarkysAchievementPackage.Achievement("Squeak goes the mouse", "Have <b>900</b> cursors.", [0, 19]);
                Game.last.order = 1060;
                DarkysAchievementPackage.Achievement("I'm too old for this", "Have <b>650</b> grandmas.", [1, 21]);
                Game.last.order = 1110;
                DarkysAchievementPackage.Achievement("Gorden garden", "Have <b>650</b> farms.", [2, 21]);
                Game.last.order = 1210;
                DarkysAchievementPackage.Achievement("A fine mine you got there", "Have <b>650</b> mines.", [3, 21]);
                Game.last.order = 1310;
                DarkysAchievementPackage.Achievement("Working 24/7", "Have <b>650</b> factories.", [4, 21]);
                Game.last.order = 1410;
                DarkysAchievementPackage.Achievement("Bank on it", "Have <b>650</b> banks.", [15, 21]);
                Game.last.order = 1430;
                DarkysAchievementPackage.Achievement("Temple pun", "Have <b>650</b> temples.", [16, 21]);
                Game.last.order = 1460;
                DarkysAchievementPackage.Achievement("It's magic, Joel!", "Have <b>650</b> wizard towers.", [17, 21]);
                Game.last.order = 1480;
                DarkysAchievementPackage.Achievement(
                    "My shipment arrives in the morning",
                    "Have <b>650</b> shipments.",
                    [5, 21]
                );
                Game.last.order = 1510;
                DarkysAchievementPackage.Achievement(
                    "Turning cookies into gold since 2013",
                    "Have <b>650</b> alchemy labs.",
                    [6, 21]
                );
                Game.last.order = 1610;
                DarkysAchievementPackage.Achievement("A portal inside of a portal", "Have <b>650</b> portals.", [
                    7,
                    21,
                ]);
                Game.last.order = 1710;
                DarkysAchievementPackage.Achievement(
                    "It all began on the 8th of August, 2013",
                    "Have <b>650</b> time machines.",
                    [8, 21]
                );
                Game.last.order = 1810;
                DarkysAchievementPackage.Achievement("AntimatterCon", "Have <b>650</b> antimatter condensers.", [
                    13,
                    21,
                ]);
                Game.last.order = 1910;
                DarkysAchievementPackage.Achievement("Stop being a prissm", "Have <b>650</b> prisms.", [14, 21]);
                Game.last.order = 2010;
                DarkysAchievementPackage.Achievement(
                    "And yet you probably never got a blab",
                    "Have <b>650</b> chancemakers.",
                    [19, 21]
                );
                Game.last.order = 2110;
                DarkysAchievementPackage.Achievement("Gouchnox", "Have <b>650</b> fractal engines.<q>69</q>", [20, 21]);
                Game.last.order = 2210;
                DarkysAchievementPackage.Achievement("Follow the javascript", "Have <b>650</b> javascript consoles.", [
                    32,
                    21,
                ]);
                Game.last.order = 2310;
                DarkysAchievementPackage.Achievement(
                    "Don't call them fanverses, you fool",
                    "Have <b>650</b> idleverses.",
                    [33, 21]
                );
                Game.last.order = 2410;
            }
            // Have X of every building
            {
                DarkysAchievementPackage.Achievement(
                    "Sexcentennial and a half",
                    "Have at least <b>650 of everything</b>.<q>Yes I just did that.</q>",
                    [1, 3, "https://i.imgur.com/AWmeHiO.png"]
                );
                Game.last.order = 7004;
            }
            // Buildings owned
            {
                DarkysAchievementPackage.Achievement("Owner of Buildings", "Own <b>3000</b> buildings.", [
                    0,
                    0,
                    "https://i.imgur.com/AWmeHiO.png",
                ]);
                Game.last.order = 5010;
                DarkysAchievementPackage.Achievement("World-dominating company", "Own <b>5000</b> buildings.", [
                    2,
                    0,
                    "https://i.imgur.com/AWmeHiO.png",
                ]);
                Game.last.order = 5012;
                DarkysAchievementPackage.Achievement("Creator of the Cookieverse", "Own <b>6000</b> buildings.", [
                    3,
                    0,
                    "https://i.imgur.com/AWmeHiO.png",
                ]);
                Game.last.order = 5013;
                DarkysAchievementPackage.Achievement(
                    "Build until you can't build anymore",
                    "Own <b>7000</b> buildings.",
                    [4, 0, "https://i.imgur.com/AWmeHiO.png"]
                );
                Game.last.order = 5014;
                DarkysAchievementPackage.Achievement("Overlord", "Own <b>9000</b> buildings.", [
                    4,
                    4,
                    "https://i.imgur.com/AWmeHiO.png",
                ]);
                Game.last.order = 5016;
                DarkysAchievementPackage.Achievement("That's enough, boss", "Own <b>10000</b> buildings.", [
                    6,
                    0,
                    "https://i.imgur.com/AWmeHiO.png",
                ]);
                Game.last.order = 5017;
            }
            // Upgrades owned
            {
                DarkysAchievementPackage.Achievement("Earth-shattering association", "Purchase <b>500</b> upgrades.", [
                    2,
                    1,
                    "https://i.imgur.com/AWmeHiO.png",
                ]);
                Game.last.order = 6003;
                DarkysAchievementPackage.Achievement("Maker of the Idleverse", "Purchase <b>600</b> upgrades.", [
                    3,
                    1,
                    "https://i.imgur.com/AWmeHiO.png",
                ]);
                Game.last.order = 6004;
            }
            // Prestige upgrades owned
            {
                DarkysAchievementPackage.Achievement(
                    "Secret fortune",
                    "Purchase the <b>3 secret prestige upgrades</b>.<q>You got more than one ace up your sleeve, huh?",
                    [24, 15]
                );
                Game.last.order = 32001;
                DarkysAchievementPackage.Achievement("Pretty prestige", "Purchase <b>15</b> prestige upgrades.", [
                    19,
                    48,
                    "https://i.imgur.com/3jNJJNw.png",
                ]);
                Game.last.order = 6005;
                DarkysAchievementPackage.Achievement(
                    "Live and learn",
                    "Purchase <b>30</b> prestige upgrades.<q>And never forget.",
                    [19, 47, "https://i.imgur.com/3jNJJNw.png"]
                );
                Game.last.order = 6006;
                DarkysAchievementPackage.Achievement(
                    "We will stay with you forever",
                    "Purchase <b>60</b> prestige upgrades.<q>Don't reset us.</q>",
                    [19, 46, "https://i.imgur.com/3jNJJNw.png"]
                );
                Game.last.order = 6007;
            }
            // Big cookie clicks
            {
                DarkysAchievementPackage.Achievement("Clicker", "Click on the big cookie <b>1,000</b> times.", [
                    11,
                    22,
                ]);
                Game.last.order = 1020;
                DarkysAchievementPackage.Achievement(
                    "Advanced Clicker",
                    "Click on the big cookie <b>10,000</b> times.",
                    [11, 23]
                );
                Game.last.order = 1021;
                DarkysAchievementPackage.Achievement("Expert Clicker", "Click on the big cookie <b>25,000</b> times.", [
                    11,
                    24,
                ]);
                Game.last.order = 1022;
            }
            // Make X cookies from clicking
            {
                DarkysAchievementPackage.Achievement(
                    "Stop it, it clickles",
                    "Make <b>100 octillion</b> cookies from clicking.",
                    [11, 21]
                );
                Game.last.order = 1010;
                DarkysAchievementPackage.Achievement(
                    "Keep up the click",
                    "Make <b>10 nonillion</b> cookies from clicking.",
                    [0, 69, "https://i.imgur.com/3jNJJNw.png"]
                );
                Game.last.order = 1011;
                DarkysAchievementPackage.Achievement(
                    "Clicking is the new booping",
                    "Make <b>1 decillion</b> cookies from clicking.",
                    [0, 34, "https://i.imgur.com/3jNJJNw.png"]
                );
                Game.last.order = 1012;
                DarkysAchievementPackage.Achievement(
                    "The final click",
                    "Make <b>100 decillion</b> cookies from clicking.<q>But its never over.</q>",
                    [0, 46, "https://i.imgur.com/3jNJJNw.png"]
                );
                Game.last.order = 1013;
                DarkysAchievementPackage.Achievement(
                    "Sike, thats the wrong achievement",
                    "Make <b>10 undecillion</b> cookies from clicking.<q>The last achievement wasn't the final one.</q>",
                    [0, 5, "https://i.imgur.com/AWmeHiO.png"]
                );
                Game.last.order = 1014;
                DarkysAchievementPackage.Achievement(
                    "How about we tap the cookie now",
                    "Make <b>1 duodecillion</b> cookies from clicking.<q>I heard the mobile version is out now.</q>",
                    [1, 5, "https://i.imgur.com/AWmeHiO.png"]
                );
                Game.last.order = 1015;
                DarkysAchievementPackage.Achievement(
                    "Cookie Destroyer",
                    "Make <b>100 duodecillion</b> cookies from clicking.<q>Agent Johnson was here</q>",
                    [2, 5, "https://i.imgur.com/AWmeHiO.png"]
                );
                Game.last.order = 1016;
                DarkysAchievementPackage.Achievement(
                    "Give it a click",
                    "Make <b>10 tredecillion</b> cookies from clicking.",
                    [3, 5, "https://i.imgur.com/AWmeHiO.png"]
                );
                Game.last.order = 1017;
                DarkysAchievementPackage.Achievement(
                    "Clicking Frenzy: Our Lord and Saviour",
                    "Make <b>1 quattuordecillion</b> cookies from clicking.",
                    [4, 5, "https://i.imgur.com/AWmeHiO.png"]
                );
                Game.last.order = 1018;
                DarkysAchievementPackage.Achievement(
                    "Hand-made cookies are still the best",
                    "Make <b>100 quattuordecillion</b> cookies from clicking.",
                    [5, 5, "https://i.imgur.com/AWmeHiO.png"]
                );
                Game.last.order = 1019;
                DarkysAchievementPackage.Achievement(
                    "My strange clicking addiction",
                    "Make <b>10 quindecillion</b> cookies from clicking.",
                    [6, 5, "https://i.imgur.com/AWmeHiO.png"]
                );
                Game.last.order = 1019;
            }
            // Prestige amount
            {
                DarkysAchievementPackage.Achievement("Heavenly", "Reach prestige level <b>100</b>.", [19, 7]);
                Game.last.order = 30010;
                DarkysAchievementPackage.Achievement("Transcendent", "Reach prestige level <b>10,000</b>.", [18, 7]);
                Game.last.order = 30011;
                DarkysAchievementPackage.Achievement("Higher energy state", "Reach prestige level <b>1 million</b>.", [
                    17,
                    7,
                ]);
                Game.last.order = 30012;
                DarkysAchievementPackage.Achievement("Omniverse", "Reach prestige level <b>100 million</b>.", [16, 7]);
                Game.last.order = 30013;
                DarkysAchievementPackage.Achievement("The Ascendant", "Reach prestige level <b>10 billion</b>.", [
                    15,
                    7,
                ]);
                Game.last.order = 30014;
            }
            // Themed upgrades
            {
                DarkysAchievementPackage.Achievement("Getting fancy", "Purchase <b>all fancy biscuits</b>.", [21, 8]);
                Game.last.order = 21101;
                DarkysAchievementPackage.Achievement("You wanna be popular?", "Purchase <b>all popular biscuits</b>.", [
                    20,
                    9,
                ]);
                Game.last.order = 21103;
                DarkysAchievementPackage.Achievement("Emmanuel Macaron", "Purchase <b>all macarons</b>.", [20, 8]);
                Game.last.order = 21102;
                DarkysAchievementPackage.Achievement("Rich butterfingers", "Purchase <b>all rich butter cookies</b>.", [
                    21,
                    9,
                ]);
                Game.last.order = 21104;
                DarkysAchievementPackage.Achievement("Bake me, maybe?", "Purchase <b>all maybe cookies</b>.", [25, 29]);
                Game.last.order = 21106;
                DarkysAchievementPackage.Achievement(
                    "Burger Clicker",
                    "Purchase <b>all not cookies</b>.<q>Shoutout to the old Idle Game Maker!</q>",
                    [26, 29]
                );
                Game.last.order = 21107;
                DarkysAchievementPackage.Achievement("Pastries from the past", "Purchase <b>all pastries</b>.", [
                    27,
                    29,
                ]);
                Game.last.order = 21105;
                DarkysAchievementPackage.Achievement(
                    "Purrfect Perfection",
                    "Purrchase <b>every kitten upgrade</b>.<q>Are you sick of these puns yet?</q>",
                    [26, 7]
                );
                Game.last.order = 10001;
                DarkysAchievementPackage.Achievement(
                    "It's sweet, sweet, sweet Synergy",
                    "Purchase <b>all Synergy I upgrades</b>.<q>It's ours for the baking.</q>",
                    [9, 20]
                );
                Game.last.order = 6008;
                DarkysAchievementPackage.Achievement(
                    "Out of Energy? Get Synergy!",
                    "Purchase <b>all Synergy II upgrades</b>.",
                    [9, 29]
                );
                Game.last.order = 6009;
                DarkysAchievementPackage.Achievement(
                    "Spike the dragon",
                    "Purchase <b>all dragon upgrades</b>.<q>Keep an eye on your gems.</q>",
                    [30, 12]
                );
                Game.last.order = 21109;
                DarkysAchievementPackage.Achievement(
                    "Collecting these is like growing plants",
                    "Purchase <b>all plant upgrades</b>.<q>It takes a looooong time.</q>",
                    [24, 25]
                );
                Game.last.order = 21108;
            }
            // Buildings' level
            {
                DarkysAchievementPackage.Achievement("Level 1 complete!", "Reach level <b>1</b> of every building.", [
                    0,
                    2,
                    "https://i.imgur.com/AWmeHiO.png",
                ]);
                Game.last.order = 5017;
                DarkysAchievementPackage.Achievement("Five Hive", "Reach level <b>5</b> of every building.", [
                    1,
                    2,
                    "https://i.imgur.com/AWmeHiO.png",
                ]);
                Game.last.order = 5018;
                DarkysAchievementPackage.Achievement("This took forever", "Reach level <b>10</b> of every building.", [
                    2,
                    2,
                    "https://i.imgur.com/AWmeHiO.png",
                ]);
                Game.last.order = 5019;
            }
            // Shadow achievements
            {
                DarkysAchievementPackage.Achievement("Mod-God complex", "Name yourself <b>Darky</b>.<q>Ducky.</q>", [
                    2,
                    12,
                ]);
                Game.last.order = 30201;
                Game.last.pool = "shadow";
                DarkysAchievementPackage.Achievement("Golden Jackpot", "Click <b>77,777 golden cookies</b>.", [
                    0,
                    3,
                    "https://i.imgur.com/AWmeHiO.png",
                ]);
                Game.last.order = 10001;
                Game.last.pool = "shadow";
            }
            // Etc
            {
                DarkysAchievementPackage.Achievement(
                    "All you had to do was ask",
                    "Click this custom achievement's slot.<q>Here you go.</q>",
                    [2, 4, "https://i.imgur.com/AWmeHiO.png"]
                );
                Game.last.order = 11001;
                Game.last.clickFunction = () => {
                    if (!Game.HasAchiev("All you had to do was ask")) {
                        PlaySound("snd/tick.mp3");
                        Game.Win("All you had to do was ask");
                    }
                };
            }
        }
    };
    DarkysAchievementPackage.save = () => {
        const DarkySave = {
            unlockedAchievs: [],
        };

        Game.AchievementsById.forEach(achievement => {
            if (achievement.darky && achievement.won) {
                DarkySave.unlockedAchievs.push(achievement.name);
            }
        });

        return JSON.stringify(DarkySave);
    };
    DarkysAchievementPackage.load = saveString => {
        const save = JSON.parse(saveString);

        save.unlockedAchievs.forEach(achievementName => {
            Game.Achievements[achievementName].won = 1;
        });
    };
    DarkysAchievementPackage.Achievement = (name, desc, icon) => {
        const answer = new Game.Achievement(name, desc, icon);
        answer.darky = 1;

        return answer;
    };
    // -------------------------------------------------------------------
    Game.registerMod("Darkys Achievement Package", DarkysAchievementPackage);
    Game.Notify(
        "Darky's Achievement Package 1.7",
        " <b>68</b> new Achievements have been added, enjoy and thank you for using my mod!",
        [17, 26, "https://i.imgur.com/3jNJJNw.png"]
    );
    PlaySound("https://freesound.org/data/previews/203/203121_777645-lq.mp3");
}
