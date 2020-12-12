{
    const Upgrade = (name, desc, price, icon, buyFunction) => {
        const answer = new Game.Upgrade(name, desc, price, icon, buyFunction);

        answer.darky = 1;

        return answer;
    };

    const TieredUpgrade = (name, desc, building, tier) => {
        const answer = new Game.TieredUpgrade(name, desc, building, tier);

        answer.darky = 1;

        return answer;
    };

    const Unlock = what => {
        Game.Unlock(what);
        if (typeof Game.Upgrades[what] !== 'undefined' && Game.Upgrades[what].darky === 1) {
            DarkySave.Upgrades[what].unlocked = 1;
            DarkyUpgradesSaveConfig();
        }
    };

    const oldBuy = Game.Upgrade.prototype.buy;
    Game.Upgrade.prototype.buy = new Proxy(oldBuy, {
        apply: (func, thisArg, args) => {
            const answer = func.apply(thisArg, args);
            if (answer) {
                DarkySave.Upgrades[thisArg.name].bought = 1;
            }
            return answer;
        },
    });

    Game.crate = Game.crate
        .toString()
        .split("classes+=' upgrade';")
        .join("classes+=' upgrade';\nif (me.darky == 1) classes+=' darky';//Darky's upgrade package injection");

    if (typeof Darky === 'undefined') {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.textContent =
            '.darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}';
        document.head.appendChild(style);
    }

    if (typeof Darky === 'undefined') {
        Darky = {};
    }

    // -------------------------------------------------------------------

    if (!Game.customCrate) Game.customCrate = [];
    Game.customCrate = Game.customCrate.concat([
        // ~ ~ ~ ORIGINAL ~ ~ ~

        new Upgrade(
            'Building up',
            'Everything is more efficient per building owned.<q>I can already feel the power building up.</q>',
            1000000,
            [2, 6]
        ), // No idea how to make this one work at all, help would be appreciated! The idea was that Everything is 0.005% more efficient per building.

        // ~ ~ ~ TIERED ~ ~ ~

        // new Upgrade('Nonillion fingers','The mouse and cursors gain <b>+50000000</b> cookies for each non-cursor object owned.<q>That\'s quite the finger power.</q>',10000000000000000000000000,[13,19]),Game.MakeTiered(Game.last,13,0),
        // new Upgrade('Loyalystic mouse','Clicking gains <b>+1% of your CpS</b>.<q>A true, true mouse.</q>',50000000000000000000000000000,[11,31]),Game.MakeTiered(Game.last,13,11),
        new TieredUpgrade(
            'Granny talk',
            'Grandmas are <b>twice</b> as efficient.<q>Only a few have survived.</q>',
            'Grandma',
            13
        ),
        // new TieredUpgrade('Bing bang bingo','Grandmas are <b>twice</b> as efficient.<q>You would think this is some kind of upgraded and hot, new bingo game but you\'d be wrong my friend. This is a SOAP for GRANNIES!</q>','Grandma',13),
        new TieredUpgrade(
            'Chocolate chip seeds',
            'Farms are <b>twice</b> as efficient.<q>Makes sense, right?</q>',
            'Farm',
            13
        ),
        // new TieredUpgrade('Bulldoughzer','Farms are <b>twice</b> as efficient.<q>A modified tractor pretty much, doing its job.</q>','Farm',13),
        new TieredUpgrade(
            'Omegadrill',
            "Mines are <b>twice</b> as efficient.<q>It's coming in late but we go it.</q>",
            'Mine',
            13
        ),
        // new TieredUpgrade('Miner\'s delight','Mines are <b>twice</b> as efficient.<q>Who would\'ve thought that a child\'s weird mixture of random things could turn out to be an excellent energy drink for miners and miners only. Too bad we can\'t share the recipe with anyone else.</q>','Mine',13),
        new TieredUpgrade(
            'Pumping out new workers',
            'Factories are <b>twice</b> as efficient.<q>Yes, we no longer need the birds and the bees, we can just create life itself!</q>',
            'Factory',
            13
        ),
        // new TieredUpgrade('Rainbow factory','Factories are <b>twice</b> as efficient.<q>Dreams come true, little one.</q>','Factory',13),
        new TieredUpgrade(
            'Baking the dough',
            'Banks are <b>twice</b> as efficient.<q>Instead of making the bucks.</q>',
            'Bank',
            13
        ),
        // new TieredUpgrade('Cookie credit cards','Banks are <b>twice</b> as efficient.<q>They say doing this is a bad idea but come on, we are converting everything into cookies now so why not?</q>','Bank',13),
        new TieredUpgrade(
            'Cookie cults',
            'Temples are <b>twice</b> as efficient.<q>Every sunday they meet to bake in secret.</q>',
            'Temple',
            13
        ),
        // new TieredUpgrade('Baking bible','Temples are <b>twice</b> as efficient.<q>Ancient stories about old ladies baking for the poor and getting murdered for doing so. Or maybe they just died of old age.</q>','Temple',13),
        new TieredUpgrade(
            'Trix™️',
            'Wizard towers are <b>twice</b> as efficient.<q>Brand cookies which taste pretty bad but not taken off the market for some reason. These darn wizards and their silly magic, keeping their brand cookies alive with their magic!</q>',
            'Wizard tower',
            13
        ),
        // new TieredUpgrade('Fixing misspellings in spells','Wizard towers are <b>twice</b> as efficient.<q>How are spells supposed to work if said spells have misspellings in them?</q>','Wizard tower',13),
        new TieredUpgrade(
            'Hyperspeed',
            'Shipments are <b>twice</b> as efficient.<q>HYPE, HYPE, HYPE, HYPE!</q>',
            'Shipment',
            13
        ),
        // new TieredUpgrade('10 seconds flat','Shipments are <b>twice</b> as efficient.<q>Zap Zap, to the end of the universe and back.</q>','Shipment',13),
        new TieredUpgrade(
            'The way we make golden cookies',
            'Alchemy labs are <b>twice</b> as efficient.<q>[REDACTED]</q>',
            'Alchemy lab',
            13
        ),
        // new TieredUpgrade('Eggheads','Alchemy labs are <b>twice</b> as efficient.<q>Crack them open, use them for baking.</q>','Alchemy lab',13),
        new TieredUpgrade(
            'Portal to nowhere',
            "Portals are <b>twice</b> as efficient.<q>A quiet place to store the cookies. I don't know why you would want to do that though.</q>",
            'Portal',
            13
        ),
        // new TieredUpgrade('Port Al','Portals are <b>twice</b> as efficient.<q>Al Port, claims he discovered the portals and named them after himself. Staff is no longer allowed to bring in homeless people.</q>','Portal',13),
        new TieredUpgrade(
            'Year of the weekly months without the days',
            'Time machines are <b>twice</b> as efficient.<q>Counting the hourly seconds by minutes.</q>',
            'Time machine',
            13
        ),
        // new TieredUpgrade('Decaying decades','Time machines are <b>twice</b> as efficient.<q>Each decade, we start to rot more. We stink, get dirty. Even cookies aren\'t save from this fate.</q>','Time machine',13),
        new TieredUpgrade(
            'Bake matter',
            'Antimatter condensers are <b>twice</b> as efficient.<q>Just a bunch of tiny balls during scientific baking.</q>',
            'Antimatter condenser',
            13
        ),
        // new TieredUpgrade('NERDS: Cookies','Antimatter condensers are <b>twice</b> as efficient.<q>Not the greatest idea we had.</q>','Antimatter condenser',13),
        new TieredUpgrade('Shiny!!', "Prisms are <b>twice</b> as efficient.<q>Let's baking!</q>", 'Prism', 13),
        // new TieredUpgrade('Colorful arrangement','Prisms are <b>twice</b> as efficient.<q>Also known as: Rainbow.</q>','Prism',13),
        new TieredUpgrade(
            'Casino fever',
            'Chancemakers are <b>twice</b> as efficient.<q>A dangerous place for your wallet has become heaven on earth for it.</q>',
            'Chancemaker',
            13
        ),
        // new TieredUpgrade('Odd-ifiers','Chancemakers are <b>twice</b> as efficient.<q>No longer shall you ask "What are the odds?" with this!</q>','Chancemaker',13),
        new TieredUpgrade(
            'Big brain time',
            'Fractal engines are <b>twice</b> as efficient.<q>Think thonk.</q>',
            'Fractal engine',
            13
        ),
        // new TieredUpgrade('Nora','Fractal engines are <b>twice</b> as efficient.<q>Fractals are her specialty.</q>','Fractal engine',13),
        new TieredUpgrade(
            "Darky can't actually code",
            'Javascript consoles are <b>twice</b> as efficient.<q>He just happened to be smart enough to make both an achievement and upgrade mod for Cookie Clicker.</q>',
            'Javascript console',
            13
        ),
        // new TieredUpgrade('new Game.TieredUpgrade','Javascript consoles are <b>twice</b> as efficient.<q>I am so tiered of this.</q>','Javascript console',13),
    ]);

    // -------------------------------------------------------------------

    // Game.Upgrades['Nonillion fingers'].order=113
    // Game.Upgrades['Loyalystic mouse'].order=163
    Game.Upgrades['Granny talk'].order = 201;
    // Game.Upgrades['Bing bang bingo'].order=202
    Game.Upgrades['Chocolate chip seeds'].order = 301;
    // Game.Upgrades['Bulldoughzer'].order=302
    Game.Upgrades.Omegadrill.order = 401;
    // Game.Upgrades['Miner\'s delight'].order=402
    Game.Upgrades['Pumping out new workers'].order = 501;
    // Game.Upgrades['Rainbow factory'].order=502
    Game.Upgrades['Baking the dough'].order = 526;
    // Game.Upgrades['Cookie credit cards'].order=527
    Game.Upgrades['Cookie cults'].order = 551;
    // Game.Upgrades['Baking bible'].order=552
    Game.Upgrades['Trix™️'].order = 576;
    // Game.Upgrades['Fixing misspellings in spells'].order=577
    Game.Upgrades.Hyperspeed.order = 601;
    // Game.Upgrades['10 seconds flat'].order=602
    Game.Upgrades['The way we make golden cookies'].order = 701;
    // Game.Upgrades['Eggheads'].order=702
    Game.Upgrades['Portal to nowhere'].order = 801;
    // Game.Upgrades['Port Al'].order=802
    Game.Upgrades['Year of the weekly months without the days'].order = 901;
    // Game.Upgrades['Decaying decades'].order=902
    Game.Upgrades['Bake matter'].order = 1001;
    // Game.Upgrades['NERDS: Cookies'].order=1002
    Game.Upgrades['Shiny!!'].order = 1101;
    // Game.Upgrades['Colorful arrangement'].order=1102
    Game.Upgrades['Casino fever'].order = 1201;
    // Game.Upgrades['Odd-ifiers'].order=1202
    Game.Upgrades['Big brain time'].order = 1301;
    // Game.Upgrades['Nora'].order=1302
    Game.Upgrades["Darky can't actually code"].order = 1401;
    // Game.Upgrades['new Game.TieredUpgrade'].order=1402

    // -------------------------------------------------------------------

    Game.customChecks = Game.customChecks.concat([
        // () => {if (Game.Objects['Cursor'].amount+Game.Objects['Grandma'].amount+Game.Objects['Farm'].amount+Game.Objects['Factory'].amount+Game.Objects['Mine'].amount+Game.Objects['Bank'].amount+Game.Objects['Temple'].amount+Game.Objects['Wizard tower'].amount+Game.Objects['Shipment'].amount+Game.Objects['Alchemy lab'].amount+Game.Objects['Portal'].amount+Game.Objects['Time machine'].amount+Game.Objects['Antimatter condenser'].amount+Game.Objects['Prism'].amount+Game.Objects['Chancemaker'].amount+Game.Objects['Fractal engine'].amount+Game.Objects['Javascript console'].amount>=100) Unlock('Building up')},

        // () => {if (Game.Objects['Cursor'].amount>=450) Unlock('Nonillion fingers')},
        // () => {if (Game.handmadeCookies>=1000000000000000000000000000) Unlock('Loyalystic mouse')},
        () => {
            if (Game.Objects.Grandma.amount >= 500) Unlock('Granny talk');
        },
        // () => {if (Game.Objects['Grandma'].amount>=500) Unlock('Bing bang bingo')},
        () => {
            if (Game.Objects.Farm.amount >= 500) Unlock('Chocolate chip seeds');
        },
        // () => {if (Game.Objects['Farm'].amount>=500) Unlock('Bulldoughzer')},
        () => {
            if (Game.Objects.Mine.amount >= 500) Unlock('Omegadrill');
        },
        // () => {if (Game.Objects['Mine'].amount>=500) Unlock('Miner\'s delight')},
        () => {
            if (Game.Objects.Factory.amount >= 500) Unlock('Pumping out new workers');
        },
        // () => {if (Game.Objects['Factory'].amount>=500) Unlock('Rainbow factory')},
        () => {
            if (Game.Objects.Bank.amount >= 500) Unlock('Baking the dough');
        },
        // () => {if (Game.Objects['Bank'].amount>=500) Unlock('Cookie credit cards')},
        () => {
            if (Game.Objects.Temple.amount >= 500) Unlock('Cookie cults');
        },
        // () => {if (Game.Objects['Temple'].amount>=500) Unlock('Baking bible')},
        () => {
            if (Game.Objects['Wizard tower'].amount >= 500) Unlock('Trix™️');
        },
        // () => {if (Game.Objects['Wizard tower'].amount>=500) Unlock('Fixing misspellings in spells')},
        () => {
            if (Game.Objects.Shipment.amount >= 500) Unlock('Hyperspeed');
        },
        // () => {if (Game.Objects['Shipment'].amount>=500) Unlock('10 seconds flat')},
        () => {
            if (Game.Objects['Alchemy lab'].amount >= 500) Unlock('The way we make golden cookies');
        },
        // () => {if (Game.Objects['Alchemy lab'].amount>=500) Unlock('Eggheads')},
        () => {
            if (Game.Objects.Portal.amount >= 500) Unlock('Portal to nowhere');
        },
        // () => {if (Game.Objects['Portal'].amount>=500) Unlock('Port Al')},
        () => {
            if (Game.Objects['Time machine'].amount >= 500) Unlock('Year of the weekly months without the days');
        },
        // () => {if (Game.Objects['Time machine'].amount>=500) Unlock('Decaying decades')},
        () => {
            if (Game.Objects['Antimatter condenser'].amount >= 500) Unlock('Bake matter');
        },
        // () => {if (Game.Objects['Antimatter condenser'].amount>=500) Unlock('NERDS: Cookies')},
        () => {
            if (Game.Objects.Prism.amount >= 500) Unlock('Shiny!!');
        },
        // () => {if (Game.Objects['Prism'].amount>=500) Unlock('Colorful arrangement')},
        () => {
            if (Game.Objects.Chancemaker.amount >= 500) Unlock('Casino fever');
        },
        // () => {if (Game.Objects['Chancemaker'].amount>=500) Unlock('Odd-ifiers')},
        () => {
            if (Game.Objects['Fractal engine'].amount >= 500) Unlock('Big brain time');
        },
        // () => {if (Game.Objects['Fractal engine'].amount>=500) Unlock('Nora')},
        () => {
            if (Game.Objects['Javascript console'].amount >= 500) Unlock("Darky can't actually code");
        },
        // () => {if (Game.Objects['Javascript console'].amount>=500) Unlock('new Game.TieredUpgrade')},
    ]);

    // -------------------------------------------------------------------

    // eval("Game.mouseCps =" + Game.mouseCps.toString().split("Octillion fingers')) add+=	5000000;").join("Octillion fingers')) add+=	5000000;\nif (Game.Has('Nonillion fingers')) add+=	50000000; //Darky's upgrade package injection").split("Plasmarble mouse')) add+=Game.cookiesPs*0.01;").join("Plasmarble mouse')) add+=Game.cookiesPs*0.01;\nif (Game.Has('Loyalystic mouse')) add+=Game.cookiesPs*0.01; //Darky's upgrade package injection"));
    // eval("Game.Objects[\"Cursor\"].cps =" + Game.Objects["Cursor"].cps.toString().split("Octillion fingers')) add+=	5000000;").join("Octillion fingers')) add+=	5000000;\nif (Game.Has('Nonillion fingers')) add+=	50000000; //Darky's upgrade package injection"));

    // -------------------------------------------------------------------

    DarkySavePrefix = 'DarkyPackage';

    DarkyUpgradesSaveConfig = () => {
        localStorage.setItem(DarkySavePrefix, JSON.stringify(DarkySave));
    };

    DarkyUpgradesSaveDefault = () => {
        if (typeof DarkySave === 'undefined') {
            DarkySave = {};
        }

        DarkySave.Upgrades = {};
        for (const i in Game.Upgrades) {
            const me = Game.Upgrades[i];
            if (me.darky === 1) {
                DarkySave.Upgrades[me.name] = {};
                DarkySave.Upgrades[me.name].unlocked = 0;
                DarkySave.Upgrades[me.name].bought = 0;
            }
        }
        DarkyUpgradesSaveConfig();
    };

    DarkyUpgradesLoadConfig = () => {
        if (localStorage.getItem(DarkySavePrefix) != null) {
            DarkySave = JSON.parse(localStorage.getItem(DarkySavePrefix));
            if (typeof DarkySave.Upgrades === 'undefined') {
                DarkySave.Upgrades = {};
            }
            for (const i in Game.Upgrades) {
                const me = Game.Upgrades[i];
                if (me.darky === 1) {
                    if (typeof DarkySave.Upgrades[me.name] === 'undefined') {
                        DarkySave.Upgrades[me.name] = {};
                        DarkySave.Upgrades[me.name].unlocked = 0;
                        DarkySave.Upgrades[me.name].bought = 0;
                        DarkyUpgradesSaveConfig();
                    } else {
                        if (DarkySave.Upgrades[me.name].unlocked === 1) {
                            Unlock(me.name);
                        }
                        if (DarkySave.Upgrades[me.name].bought === 1) {
                            Game.Upgrades[me.name].bought = 1;
                        }
                    }
                }
            }
        } else {
            DarkyUpgradesSaveDefault();
        }
    };

    const oldReset = Game.HardReset;
    Game.HardReset = new Proxy(oldReset, {
        apply: (func, thisArg, args) => {
            if (args[0] === 2) {
                DarkyUpgradesSaveDefault();
            }
            return func.apply(thisArg, args);
        },
    });

    DarkyUpgradesLoadConfig();
}

// -------------------------------------------------------------------

{
    /*
	let Game = {
		crate: () => { },
		crateTooltip: () => { },
		Achievement: class { construction() { Game.Achievements.push({ "order": 0 }) } },
		hasAchievement: () => { },
		Win: class { },
		last: {},
		Achievements: []
	} */

    const Achievement = (name, desc, icon) => {
        const answer = new Game.Achievement(name, desc, icon);

        answer.darky = 1;

        return answer;
    };

    const Win = what => {
        Game.Win(what);
        if (typeof Game.Achievements[what] !== 'undefined' && Game.Achievements[what].darky === 1) {
            DarkySave.Achievements[what] = 1;
            DarkyAchievSaveConfig();
        }
    };

    Game.crate = Game.crate
        .toString()
        .split("shadow';")
        .join(" shadow';\nif (me.darky == 1) classes+=' darky'; //Darky's achievement package injection")
        .split('mysterious?')
        .join(
            "mysterious? (me.darky == 1) ? 'background-image:url(\\'https://i.imgur.com/JKKvixm.png\\')'/*Darky's achievement package injection*/ : "
        );

    Game.crateTooltip = Game.crateTooltip
        .toString()
        .split('if (mysterious) icon=[0,7];')
        .join(
            "if (mysterious) icon=[0,7]; if (mysterious && me.darky == 1) icon = [0, 0, 'https://i.imgur.com/JKKvixm.png']"
        );

    if (typeof Darky === 'undefined') {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.textContent =
            '.darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}';
        document.head.appendChild(style);
    }

    // -------------------------------------------------------------------

    if (!Game.customCrate) Game.customCrate = [];
    Game.customCrate = Game.customCrate.concat([
        // ~ ~ ~ X OF BUILDINGS ~ ~ ~

        new Achievement('Squeak goes the mouse', 'Have <b>800</b> cursors.', [0, 18], 1),
        new Achievement("I'm too old for this", 'Have <b>650</b> grandmas.', [1, 21], 1),
        new Achievement('Gorden garden', 'Have <b>600</b> farms.', [2, 31], 1),
        new Achievement('A fine mine you got there', 'Have <b>600</b> mines.', [3, 31], 1),
        new Achievement('Working 24/7', 'Have <b>600</b> factories.', [4, 31], 1),
        new Achievement('Bank on it', 'Have <b>600</b> banks.', [15, 31], 1),
        new Achievement('Temple pun', 'Have <b>600</b> temples.', [16, 31], 1),
        new Achievement("It's magic, Joel!", 'Have <b>600</b> wizard towers.', [17, 31], 1),
        new Achievement('My shipment arrives in the morning', 'Have <b>600</b> shipments.', [5, 31], 1),
        new Achievement('Turning cookies into gold since 2013', 'Have <b>600</b> alchemy labs.', [6, 31], 1),
        new Achievement('A portal inside of a portal', 'Have <b>600</b> portals.', [7, 31], 1),
        new Achievement('It all began on the 8th of August, 2013', 'Have <b>600</b> time machines.', [8, 31], 1),
        new Achievement('AntimatterCon', 'Have <b>600</b> antimatter condensers.', [13, 31], 1),
        new Achievement('Stop being a prissm', 'Have <b>600</b> prisms.', [14, 31], 1),
        new Achievement('And yet you probably never got a blab', 'Have <b>600</b> chancemakers.', [19, 31], 1),
        new Achievement('Gouchnox', 'Have <b>600</b> fractal engines.<q>69</q>', [20, 31], 1),
        new Achievement('Follow the javascript', 'Have <b>600</b> javascript consoles.', [32, 31], 1),

        // ~ ~ ~ COOKIES FROM CLICKING ~ ~ ~

        new Achievement('Stop it, it clickles', 'Make <b>100 octillion</b> cookies from clicking.', [11, 21], 1),
        new Achievement(
            'Keep up the click',
            'Make <b>10 nonillion</b> cookies from clicking.',
            [0, 69, 'https://i.imgur.com/3jNJJNw.png'],
            1
        ),
        new Achievement(
            'Clicking is the new booping',
            'Make <b>1 decillion</b> cookies from clicking.',
            [0, 34, 'https://i.imgur.com/3jNJJNw.png'],
            1
        ),
        new Achievement(
            'The final click',
            'Make <b>100 decillion</b> cookies from clicking.<q>But its never over.</q>',
            [0, 46, 'https://i.imgur.com/3jNJJNw.png'],
            1
        ),
        new Achievement(
            'Sike, thats the wrong achievement',
            "Make <b>10 undecillion</b> cookies from clicking.<q>The last achievement wasn't the final one.</q>",
            [0, 5, 'https://i.imgur.com/nv69nsg.png'],
            1
        ),
        new Achievement(
            'How about we tap the cookie now',
            'Make <b>1 duodecillion</b> cookies from clicking.<q>I heard the mobile version is out now.</q>',
            [1, 5, 'https://i.imgur.com/nv69nsg.png'],
            1
        ),
        new Achievement(
            'Cookie Destroyer',
            'Make <b>100 duodecillion</b> cookies from clicking.<q>Agent Johnson was here</q>',
            [2, 5, 'https://i.imgur.com/nv69nsg.png'],
            1
        ),
        new Achievement(
            'Give it a click',
            'Make <b>10 tredecillion</b> cookies from clicking.',
            [3, 5, 'https://i.imgur.com/nv69nsg.png'],
            1
        ),
        new Achievement(
            'Clicking Frenzy: Our Lord and Saviour',
            'Make <b>1 quattuordecillion</b> cookies from clicking.',
            [4, 5, 'https://i.imgur.com/nv69nsg.png'],
            1
        ),
        new Achievement(
            'Hand-made cookies are still the best',
            'Make <b>100 quattuordecillion</b> cookies from clicking.',
            [5, 5, 'https://i.imgur.com/nv69nsg.png'],
            1
        ),
        new Achievement(
            'My strange clicking addiction',
            'Make <b>10 quindecillion</b> cookies from clicking.',
            [6, 5, 'https://i.imgur.com/nv69nsg.png'],
            1
        ),

        // ~ ~ ~ BUILDINGS ~ ~ ~

        new Achievement(
            'Owner of Buildings',
            'Own <b>3000</b> buildings.',
            [0, 0, 'https://i.imgur.com/GGrHHrA.png'],
            1
        ),
        new Achievement('Build up', 'Own <b>4000</b> buildings.', [1, 0, 'https://i.imgur.com/GGrHHrA.png'], 1),
        new Achievement(
            'World-dominating company',
            'Own <b>5000</b> buildings.',
            [2, 0, 'https://i.imgur.com/GGrHHrA.png'],
            1
        ),
        new Achievement(
            'Creator of the Cookieverse',
            'Own <b>6000</b> buildings.',
            [3, 0, 'https://i.imgur.com/GGrHHrA.png'],
            1
        ),
        new Achievement(
            "Build until you can't build anymore",
            'Own <b>7000</b> buildings.',
            [4, 0, 'https://i.imgur.com/GGrHHrA.png'],
            1
        ),
        new Achievement(
            'You built the guilt',
            'Own <b>8000</b> buildings.',
            [5, 0, 'https://i.imgur.com/RWbOLsf.png'],
            1
        ),
        new Achievement('Overlord', 'Own <b>9000</b> buildings.', [6, 0, 'https://i.imgur.com/S5BnOGU.png'], 1),
        new Achievement(
            "That's enough, boss",
            'Own <b>10000</b> buildings.',
            [7, 0, 'https://i.imgur.com/Qi5DPKy.png'],
            1
        ),

        // ~ ~ ~ UPGRADES ~ ~ ~

        new Achievement(
            'Purchaser of Upgrades',
            'Purchase <b>300</b> upgrades.',
            [0, 1, 'https://i.imgur.com/GGrHHrA.png'],
            1
        ),
        new Achievement('Grade up', 'Purchase <b>400</b> upgrades.', [1, 1, 'https://i.imgur.com/GGrHHrA.png'], 1),
        new Achievement(
            'Earth-shattering association',
            'Purchase <b>500</b> upgrades.',
            [2, 1, 'https://i.imgur.com/S5BnOGU.png'],
            1
        ),

        // ~ ~ ~ X OF EVERYTHING ~ ~ ~

        new Achievement(
            'Sexcentennial',
            'Have at least <b>600 of everything</b>.<q>Yes I just did that.</q>',
            [1, 3, 'https://i.imgur.com/Qi5DPKy.png'],
            1
        ),

        // ~ ~ ~ BIG COOKIE CLICKS ~ ~ ~

        new Achievement('Clicker', 'Click on the big cookie <b>1,000</b> times.', [11, 22], 1),
        new Achievement('Advanced Clicker', 'Click on the big cookie <b>10,000</b> times.', [11, 23], 1),
        new Achievement('Expert Clicker', 'Click on the big cookie <b>25,000</b> times.', [11, 24], 1),

        // ~ ~ ~ PRESTIGE LEVEL ~ ~ ~

        new Achievement('Heavenly', 'Reach prestige level <b>100</b>.', [19, 7], 1),
        new Achievement('Transcendent', 'Reach prestige level <b>10,000</b>.', [18, 7], 1),
        new Achievement('Higher energy state', 'Reach prestige level <b>1 million</b>.', [17, 7], 1),
        new Achievement('Omniverse', 'Reach prestige level <b>100 million</b>.', [16, 7], 1),
        new Achievement('The Ascendant', 'Reach prestige level <b>10 billion</b>.', [15, 7], 1),

        // ~ ~ ~ PRESTIGE UPGRADES ~ ~ ~

        new Achievement(
            'Secret fortune',
            'Purchase the <b>3 secret prestige upgrades</b>.<q>You got more than one ace up your sleeve, huh?',
            [24, 15],
            1
        ),
        new Achievement(
            'Pretty prestige',
            'Purchase <b>15</b> prestige upgrades.',
            [19, 48, 'https://i.imgur.com/3jNJJNw.png'],
            1
        ),
        new Achievement(
            'Live and learn',
            'Purchase <b>30</b> prestige upgrades.<q>And never forget.',
            [19, 47, 'https://i.imgur.com/3jNJJNw.png'],
            1
        ),
        new Achievement(
            'We will stay with you forever',
            "Purchase <b>60</b> prestige upgrades.<q>Don't reset us.</q>",
            [19, 46, 'https://i.imgur.com/3jNJJNw.png'],
            1
        ),

        // ~ ~ ~ COOKIE UPGRADES ~ ~ ~

        new Achievement('Getting fancy', 'Purchase <b>all fancy biscuits</b>.', [21, 8], 1),
        new Achievement('Emmanuel Macaron', 'Purchase <b>all macarons</b>.', [20, 8], 1),
        new Achievement('You wanna be popular?', 'Purchase <b>all popular biscuits</b>.', [20, 9], 1),
        new Achievement('Rich butterfingers', 'Purchase <b>all rich butter cookies</b>.', [21, 9], 1),
        new Achievement('Pastries from the past', 'Purchase <b>all pastries</b>.', [27, 29], 1),
        new Achievement('Bake me, maybe?', 'Purchase <b>all maybe cookies</b>.', [25, 29], 1),
        new Achievement(
            'Burger Clicker',
            'Purchase <b>all not cookies</b>.<q>Shoutout to the old Idle Game Maker!</q>',
            [26, 29],
            1
        ),
        new Achievement(
            'Collecting these is like growing plants',
            'Purchase <b>all plant upgrades</b>.<q>It takes a looooong time.</q>',
            [24, 25],
            1
        ),

        // ~ ~ ~ BUILDING LEVEL ~ ~ ~

        new Achievement(
            'Level 1 complete!',
            'Reach level <b>1</b> of every building.',
            [0, 2, 'https://i.imgur.com/GGrHHrA.png'],
            1
        ),
        new Achievement(
            'Five Hive',
            'Reach level <b>5</b> of every building.',
            [1, 2, 'https://i.imgur.com/GGrHHrA.png'],
            1
        ),
        new Achievement(
            'This took forever',
            'Reach level <b>10</b> of every building.',
            [2, 2, 'https://i.imgur.com/Qi5DPKy.png'],
            1
        ),

        // ~ ~ ~ OTHER ~ ~ ~

        new Achievement(
            'Purrfect Perfection',
            'Purrchase <b>every kitten upgrade</b>.<q>Are you sick of these puns yet?</q>',
            [26, 7],
            1
        ),
        new Achievement(
            "It's sweet, sweet, sweet Synergy",
            "Purchase <b>all Synergy I upgrades</b>.<q>It's ours for the baking.</q>",
            [9, 20],
            1
        ),
        new Achievement('Out of Energy? Get Synergy!', 'Purchase <b>all Synergy II upgrades</b>.', [9, 29], 1),
        new Achievement(
            'All you had to do was ask',
            "Click this custom achievement's slot.<q>Here you go.</q>",
            [2, 4, 'https://i.imgur.com/sl3FeNY.png'],
            1
        ),
        (Game.last.clickFunction = () => {
            if (!Game.HasAchiev('All you had to do was ask')) {
                PlaySound('snd/tick.mp3');
                Win('All you had to do was ask');
            }
        }),
        // ~ ~ ~ SHADOW ~ ~ ~

        new Achievement('Mod-God complex', 'Name yourself <b>Darky</b>.<q>Ducky.</q>', [2, 12], 1),
        (Game.last.pool = 'shadow'),
        new Achievement(
            'Golden Jackpot',
            'Click <b>77,777 golden cookies</b>.',
            [0, 3, 'https://i.imgur.com/GGrHHrA.png'],
            1
        ),
        (Game.last.pool = 'shadow'),
        new Achievement('I like playing supportive characters', 'Dashnet reached <b>10</b> heralds.', [21, 29], 1),
        (Game.last.pool = 'shadow'),
        new Achievement("That's a lot of money", 'Dashnet reached <b>25</b> heralds.', [21, 29], 1),
        (Game.last.pool = 'shadow'),
        new Achievement(
            'You really want us to make games for you, huh?',
            'Dashnet reached <b>50</b> heralds.',
            [21, 29],
            1
        ),
        (Game.last.pool = 'shadow'),
        new Achievement('Thank you guys so much!', 'Dashnet reached <b>100</b> heralds.', [21, 29], 1),
        (Game.last.pool = 'shadow'),
    ]);

    // -------------------------------------------------------------------

    const Achievements = {};
    Game.AchievementsById.forEach(achievement => {
        Achievements[achievement.name] = achievement;
    });

    Achievements.Polymath.order = 6008;
    Achievements['Renaissance baker'].order = 6009;
    Achievements['The elder scrolls'].order = 6010;
    Achievements.Sacrifice.order = 30015;
    Achievements.Oblivion.order = 30016;
    Achievements['From scratch'].order = 30017;
    Achievements['Third-party'].order = 30202;
    Achievements['Tabloid addiction'].order = 11003;
    Achievements['Olden days'].order = 11002;

    Achievements['Squeak goes the mouse'].order = 1060;
    Achievements["I'm too old for this"].order = 1110;
    Achievements['Gorden garden'].order = 1210;
    Achievements['A fine mine you got there'].order = 1310;
    Achievements['Working 24/7'].order = 1410;
    Achievements['My shipment arrives in the morning'].order = 1510;
    Achievements['Turning cookies into gold since 2013'].order = 1610;
    Achievements['A portal inside of a portal'].order = 1710;
    Achievements['It all began on the 8th of August, 2013'].order = 1810;
    Achievements.AntimatterCon.order = 1910;
    Achievements['Stop being a prissm'].order = 2010;
    Achievements['Bank on it'].order = 1430;
    Achievements['Temple pun'].order = 1460;
    Achievements["It's magic, Joel!"].order = 1480;
    Achievements['And yet you probably never got a blab'].order = 2110;
    Achievements.Gouchnox.order = 2210;
    Achievements['Follow the javascript'].order = 2310;

    Achievements['Stop it, it clickles'].order = 1010;
    Achievements['Keep up the click'].order = 1011;
    Achievements['Clicking is the new booping'].order = 1012;
    Achievements['The final click'].order = 1013;
    Achievements['Sike, thats the wrong achievement'].order = 1014;
    Achievements['How about we tap the cookie now'].order = 1015;
    Achievements['Cookie Destroyer'].order = 1016;
    Achievements['Give it a click'].order = 1017;
    Achievements['Clicking Frenzy: Our Lord and Saviour'].order = 1018;
    Achievements['Hand-made cookies are still the best'].order = 1019;
    Achievements['My strange clicking addiction'].order = 1019;

    Achievements['Owner of Buildings'].order = 5010;
    Achievements['Build up'].order = 5011;
    Achievements['World-dominating company'].order = 5012;
    Achievements['Creator of the Cookieverse'].order = 5013;
    Achievements["Build until you can't build anymore"].order = 5014;
    Achievements['You built the guilt'].order = 5015;
    Achievements.Overlord.order = 5016;
    Achievements["That's enough, boss"].order = 5017;

    Achievements['Purchaser of Upgrades'].order = 6001;
    Achievements['Grade up'].order = 6002;
    Achievements['Earth-shattering association'].order = 6003;

    Achievements.Sexcentennial.order = 7003;

    Achievements.Heavenly.order = 30010;
    Achievements.Transcendent.order = 30011;
    Achievements['Higher energy state'].order = 30012;
    Achievements.Omniverse.order = 30013;
    Achievements['The Ascendant'].order = 30014;

    Achievements.Clicker.order = 1020;
    Achievements['Advanced Clicker'].order = 1021;
    Achievements['Expert Clicker'].order = 1022;

    Achievements['Secret fortune'].order = 32001;

    Achievements['Getting fancy'].order = 21101;
    Achievements['Emmanuel Macaron'].order = 21102;
    Achievements['You wanna be popular?'].order = 21103;
    Achievements['Rich butterfingers'].order = 21104;
    Achievements['Pastries from the past'].order = 21105;
    Achievements['Bake me, maybe?'].order = 21106;
    Achievements['Burger Clicker'].order = 21107;
    Achievements['Collecting these is like growing plants'].order = 21108;

    Achievements['Level 1 complete!'].order = 5017;
    Achievements['Five Hive'].order = 5018;
    Achievements['This took forever'].order = 5019;

    Achievements['Pretty prestige'].order = 6003;
    Achievements['Live and learn'].order = 6004;
    Achievements['We will stay with you forever'].order = 6005;

    Achievements['Purrfect Perfection'].order = 10001;
    Achievements["It's sweet, sweet, sweet Synergy"].order = 6006;
    Achievements['Out of Energy? Get Synergy!'].order = 6007;
    Achievements['All you had to do was ask'].order = 11001;

    Achievements['Mod-God complex'].order = 30201;

    Object.values(Achievements).forEach(achievement => {
        Game.AchievementsById[achievement.id] = achievement;
    });

    // -------------------------------------------------------------------

    if (typeof Darky === 'undefined') {
        Darky = {};
    }
    Darky.prestigeUpgradesOwned = 0;
    const getTotalBuildings = () => {
        let amount = 0;
        Game.ObjectsById.forEach(object => {
            amount += object.amount;
        });
        return amount;
    };

    const getMinimalBuildingAmount = () => {
        let minimalAmount = Infinity;
        Game.ObjectsById.forEach(object => {
            minimalAmount = Math.min(minimalAmount, object.amount);
        });
        return minimalAmount;
    };

    // -------------------------------------------------------------------

    Game.customChecks = Game.customChecks.concat([
        () => {
            let count = 0;
            for (const i in Game.UpgradesById) {
                const me = Game.UpgradesById[i];
                if (me.bought && me.pool === 'prestige') count++;
            }
            Darky.prestigeUpgradesOwned = count;
        },

        () => {
            if (Game.Objects.Cursor.amount >= 800) Win('Squeak goes the mouse');
        },
        () => {
            if (Game.Objects.Grandma.amount >= 650) Win("I'm too old for this");
        },
        () => {
            if (Game.Objects.Farm.amount >= 600) Win('Gorden garden');
        },
        () => {
            if (Game.Objects.Mine.amount >= 600) Win('A fine mine you got there');
        },
        () => {
            if (Game.Objects.Factory.amount >= 600) Win('Working 24/7');
        },
        () => {
            if (Game.Objects.Bank.amount >= 600) Win('Bank on it');
        },
        () => {
            if (Game.Objects.Temple.amount >= 600) Win('Temple pun');
        },
        () => {
            if (Game.Objects['Wizard tower'].amount >= 600) Win("It's magic, Joel!");
        },
        () => {
            if (Game.Objects.Shipment.amount >= 600) Win('My shipment arrives in the morning');
        },
        () => {
            if (Game.Objects['Alchemy lab'].amount >= 600) Win('Turning cookies into gold since 2013');
        },
        () => {
            if (Game.Objects.Portal.amount >= 600) Win('A portal inside of a portal');
        },
        () => {
            if (Game.Objects['Time machine'].amount >= 600) Win('It all began on the 8th of August, 2013');
        },
        () => {
            if (Game.Objects['Antimatter condenser'].amount >= 600) Win('AntimatterCon');
        },
        () => {
            if (Game.Objects.Prism.amount >= 600) Win('Stop being a prissm');
        },
        () => {
            if (Game.Objects.Chancemaker.amount >= 600) Win('And yet you probably never got a blab');
        },
        () => {
            if (Game.Objects['Fractal engine'].amount >= 600) Win('Gouchnox');
        },
        () => {
            if (Game.Objects['Javascript console'].amount >= 600) Win('Follow the javascript');
        },
        () => {
            if (Game.handmadeCookies >= 100000000000000000000000000000) Win('Stop it, it clickles');
        },
        () => {
            if (Game.handmadeCookies >= 10000000000000000000000000000000) Win('Keep up the click');
        },
        () => {
            if (Game.handmadeCookies >= 1000000000000000000000000000000000) Win('Clicking is the new booping');
        },
        () => {
            if (Game.handmadeCookies >= 100000000000000000000000000000000000) Win('The final click');
        },
        () => {
            if (Game.handmadeCookies >= 10000000000000000000000000000000000000)
                Win('Sike, thats the wrong achievement');
        },
        () => {
            if (Game.handmadeCookies >= 1000000000000000000000000000000000000000)
                Win('How about we tap the cookie now');
        },
        () => {
            if (Game.handmadeCookies >= 100000000000000000000000000000000000000000) Win('Cookie Destroyer');
        },
        () => {
            if (Game.handmadeCookies >= 10000000000000000000000000000000000000000000) Win('Give it a click');
        },
        () => {
            if (Game.handmadeCookies >= 1000000000000000000000000000000000000000000000)
                Win('Clicking Frenzy: Our Lord and Saviour');
        },
        () => {
            if (Game.handmadeCookies >= 100000000000000000000000000000000000000000000000)
                Win('Hand-made cookies are still the best');
        },
        () => {
            if (Game.handmadeCookies >= 10000000000000000000000000000000000000000000000000)
                Win('My strange clicking addiction');
        },
        () => {
            if (getTotalBuildings() >= 3000) Win('Owner of Buildings');
        },
        () => {
            if (getTotalBuildings() >= 4000) Win('Build up');
        },
        () => {
            if (getTotalBuildings() >= 5000) Win('World-dominating company');
        },
        () => {
            if (getTotalBuildings() >= 6000) Win('Creator of the Cookieverse');
        },
        () => {
            if (getTotalBuildings() >= 7000) Win("Build until you can't build anymore");
        },
        () => {
            if (getTotalBuildings() >= 8000) Win('You built the guilt');
        },
        () => {
            if (getTotalBuildings() >= 9000) Win('Overlord');
        },
        () => {
            if (getTotalBuildings() >= 10000) Win("That's enough, boss");
        },
        () => {
            if (Game.UpgradesOwned >= 300) Win('Purchaser of Upgrades');
        },
        () => {
            if (Game.UpgradesOwned >= 400) Win('Grade up');
        },
        () => {
            if (Game.UpgradesOwned >= 500) Win('Earth-shattering association');
        },
        () => {
            if (getMinimalBuildingAmount() >= 600) Win('Sexcentennial');
        },
        () => {
            if (Game.cookieClicks >= 1000) Win('Clicker');
        },
        () => {
            if (Game.cookieClicks >= 10000) Win('Advanced Clicker');
        },
        () => {
            if (Game.cookieClicks >= 25000) Win('Expert Clicker');
        },
        () => {
            if (Game.prestige >= 100) Win('Heavenly');
        },
        () => {
            if (Game.prestige >= 10000) Win('Transcendent');
        },
        () => {
            if (Game.prestige >= 1000000) Win('Higher energy state');
        },
        () => {
            if (Game.prestige >= 100000000) Win('Omniverse');
        },
        () => {
            if (Game.prestige >= 10000000000) Win('The Ascendant');
        },
        () => {
            if (Game.Has('Lucky digit') && Game.Has('Lucky number') && Game.Has('Lucky payout')) Win('Secret fortune');
        },
        () => {
            if (
                Game.Has('Caramoas') &&
                Game.Has('Sagalongs') &&
                Game.Has('Shortfoils') &&
                Game.Has('Win mints') &&
                Game.Has('Fig gluttons') &&
                Game.Has('Loreols') &&
                Game.Has('Jaffa cakes') &&
                Game.Has("Grease's cups") &&
                Game.Has('Digits') &&
                Game.Has('Bastenaken cookies') &&
                Game.Has('Festivity loops') &&
                Game.Has('Havabreaks') &&
                Game.Has('Zilla wafers') &&
                Game.Has('Dim Dams')
            )
                Win('You wanna be popular?');
        },
        () => {
            if (
                Game.Has('Rose macarons') &&
                Game.Has('Lemon macarons') &&
                Game.Has('Chocolate macarons') &&
                Game.Has('Pistachio macarons') &&
                Game.Has('Hazelnut macarons') &&
                Game.Has('Violet macarons') &&
                Game.Has('Caramel macarons') &&
                Game.Has('Licorice macarons')
            )
                Win('Emmanuel Macaron');
        },
        () => {
            if (
                Game.Has('British tea biscuits') &&
                Game.Has('Chocolate british tea biscuits') &&
                Game.Has('Round british tea biscuits') &&
                Game.Has('Round chocolate british tea biscuits') &&
                Game.Has('Round british tea biscuits with heart motif') &&
                Game.Has('Round chocolate british tea biscuits with heart motif')
            )
                Win('Getting fancy');
        },
        () => {
            if (
                Game.Has('Butter horseshoes') &&
                Game.Has('Butter pucks') &&
                Game.Has('Butter knots') &&
                Game.Has('Butter slabs') &&
                Game.Has('Butter swirls')
            )
                Win('Rich butterfingers');
        },
        () => {
            if (
                Game.Has('Profiteroles') &&
                Game.Has('Jelly donut') &&
                Game.Has('Glazed donut') &&
                Game.Has('Chocolate cake') &&
                Game.Has('Strawberry cake') &&
                Game.Has('Apple pie') &&
                Game.Has('Lemon meringue pie') &&
                Game.Has('Butter croissant')
            )
                Win('Pastries from the past');
        },
        () => {
            if (
                Game.Has('Cookie dough') &&
                Game.Has('Burnt cookie') &&
                Game.Has('A chocolate chip cookie but with the chips picked off for some reason') &&
                Game.Has('Flavor text cookie') &&
                Game.Has('High-definition cookie') &&
                Game.Has('Crackers')
            )
                Win('Bake me, maybe?');
        },
        () => {
            if (
                Game.Has('Toast') &&
                Game.Has('Peanut butter & jelly') &&
                Game.Has('Wookies') &&
                Game.Has('Cheeseburger') &&
                Game.Has('One lone chocolate chip') &&
                Game.Has('Pizza') &&
                Game.Has('Candy')
            )
                Win('Burger Clicker');
        },
        () => {
            if (
                Game.Has('Elderwort biscuits') &&
                Game.Has('Bakeberry cookies') &&
                Game.Has('Wheat slims') &&
                Game.Has('Duketater cookies') &&
                Game.Has('Green yeast digestives') &&
                Game.Has('Fern tea') &&
                Game.Has('Ichor syrup')
            )
                Win('Collecting these is like growing plants');
        },
        () => {
            if (
                Game.Objects.Cursor.level &&
                Game.Objects.Grandma.level &&
                Game.Objects.Farm.level &&
                Game.Objects.Factory.level &&
                Game.Objects.Mine.level &&
                Game.Objects.Bank.level &&
                Game.Objects.Temple.level &&
                Game.Objects['Wizard tower'].level &&
                Game.Objects.Shipment.level &&
                Game.Objects['Alchemy lab'].level &&
                Game.Objects.Portal.level &&
                Game.Objects['Time machine'].level &&
                Game.Objects['Antimatter condenser'].level &&
                Game.Objects.Prism.level &&
                Game.Objects.Chancemaker &&
                Game.Objects['Fractal engine'].level &&
                Game.Objects['Javascript console'].level >= 1
            )
                Win('Level 1 complete!');
        },
        () => {
            if (
                Game.Objects.Cursor.level &&
                Game.Objects.Grandma.level &&
                Game.Objects.Farm.level &&
                Game.Objects.Factory.level &&
                Game.Objects.Mine.level &&
                Game.Objects.Bank.level &&
                Game.Objects.Temple.level &&
                Game.Objects['Wizard tower'].level &&
                Game.Objects.Shipment.level &&
                Game.Objects['Alchemy lab'].level &&
                Game.Objects.Portal.level &&
                Game.Objects['Time machine'].level &&
                Game.Objects['Antimatter condenser'].level &&
                Game.Objects.Prism.level &&
                Game.Objects.Chancemaker &&
                Game.Objects['Fractal engine'].level &&
                Game.Objects['Javascript console'].level >= 5
            )
                Win('Five Hive');
        },
        () => {
            if (
                Game.Objects.Cursor.level &&
                Game.Objects.Grandma.level &&
                Game.Objects.Farm.level &&
                Game.Objects.Factory.level &&
                Game.Objects.Mine.level &&
                Game.Objects.Bank.level &&
                Game.Objects.Temple.level &&
                Game.Objects['Wizard tower'].level &&
                Game.Objects.Shipment.level &&
                Game.Objects['Alchemy lab'].level &&
                Game.Objects.Portal.level &&
                Game.Objects['Time machine'].level &&
                Game.Objects['Antimatter condenser'].level &&
                Game.Objects.Prism.level &&
                Game.Objects.Chancemaker &&
                Game.Objects['Fractal engine'].level &&
                Game.Objects['Javascript console'].level >= 10
            )
                Win('This took forever');
        },
        () => {
            if (Darky.prestigeUpgradesOwned >= 15) Win('Pretty prestige');
        },
        () => {
            if (Darky.prestigeUpgradesOwned >= 30) Win('Live and learn');
        },
        () => {
            if (Darky.prestigeUpgradesOwned >= 60) Win('We will stay with you forever');
        },
        () => {
            if (
                Game.Has('Kitten helpers') &&
                Game.Has('Kitten workers') &&
                Game.Has('Kitten engineers') &&
                Game.Has('Kitten overseers') &&
                Game.Has('Kitten managers') &&
                Game.Has('Kitten accountants') &&
                Game.Has('Kitten specialists') &&
                Game.Has('Kitten experts') &&
                Game.Has('Kitten consultants') &&
                Game.Has('Kitten assistants to the regional manager') &&
                Game.Has('Kitten marketeers') &&
                Game.Has('Kitten analysts') &&
                Game.Has('Kitten executives') &&
                Game.Has('Fortune #103') &&
                Game.Has('Kitten angels')
            )
                Win('Purrfect Perfection');
        },
        () => {
            if (
                Game.Has('Future almanacs') &&
                Game.Has('Seismic magic') &&
                Game.Has('Quantum electronics') &&
                Game.Has('Contracts from beyond') &&
                Game.Has('Paganism') &&
                Game.Has('Arcane knowledge') &&
                Game.Has('Fossil fuels') &&
                Game.Has('Primordial ores') &&
                Game.Has('Infernal crops') &&
                Game.Has('Relativistic parsec-skipping') &&
                Game.Has('Extra physics funding') &&
                Game.Has('Light magic') &&
                Game.Has('Gemmed talismans') &&
                Game.Has('Recursive mirrors') &&
                Game.Has('Script grannies')
            )
                Win("It's sweet, sweet, sweet Synergy");
        },
        () => {
            if (
                Game.Has('Rain prayer') &&
                Game.Has('Asteroid mining') &&
                Game.Has('Temporal overclocking') &&
                Game.Has('Printing presses') &&
                Game.Has('God particle') &&
                Game.Has('Magical botany') &&
                Game.Has('Shipyards') &&
                Game.Has('Gold fund') &&
                Game.Has('Abysmal glimmer') &&
                Game.Has('Primeval glow') &&
                Game.Has('Chemical proficiency') &&
                Game.Has('Mystical energies') &&
                Game.Has('Charm quarks') &&
                Game.Has('Mice clicking mice') &&
                Game.Has('Tombola computing')
            )
                Win('Out of Energy? Get Synergy!');
        },

        () => {
            if (Game.goldenClicks >= 77777) Win('Golden Jackpot');
        },
        () => {
            if (name === 'darky') Win('Mod-God complex');
        },
        () => {
            if (Game.heralds >= 10) Win('I like playing supportive characters');
        },
        () => {
            if (Game.heralds >= 25) Win("That's a lot of money");
        },
        () => {
            if (Game.heralds >= 50) Win('You really want us to make games for you, huh?');
        },
        () => {
            if (Game.heralds >= 100) Win('Thank you guys so much!');
        },
    ]);

    // -------------------------------------------------------------------

    DarkySavePrefix = 'DarkyPackage';

    DarkyAchievSaveConfig = () => {
        localStorage.setItem(DarkySavePrefix, JSON.stringify(DarkySave));
    };

    DarkyAchievSaveDefault = () => {
        if (typeof DarkySave === 'undefined') {
            DarkySave = {};
        }

        DarkySave.Achievements = {};
        for (const i in Game.Achievements) {
            const me = Game.Achievements[i];
            if (me.darky === 1) {
                DarkySave.Achievements[me.name] = 0;
            }
        }
        DarkyAchievSaveConfig();
    };

    DarkyAchievLoadConfig = () => {
        if (localStorage.getItem(DarkySavePrefix) != null) {
            DarkySave = JSON.parse(localStorage.getItem(DarkySavePrefix));
            if (typeof DarkySave.Achievements === 'undefined') {
                DarkySave.Achievements = {};
            }
            for (const i in Game.Achievements) {
                const me = Game.Achievements[i];
                if (me.darky === 1) {
                    if (typeof DarkySave.Achievements[me.name] === 'undefined') {
                        DarkySave.Achievements[me.name] = 0;
                        DarkyAchievSaveConfig();
                    } else if (DarkySave.Achievements[me.name] === 1) {
                        Win(me.name);
                    }
                }
            }
        } else {
            DarkyAchievSaveDefault();
        }
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

    DarkyAchievLoadConfig();

    DarkyAchievMigrateOldSave = () => {
        for (const i in Game.Achievements) {
            const me = Game.Achievements[i];
            if (me.darky === 1) {
                if (typeof DarkySave[me.name] !== 'undefined') {
                    DarkySave.Achievements[me.name] = DarkySave[me.name];
                    if (DarkySave[me.name]) {
                        Win(me.name);
                    }
                    delete DarkySave[me.name];
                }
            }
        }
        DarkyAchievSaveConfig();
    };
    DarkyAchievMigrateOldSave();

    // -------------------------------------------------------------------

    Game.Win('Third-party');
    Game.Notify(
        "Darky's Achievements and Upgrades Batch 1.1",
        ' <b>73</b> new Achievements and <b>16</b> new Upgrades have been added, enjoy and thank you for using my mods!',
        [3, 4, 'https://i.imgur.com/Fn7YXtZ.png']
    );
    PlaySound('https://freesound.org/data/previews/202/202092_3756348-lq.mp3');
}
