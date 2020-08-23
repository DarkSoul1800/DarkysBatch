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
	}*/

	let Achievement = function Achievement(name, desc, icon) {
		let answer = new Game.Achievement(name, desc, icon);

		answer.darky = 1;

		return answer;
	}

	let Win = function Win(what) {
		Game.Win(what);
		if (typeof Game.Achievements[what] !== "undefined" && Game.Achievements[what].darky == 1) {
			DarkySave.Achievements[what] = 1;
			DarkyAchievSaveConfig();
		}
	}
	
	eval("Game.crate =" + Game.crate.toString().split("shadow';").join(" shadow';\nif (me.darky == 1) classes+=' darky'; //Darky's achievement package injection").split("mysterious?").join("mysterious? (me.darky == 1) ? 'background-image:url(\\\'https://i.imgur.com/JKKvixm.png\\\')'/*Darky's achievement package injection*/ : "));

	eval("Game.crateTooltip = " + Game.crateTooltip.toString().split("if (mysterious) icon=[0,7];").join("if (mysterious) icon=[0,7]; if (mysterious && me.darky == 1) icon = [0, 0, 'https://i.imgur.com/JKKvixm.png']"));

	if (typeof Darky === 'undefined') {
		let style = document.createElement("style");
		style.type = "text/css";
		style.textContent = ".darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}";
		document.head.appendChild(style);
	}

	//-------------------------------------------------------------------

	if(!Game.customCrate) Game.customCrate = []
	Game.customCrate = Game.customCrate.concat([

		// ~ ~ ~ X OF BUILDINGS ~ ~ ~ 

		new Achievement("Squeak goes the mouse", "Have <b>800</b> cursors.", [0, 18], 1),
		new Achievement("I'm too old for this", "Have <b>650</b> grandmas.", [1, 21], 1),
		new Achievement("Gorden garden", "Have <b>600</b> farms.", [2, 31], 1),
		new Achievement("A fine mine you got there", "Have <b>600</b> mines.", [3, 31], 1),
		new Achievement("Working 24/7", "Have <b>600</b> factories.", [4, 31], 1),
		new Achievement("Bank on it", "Have <b>600</b> banks.", [15, 31], 1),
		new Achievement("Temple pun", "Have <b>600</b> temples.", [16, 31], 1),
		new Achievement("It's magic, Joel!", "Have <b>600</b> wizard towers.", [17, 31], 1),
		new Achievement("My shipment arrives in the morning", "Have <b>600</b> shipments.", [5, 31], 1),
		new Achievement("Turning cookies into gold since 2013", "Have <b>600</b> alchemy labs.", [6, 31], 1),
		new Achievement("A portal inside of a portal", "Have <b>600</b> portals.", [7, 31], 1),
		new Achievement("It all began on the 8th of August, 2013", "Have <b>600</b> time machines.", [8, 31], 1),
		new Achievement("AntimatterCon", "Have <b>600</b> antimatter condensers.", [13, 31], 1),
		new Achievement("Stop being a prissm", "Have <b>600</b> prisms.", [14, 31], 1),
		new Achievement("And yet you probably never got a blab", "Have <b>600</b> chancemakers.", [19, 31], 1),
		new Achievement("Gouchnox", "Have <b>600</b> fractal engines.<q>69</q>", [20, 31], 1),
		new Achievement("Follow the javascript", "Have <b>600</b> javascript consoles.", [32, 31], 1),

		// ~ ~ ~ COOKIES FROM CLICKING ~ ~ ~ 

		new Achievement("Stop it, it clickles", "Make <b>100 octillion</b> cookies from clicking.", [11, 21], 1),
		new Achievement("Keep up the click", "Make <b>10 nonillion</b> cookies from clicking.", [0, 69, "https://i.imgur.com/3jNJJNw.png"], 1),
		new Achievement("Clicking is the new booping", "Make <b>1 decillion</b> cookies from clicking.", [0, 34, "https://i.imgur.com/3jNJJNw.png"], 1),
		new Achievement("The final click", "Make <b>100 decillion</b> cookies from clicking.<q>But its never over.</q>", [0, 46, "https://i.imgur.com/3jNJJNw.png"], 1),
		new Achievement("Sike, thats the wrong achievement", "Make <b>10 undecillion</b> cookies from clicking.<q>The last achievement wasn't the final one.</q>", [0, 5, "https://i.imgur.com/nv69nsg.png"], 1),
		new Achievement("How about we tap the cookie now", "Make <b>1 duodecillion</b> cookies from clicking.<q>I heard the mobile version is out now.</q>", [1, 5, "https://i.imgur.com/nv69nsg.png"], 1),
		new Achievement("Cookie Destroyer", "Make <b>100 duodecillion</b> cookies from clicking.<q>Agent Johnson was here</q>", [2, 5, "https://i.imgur.com/nv69nsg.png"], 1),
		new Achievement("Give it a click", "Make <b>10 tredecillion</b> cookies from clicking.", [3, 5, "https://i.imgur.com/nv69nsg.png"], 1),
		new Achievement("Clicking Frenzy: Our Lord and Saviour", "Make <b>1 quattuordecillion</b> cookies from clicking.", [4, 5, "https://i.imgur.com/nv69nsg.png"], 1),
		new Achievement("Hand-made cookies are still the best", "Make <b>100 quattuordecillion</b> cookies from clicking.", [5, 5, "https://i.imgur.com/nv69nsg.png"], 1),
		new Achievement("My strange clicking addiction", "Make <b>10 quindecillion</b> cookies from clicking.", [6, 5, "https://i.imgur.com/nv69nsg.png"], 1),

		// ~ ~ ~ BUILDINGS ~ ~ ~ 

		new Achievement("Owner of Buildings", "Own <b>3000</b> buildings.", [0, 0, "https://i.imgur.com/GGrHHrA.png"], 1),
		new Achievement("Build up", "Own <b>4000</b> buildings.", [1, 0, "https://i.imgur.com/GGrHHrA.png"], 1),
		new Achievement("World-dominating company", "Own <b>5000</b> buildings.", [2, 0, "https://i.imgur.com/GGrHHrA.png"], 1),
		new Achievement("Creator of the Cookieverse", "Own <b>6000</b> buildings.", [3, 0, "https://i.imgur.com/GGrHHrA.png"], 1),
		new Achievement("Build until you can't build anymore", "Own <b>7000</b> buildings.", [4, 0, "https://i.imgur.com/GGrHHrA.png"], 1),
		new Achievement("You built the guilt", "Own <b>8000</b> buildings.", [5, 0, "https://i.imgur.com/RWbOLsf.png"], 1),
		new Achievement("Overlord", "Own <b>9000</b> buildings.", [6, 0, "https://i.imgur.com/S5BnOGU.png"], 1),
		new Achievement("That's enough, boss", "Own <b>10000</b> buildings.", [7, 0, "https://i.imgur.com/Qi5DPKy.png"], 1),

		// ~ ~ ~ UPGRADES ~ ~ ~ 

		new Achievement("Purchaser of Upgrades", "Purchase <b>300</b> upgrades.", [0, 1, "https://i.imgur.com/GGrHHrA.png"], 1),
		new Achievement("Grade up", "Purchase <b>400</b> upgrades.", [1, 1, "https://i.imgur.com/GGrHHrA.png"], 1),
		new Achievement("Earth-shattering association", "Purchase <b>500</b> upgrades.", [2, 1, "https://i.imgur.com/S5BnOGU.png"], 1),

		// ~ ~ ~ X OF EVERYTHING ~ ~ ~ 

		new Achievement("Sexcentennial", "Have at least <b>600 of everything</b>.<q>Yes I just did that.</q>", [1, 3, "https://i.imgur.com/Qi5DPKy.png"], 1),

		// ~ ~ ~ BIG COOKIE CLICKS ~ ~ ~ 

		new Achievement("Clicker", "Click on the big cookie <b>1,000</b> times.", [11, 22], 1),
		new Achievement("Advanced Clicker", "Click on the big cookie <b>10,000</b> times.", [11, 23], 1),
		new Achievement("Expert Clicker", "Click on the big cookie <b>25,000</b> times.", [11, 24], 1),

		// ~ ~ ~ PRESTIGE LEVEL ~ ~ ~ 

		new Achievement("Heavenly", "Reach prestige level <b>100</b>.", [19, 7], 1),
		new Achievement("Transcendent", "Reach prestige level <b>10,000</b>.", [18, 7], 1),
		new Achievement("Higher energy state", "Reach prestige level <b>1 million</b>.", [17, 7], 1),
		new Achievement("Omniverse", "Reach prestige level <b>100 million</b>.", [16, 7], 1),
		new Achievement("The Ascendant", "Reach prestige level <b>10 billion</b>.", [15, 7], 1),

		// ~ ~ ~ PRESTIGE UPGRADES ~ ~ ~ 

		new Achievement("Secret fortune", "Purchase the <b>3 secret prestige upgrades</b>.<q>You got more than one ace up your sleeve, huh?", [24, 15], 1),
		new Achievement("Pretty prestige", "Purchase <b>15</b> prestige upgrades.", [19, 48, "https://i.imgur.com/3jNJJNw.png"], 1),
		new Achievement("Live and learn", "Purchase <b>30</b> prestige upgrades.<q>And never forget.", [19, 47, "https://i.imgur.com/3jNJJNw.png"], 1),
		new Achievement("We will stay with you forever", "Purchase <b>60</b> prestige upgrades.<q>Don't reset us.</q>", [19, 46, "https://i.imgur.com/3jNJJNw.png"], 1),

		// ~ ~ ~ COOKIE UPGRADES ~ ~ ~ 

		new Achievement("Getting fancy", "Purchase <b>all fancy biscuits</b>.", [21, 8], 1),
		new Achievement("Emmanuel Macaron", "Purchase <b>all macarons</b>.", [20, 8], 1),
		new Achievement("You wanna be popular?", "Purchase <b>all popular biscuits</b>.", [20, 9], 1),
		new Achievement("Rich butterfingers", "Purchase <b>all rich butter cookies</b>.", [21, 9], 1),
		new Achievement("Pastries from the past", "Purchase <b>all pastries</b>.", [27, 29], 1),
		new Achievement("Bake me, maybe?", "Purchase <b>all maybe cookies</b>.", [25, 29], 1),
		new Achievement("Burger Clicker", "Purchase <b>all not cookies</b>.<q>Shoutout to the old Idle Game Maker!</q>", [26, 29], 1),
		new Achievement("Collecting these is like growing plants", "Purchase <b>all plant upgrades</b>.<q>It takes a looooong time.</q>", [24, 25], 1),

		// ~ ~ ~ BUILDING LEVEL ~ ~ ~ 

		new Achievement("Level 1 complete!", "Reach level <b>1</b> of every building.", [0, 2, "https://i.imgur.com/GGrHHrA.png"], 1),
		new Achievement("Five Hive", "Reach level <b>5</b> of every building.", [1, 2, "https://i.imgur.com/GGrHHrA.png"], 1),
		new Achievement("This took forever", "Reach level <b>10</b> of every building.", [2, 2, "https://i.imgur.com/Qi5DPKy.png"], 1),

		// ~ ~ ~ OTHER ~ ~ ~ 

		new Achievement("Purrfect Perfection", "Purrchase <b>every kitten upgrade</b>.<q>Are you sick of these puns yet?</q>", [26, 7], 1),
		new Achievement("It's sweet, sweet, sweet Synergy", "Purchase <b>all Synergy I upgrades</b>.<q>It's ours for the baking.</q>", [9, 20], 1),
		new Achievement("Out of Energy? Get Synergy!", "Purchase <b>all Synergy II upgrades</b>.", [9, 29], 1),
		new Achievement("All you had to do was ask", "Click this custom achievement's slot.<q>Here you go.</q>", [2, 4, "https://i.imgur.com/sl3FeNY.png"], 1), Game.last.clickFunction = function () { if (!Game.HasAchiev("All you had to do was ask")) { PlaySound("snd/tick.mp3"); Win("All you had to do was ask"); } },

		// ~ ~ ~ SHADOW ~ ~ ~ 

		new Achievement("Mod-God complex", "Name yourself <b>Darky</b>.<q>Ducky.</q>", [2, 12], 1), Game.last.pool = "shadow",
		new Achievement("Golden Jackpot", "Click <b>77,777 golden cookies</b>.", [0, 3, "https://i.imgur.com/GGrHHrA.png"], 1), Game.last.pool = "shadow",
		new Achievement("I like playing supportive characters", "Dashnet reached <b>10</b> heralds.", [21, 29], 1), Game.last.pool = "shadow",
		new Achievement("That's a lot of money", "Dashnet reached <b>25</b> heralds.", [21, 29], 1), Game.last.pool = "shadow",
		new Achievement("You really want us to make games for you, huh?", "Dashnet reached <b>50</b> heralds.", [21, 29], 1), Game.last.pool = "shadow",
		new Achievement("Thank you guys so much!", "Dashnet reached <b>100</b> heralds.", [21, 29], 1), Game.last.pool = "shadow",
	])

	//-------------------------------------------------------------------

	let Achievements = {}
	Game.AchievementsById.forEach(achievement => {
		Achievements[achievement.name] = achievement
	})

	Achievements["Polymath"].order = 6008
	Achievements["Renaissance baker"].order = 6009
	Achievements["The elder scrolls"].order = 6010
	Achievements["Sacrifice"].order = 30015
	Achievements["Oblivion"].order = 30016
	Achievements["From scratch"].order = 30017
	Achievements["Third-party"].order = 30202
	Achievements["Tabloid addiction"].order = 11003
	Achievements["Olden days"].order = 11002

	Achievements["Squeak goes the mouse"].order = 1060
	Achievements["I'm too old for this"].order = 1110
	Achievements["Gorden garden"].order = 1210
	Achievements["A fine mine you got there"].order = 1310
	Achievements["Working 24/7"].order = 1410
	Achievements["My shipment arrives in the morning"].order = 1510
	Achievements["Turning cookies into gold since 2013"].order = 1610
	Achievements["A portal inside of a portal"].order = 1710
	Achievements["It all began on the 8th of August, 2013"].order = 1810
	Achievements["AntimatterCon"].order = 1910
	Achievements["Stop being a prissm"].order = 2010
	Achievements["Bank on it"].order = 1430
	Achievements["Temple pun"].order = 1460
	Achievements["It's magic, Joel!"].order = 1480
	Achievements["And yet you probably never got a blab"].order = 2110
	Achievements["Gouchnox"].order = 2210
	Achievements["Follow the javascript"].order = 2310

	Achievements["Stop it, it clickles"].order = 1010
	Achievements["Keep up the click"].order = 1011
	Achievements["Clicking is the new booping"].order = 1012
	Achievements["The final click"].order = 1013
	Achievements["Sike, thats the wrong achievement"].order = 1014
	Achievements["How about we tap the cookie now"].order = 1015
	Achievements["Cookie Destroyer"].order = 1016
	Achievements["Give it a click"].order = 1017
	Achievements["Clicking Frenzy: Our Lord and Saviour"].order = 1018
	Achievements["Hand-made cookies are still the best"].order = 1019
	Achievements["My strange clicking addiction"].order = 1019

	Achievements["Owner of Buildings"].order = 5010
	Achievements["Build up"].order = 5011
	Achievements["World-dominating company"].order = 5012
	Achievements["Creator of the Cookieverse"].order = 5013
	Achievements["Build until you can't build anymore"].order = 5014
	Achievements["You built the guilt"].order = 5015
	Achievements["Overlord"].order = 5016
	Achievements["That's enough, boss"].order = 5017

	Achievements["Purchaser of Upgrades"].order = 6001
	Achievements["Grade up"].order = 6002
	Achievements["Earth-shattering association"].order = 6003

	Achievements["Sexcentennial"].order = 7003

	Achievements["Heavenly"].order = 30010
	Achievements["Transcendent"].order = 30011
	Achievements["Higher energy state"].order = 30012
	Achievements["Omniverse"].order = 30013
	Achievements["The Ascendant"].order = 30014

	Achievements["Clicker"].order = 1020
	Achievements["Advanced Clicker"].order = 1021
	Achievements["Expert Clicker"].order = 1022

	Achievements["Secret fortune"].order = 32001

	Achievements["Getting fancy"].order = 21101
	Achievements["Emmanuel Macaron"].order = 21102
	Achievements["You wanna be popular?"].order = 21103
	Achievements["Rich butterfingers"].order = 21104
	Achievements["Pastries from the past"].order = 21105
	Achievements["Bake me, maybe?"].order = 21106
	Achievements["Burger Clicker"].order = 21107
	Achievements["Collecting these is like growing plants"].order = 21108

	Achievements["Level 1 complete!"].order = 5017
	Achievements["Five Hive"].order = 5018
	Achievements["This took forever"].order = 5019

	Achievements["Pretty prestige"].order = 6003
	Achievements["Live and learn"].order = 6004
	Achievements["We will stay with you forever"].order = 6005

	Achievements["Purrfect Perfection"].order = 10001
	Achievements["It's sweet, sweet, sweet Synergy"].order = 6006
	Achievements["Out of Energy? Get Synergy!"].order = 6007
	Achievements["All you had to do was ask"].order = 11001

	Achievements["Mod-God complex"].order = 30201

	Object.values(Achievements).forEach(achievement => {
		Game.AchievementsById[achievement.id] = achievement
	})

	//-------------------------------------------------------------------

	if (typeof Darky === 'undefined') {
		Darky = {};
	}
	Darky.prestigeUpgradesOwned = 0;
	let getTotalBuildings = () => {
		let amount = 0
		Game.ObjectsById.forEach(object => { amount += object.amount })
		return amount
	}

	let getMinimalBuildingAmount = () => {
		let minimalAmount = Infinity
		Game.ObjectsById.forEach(object => { minimalAmount = Math.min(minimalAmount, object.amount) })
		return minimalAmount
	}

	//-------------------------------------------------------------------

	Game.customChecks = Game.customChecks.concat([
		function () { var count = 0; for (var i in Game.UpgradesById) { var me = Game.UpgradesById[i]; if (me.bought && me.pool == "prestige") count++; } Darky.prestigeUpgradesOwned = count; },

		function () { if (Game.Objects["Cursor"].amount >= 800) Win("Squeak goes the mouse") },
		function () { if (Game.Objects["Grandma"].amount >= 650) Win("I'm too old for this") },
		function () { if (Game.Objects["Farm"].amount >= 600) Win("Gorden garden") },
		function () { if (Game.Objects["Mine"].amount >= 600) Win("A fine mine you got there") },
		function () { if (Game.Objects["Factory"].amount >= 600) Win("Working 24/7") },
		function () { if (Game.Objects["Bank"].amount >= 600) Win("Bank on it") },
		function () { if (Game.Objects["Temple"].amount >= 600) Win("Temple pun") },
		function () { if (Game.Objects["Wizard tower"].amount >= 600) Win("It's magic, Joel!") },
		function () { if (Game.Objects["Shipment"].amount >= 600) Win("My shipment arrives in the morning") },
		function () { if (Game.Objects["Alchemy lab"].amount >= 600) Win("Turning cookies into gold since 2013") },
		function () { if (Game.Objects["Portal"].amount >= 600) Win("A portal inside of a portal") },
		function () { if (Game.Objects["Time machine"].amount >= 600) Win("It all began on the 8th of August, 2013") },
		function () { if (Game.Objects["Antimatter condenser"].amount >= 600) Win("AntimatterCon") },
		function () { if (Game.Objects["Prism"].amount >= 600) Win("Stop being a prissm") },
		function () { if (Game.Objects["Chancemaker"].amount >= 600) Win("And yet you probably never got a blab") },
		function () { if (Game.Objects["Fractal engine"].amount >= 600) Win("Gouchnox") },
		function () { if (Game.Objects["Javascript console"].amount >= 600) Win("Follow the javascript") },
		function () { if (Game.handmadeCookies >= 100000000000000000000000000000) Win("Stop it, it clickles") },
		function () { if (Game.handmadeCookies >= 10000000000000000000000000000000) Win("Keep up the click") },
		function () { if (Game.handmadeCookies >= 1000000000000000000000000000000000) Win("Clicking is the new booping") },
		function () { if (Game.handmadeCookies >= 100000000000000000000000000000000000) Win("The final click") },
		function () { if (Game.handmadeCookies >= 10000000000000000000000000000000000000) Win("Sike, thats the wrong achievement") },
		function () { if (Game.handmadeCookies >= 1000000000000000000000000000000000000000) Win("How about we tap the cookie now") },
		function () { if (Game.handmadeCookies >= 100000000000000000000000000000000000000000) Win("Cookie Destroyer") },
		function () { if (Game.handmadeCookies >= 10000000000000000000000000000000000000000000) Win("Give it a click") },
		function () { if (Game.handmadeCookies >= 1000000000000000000000000000000000000000000000) Win("Clicking Frenzy: Our Lord and Saviour") },
		function () { if (Game.handmadeCookies >= 100000000000000000000000000000000000000000000000) Win("Hand-made cookies are still the best") },
		function () { if (Game.handmadeCookies >= 10000000000000000000000000000000000000000000000000) Win("My strange clicking addiction") },
		function () { if (getTotalBuildings() >= 3000) Win("Owner of Buildings") },
		function () { if (getTotalBuildings() >= 4000) Win("Build up") },
		function () { if (getTotalBuildings() >= 5000) Win("World-dominating company") },
		function () { if (getTotalBuildings() >= 6000) Win("Creator of the Cookieverse") },
		function () { if (getTotalBuildings() >= 7000) Win("Build until you can't build anymore") },
		function () { if (getTotalBuildings() >= 8000) Win("You built the guilt") },
		function () { if (getTotalBuildings() >= 9000) Win("Overlord") },
		function () { if (getTotalBuildings() >= 10000) Win("That's enough, boss") },
		function () { if (Game.UpgradesOwned >= 300) Win("Purchaser of Upgrades") },
		function () { if (Game.UpgradesOwned >= 400) Win("Grade up") },
		function () { if (Game.UpgradesOwned >= 500) Win("Earth-shattering association") },
		function () { if (getMinimalBuildingAmount() >= 600) Win("Sexcentennial") },
		function () { if (Game.cookieClicks >= 1000) Win("Clicker") },
		function () { if (Game.cookieClicks >= 10000) Win("Advanced Clicker") },
		function () { if (Game.cookieClicks >= 25000) Win("Expert Clicker") },
		function () { if (Game.prestige >= 100) Win("Heavenly") },
		function () { if (Game.prestige >= 10000) Win("Transcendent") },
		function () { if (Game.prestige >= 1000000) Win("Higher energy state") },
		function () { if (Game.prestige >= 100000000) Win("Omniverse") },
		function () { if (Game.prestige >= 10000000000) Win("The Ascendant") },
		function () { if (Game.Has("Lucky digit") && Game.Has("Lucky number") && Game.Has("Lucky payout")) Win("Secret fortune") },
		function () { if (Game.Has("Caramoas") && Game.Has("Sagalongs") && Game.Has("Shortfoils") && Game.Has("Win mints") && Game.Has("Fig gluttons") && Game.Has("Loreols") && Game.Has("Jaffa cakes") && Game.Has("Grease's cups") && Game.Has("Digits") && Game.Has("Bastenaken cookies") && Game.Has("Festivity loops") && Game.Has("Havabreaks") && Game.Has("Zilla wafers") && Game.Has("Dim Dams")) Win("You wanna be popular?") },
		function () { if (Game.Has("Rose macarons") && Game.Has("Lemon macarons") && Game.Has("Chocolate macarons") && Game.Has("Pistachio macarons") && Game.Has("Hazelnut macarons") && Game.Has("Violet macarons") && Game.Has("Caramel macarons") && Game.Has("Licorice macarons")) Win("Emmanuel Macaron") },
		function () { if (Game.Has("British tea biscuits") && Game.Has("Chocolate british tea biscuits") && Game.Has("Round british tea biscuits") && Game.Has("Round chocolate british tea biscuits") && Game.Has("Round british tea biscuits with heart motif") && Game.Has("Round chocolate british tea biscuits with heart motif")) Win("Getting fancy") },
		function () { if (Game.Has("Butter horseshoes") && Game.Has("Butter pucks") && Game.Has("Butter knots") && Game.Has("Butter slabs") && Game.Has("Butter swirls")) Win("Rich butterfingers") },
		function () { if (Game.Has("Profiteroles") && Game.Has("Jelly donut") && Game.Has("Glazed donut") && Game.Has("Chocolate cake") && Game.Has("Strawberry cake") && Game.Has("Apple pie") && Game.Has("Lemon meringue pie") && Game.Has("Butter croissant")) Win("Pastries from the past") },
		function () { if (Game.Has("Cookie dough") && Game.Has("Burnt cookie") && Game.Has("A chocolate chip cookie but with the chips picked off for some reason") && Game.Has("Flavor text cookie") && Game.Has("High-definition cookie") && Game.Has("Crackers")) Win("Bake me, maybe?") },
		function () { if (Game.Has("Toast") && Game.Has("Peanut butter & jelly") && Game.Has("Wookies") && Game.Has("Cheeseburger") && Game.Has("One lone chocolate chip") && Game.Has("Pizza") && Game.Has("Candy")) Win("Burger Clicker") },
		function () { if (Game.Has("Elderwort biscuits") && Game.Has("Bakeberry cookies") && Game.Has("Wheat slims") && Game.Has("Duketater cookies") && Game.Has("Green yeast digestives") && Game.Has("Fern tea") && Game.Has("Ichor syrup")) Win("Collecting these is like growing plants") },
		function () { if (Game.Objects["Cursor"].level && Game.Objects["Grandma"].level && Game.Objects["Farm"].level && Game.Objects["Factory"].level && Game.Objects["Mine"].level && Game.Objects["Bank"].level && Game.Objects["Temple"].level && Game.Objects["Wizard tower"].level && Game.Objects["Shipment"].level && Game.Objects["Alchemy lab"].level && Game.Objects["Portal"].level && Game.Objects["Time machine"].level && Game.Objects["Antimatter condenser"].level && Game.Objects["Prism"].level && Game.Objects["Chancemaker"] && Game.Objects["Fractal engine"].level && Game.Objects["Javascript console"].level >= 1) Win("Level 1 complete!") },
		function () { if (Game.Objects["Cursor"].level && Game.Objects["Grandma"].level && Game.Objects["Farm"].level && Game.Objects["Factory"].level && Game.Objects["Mine"].level && Game.Objects["Bank"].level && Game.Objects["Temple"].level && Game.Objects["Wizard tower"].level && Game.Objects["Shipment"].level && Game.Objects["Alchemy lab"].level && Game.Objects["Portal"].level && Game.Objects["Time machine"].level && Game.Objects["Antimatter condenser"].level && Game.Objects["Prism"].level && Game.Objects["Chancemaker"] && Game.Objects["Fractal engine"].level && Game.Objects["Javascript console"].level >= 5) Win("Five Hive") },
		function () { if (Game.Objects["Cursor"].level && Game.Objects["Grandma"].level && Game.Objects["Farm"].level && Game.Objects["Factory"].level && Game.Objects["Mine"].level && Game.Objects["Bank"].level && Game.Objects["Temple"].level && Game.Objects["Wizard tower"].level && Game.Objects["Shipment"].level && Game.Objects["Alchemy lab"].level && Game.Objects["Portal"].level && Game.Objects["Time machine"].level && Game.Objects["Antimatter condenser"].level && Game.Objects["Prism"].level && Game.Objects["Chancemaker"] && Game.Objects["Fractal engine"].level && Game.Objects["Javascript console"].level >= 10) Win("This took forever") },
		function () { if (Darky.prestigeUpgradesOwned >= 15) Win("Pretty prestige") },
		function () { if (Darky.prestigeUpgradesOwned >= 30) Win("Live and learn") },
		function () { if (Darky.prestigeUpgradesOwned >= 60) Win("We will stay with you forever") },
		function () { if (Game.Has("Kitten helpers") && Game.Has("Kitten workers") && Game.Has("Kitten engineers") && Game.Has("Kitten overseers") && Game.Has("Kitten managers") && Game.Has("Kitten accountants") && Game.Has("Kitten specialists") && Game.Has("Kitten experts") && Game.Has("Kitten consultants") && Game.Has("Kitten assistants to the regional manager") && Game.Has("Kitten marketeers") && Game.Has("Kitten analysts") && Game.Has("Kitten executives") && Game.Has("Fortune #103") && Game.Has("Kitten angels")) Win("Purrfect Perfection") },
		function () { if (Game.Has("Future almanacs") && Game.Has("Seismic magic") && Game.Has("Quantum electronics") && Game.Has("Contracts from beyond") && Game.Has("Paganism") && Game.Has("Arcane knowledge") && Game.Has("Fossil fuels") && Game.Has("Primordial ores") && Game.Has("Infernal crops") && Game.Has("Relativistic parsec-skipping") && Game.Has("Extra physics funding") && Game.Has("Light magic") && Game.Has("Gemmed talismans") && Game.Has("Recursive mirrors") && Game.Has("Script grannies")) Win("It's sweet, sweet, sweet Synergy") },
		function () { if (Game.Has("Rain prayer") && Game.Has("Asteroid mining") && Game.Has("Temporal overclocking") && Game.Has("Printing presses") && Game.Has("God particle") && Game.Has("Magical botany") && Game.Has("Shipyards") && Game.Has("Gold fund") && Game.Has("Abysmal glimmer") && Game.Has("Primeval glow") && Game.Has("Chemical proficiency") && Game.Has("Mystical energies") && Game.Has("Charm quarks") && Game.Has("Mice clicking mice") && Game.Has("Tombola computing")) Win("Out of Energy? Get Synergy!") },

		function () { if (Game.goldenClicks >= 77777) Win("Golden Jackpot") },
		function () { if (name == "darky") Win("Mod-God complex") },
		function () { if (Game.heralds >= 10) Win("I like playing supportive characters") },
		function () { if (Game.heralds >= 25) Win("That's a lot of money") },
		function () { if (Game.heralds >= 50) Win("You really want us to make games for you, huh?") },
		function () { if (Game.heralds >= 100) Win("Thank you guys so much!") },
	])

	//-------------------------------------------------------------------

	DarkySavePrefix = "DarkyPackage";

	DarkyAchievSaveConfig = function () {
		localStorage.setItem(DarkySavePrefix, JSON.stringify(DarkySave));
	}

	DarkyAchievSaveDefault = function () {
		if (typeof DarkySave === 'undefined') {
			DarkySave = {};
		}
		
		DarkySave.Achievements = {};
		for (var i in Game.Achievements) {
			var me = Game.Achievements[i];
			if (me.darky == 1) {
				DarkySave.Achievements[me.name] = 0;
			}
		}
		DarkyAchievSaveConfig();
	}

	DarkyAchievLoadConfig = function () {
		if (localStorage.getItem(DarkySavePrefix) != null) {
			DarkySave = JSON.parse(localStorage.getItem(DarkySavePrefix));
			if (typeof DarkySave.Achievements === 'undefined') {
				DarkySave.Achievements = {};
			}
			for (var i in Game.Achievements) {
				var me = Game.Achievements[i];
				if (me.darky == 1) {
					if (typeof DarkySave.Achievements[me.name] === "undefined") {
						DarkySave.Achievements[me.name] = 0;
						DarkyAchievSaveConfig();
					}
					else if (DarkySave.Achievements[me.name] == 1) {
						Win(me.name);
					}
				}
			}
		}
		else {
			DarkyAchievSaveDefault();
		}
	}

	let oldReset = Game.HardReset
	Game.HardReset = new Proxy(oldReset, {
		apply: function (func, thisArg, args) {
			if (args[0] == 2) {
				DarkyAchievSaveDefault();
			}
			return func.apply(thisArg, args);
		}
	})

	DarkyAchievLoadConfig();
	
	DarkyAchievMigrateOldSave = function () {	
		for (var i in Game.Achievements) {
			var me = Game.Achievements[i];
			if (me.darky == 1) {
				if (typeof DarkySave[me.name] !== "undefined") {
					DarkySave.Achievements[me.name] = DarkySave[me.name];
					if (DarkySave[me.name]) {
						Win(me.name);
					}
					delete DarkySave[me.name];
				}
			}
		}
		DarkyAchievSaveConfig();
	}
	DarkyAchievMigrateOldSave();

	//-------------------------------------------------------------------

	Game.Win("Third-party")
	Game.Notify("Darky's Achievement Package 1.6", " <b>73</b> new Achievements have been added, enjoy and thank you for using my mod!", [17, 26, "https://i.imgur.com/3jNJJNw.png"]);
	PlaySound("https://freesound.org/data/previews/203/203121_777645-lq.mp3");
}
