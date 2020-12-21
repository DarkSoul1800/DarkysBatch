{
	let Upgrade = function(name, desc, price, icon, buyFunction) {
		let answer = new Game.Upgrade(name, desc, price, icon, buyFunction);
		
		answer.darky = 1;
		
		return answer;
	}

	let TieredUpgrade = function(name, desc, building, tier) {
		let answer = new Game.TieredUpgrade(name, desc, building, tier);
		
		answer.darky = 1;
		
		return answer;
	}
	
	let Unlock = function(what) {
		Game.Unlock(what);
		if (typeof Game.Upgrades[what] !== "undefined" && Game.Upgrades[what].darky == 1) {
			DarkySave.Upgrades[what].unlocked = 1;
			DarkyUpgradesSaveConfig();
		}
	}

	let oldBuy = Game.Upgrade.prototype.buy;
	Game.Upgrade.prototype.buy = new Proxy(oldBuy, {
		apply: function (func, thisArg, args) {
			let answer = func.apply(thisArg, args);
			if (answer) {
				DarkySave.Upgrades[thisArg.name].bought = 1;
			}
			return answer;
		}
	})

	eval("Game.crate =" + Game.crate.toString().split("classes+=' upgrade';").join("classes+=' upgrade';\nif (me.darky == 1) classes+=' darky';//Darky's upgrade package injection"));
	
	if (typeof Darky === 'undefined') {
		let style = document.createElement("style");
		style.type = "text/css";
		style.textContent = ".darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}";
		document.head.appendChild(style);
	}

	if (typeof Darky === 'undefined') {
		Darky = {};
	}

	//-------------------------------------------------------------------

	if(!Game.customCrate) Game.customCrate = []
	Game.customCrate = Game.customCrate.concat([

		// ~ ~ ~ ORIGINAL ~ ~ ~ 

		new Upgrade('Building up','Everything is more efficient per building owned.<q>I can already feel the power building up.</q>',1000000,[2,6]), //No idea how to make this one work at all, help would be appreciated! The idea was that Everything is 0.005% more efficient per building.

		// ~ ~ ~ TIERED ~ ~ ~ 

		//new Upgrade('Nonillion fingers','The mouse and cursors gain <b>+50000000</b> cookies for each non-cursor object owned.<q>That\'s quite the finger power.</q>',10000000000000000000000000,[13,19]),Game.MakeTiered(Game.last,13,0),
		//new Upgrade('Loyalystic mouse','Clicking gains <b>+1% of your CpS</b>.<q>A true, true mouse.</q>',50000000000000000000000000000,[11,31]),Game.MakeTiered(Game.last,13,11),
		new TieredUpgrade('Granny talk','Grandmas are <b>twice</b> as efficient.<q>Only a few have survived.</q>','Grandma',13),
		//new TieredUpgrade('Bing bang bingo','Grandmas are <b>twice</b> as efficient.<q>You would think this is some kind of upgraded and hot, new bingo game but you\'d be wrong my friend. This is a SOAP for GRANNIES!</q>','Grandma',13),
		new TieredUpgrade('Chocolate chip seeds','Farms are <b>twice</b> as efficient.<q>Makes sense, right?</q>','Farm',13),
		//new TieredUpgrade('Bulldoughzer','Farms are <b>twice</b> as efficient.<q>A modified tractor pretty much, doing its job.</q>','Farm',13),
		new TieredUpgrade('Omegadrill','Mines are <b>twice</b> as efficient.<q>It\'s coming in late but we go it.</q>','Mine',13),
		//new TieredUpgrade('Miner\'s delight','Mines are <b>twice</b> as efficient.<q>Who would\'ve thought that a child\'s weird mixture of random things could turn out to be an excellent energy drink for miners and miners only. Too bad we can\'t share the recipe with anyone else.</q>','Mine',13),
		new TieredUpgrade('Pumping out new workers','Factories are <b>twice</b> as efficient.<q>Yes, we no longer need the birds and the bees, we can just create life itself!</q>','Factory',13),
		//new TieredUpgrade('Rainbow factory','Factories are <b>twice</b> as efficient.<q>Dreams come true, little one.</q>','Factory',13),
		new TieredUpgrade('Baking the dough','Banks are <b>twice</b> as efficient.<q>Instead of making the bucks.</q>','Bank',13),
		//new TieredUpgrade('Cookie credit cards','Banks are <b>twice</b> as efficient.<q>They say doing this is a bad idea but come on, we are converting everything into cookies now so why not?</q>','Bank',13),
		new TieredUpgrade('Cookie cults','Temples are <b>twice</b> as efficient.<q>Every sunday they meet to bake in secret.</q>','Temple',13),
		//new TieredUpgrade('Baking bible','Temples are <b>twice</b> as efficient.<q>Ancient stories about old ladies baking for the poor and getting murdered for doing so. Or maybe they just died of old age.</q>','Temple',13),
		new TieredUpgrade('Trix™️','Wizard towers are <b>twice</b> as efficient.<q>Brand cookies which taste pretty bad but not taken off the market for some reason. These darn wizards and their silly magic, keeping their brand cookies alive with their magic!</q>','Wizard tower',13),
		//new TieredUpgrade('Fixing misspellings in spells','Wizard towers are <b>twice</b> as efficient.<q>How are spells supposed to work if said spells have misspellings in them?</q>','Wizard tower',13),
		new TieredUpgrade('Hyperspeed','Shipments are <b>twice</b> as efficient.<q>HYPE, HYPE, HYPE, HYPE!</q>','Shipment',13),
		//new TieredUpgrade('10 seconds flat','Shipments are <b>twice</b> as efficient.<q>Zap Zap, to the end of the universe and back.</q>','Shipment',13),
		new TieredUpgrade('The way we make golden cookies','Alchemy labs are <b>twice</b> as efficient.<q>[REDACTED]</q>','Alchemy lab',13),
		//new TieredUpgrade('Eggheads','Alchemy labs are <b>twice</b> as efficient.<q>Crack them open, use them for baking.</q>','Alchemy lab',13),
		new TieredUpgrade('Portal to nowhere','Portals are <b>twice</b> as efficient.<q>A quiet place to store the cookies. I don\'t know why you would want to do that though.</q>','Portal',13),
		//new TieredUpgrade('Port Al','Portals are <b>twice</b> as efficient.<q>Al Port, claims he discovered the portals and named them after himself. Staff is no longer allowed to bring in homeless people.</q>','Portal',13),
		new TieredUpgrade('Year of the weekly months without the days','Time machines are <b>twice</b> as efficient.<q>Counting the hourly seconds by minutes.</q>','Time machine',13),
		//new TieredUpgrade('Decaying decades','Time machines are <b>twice</b> as efficient.<q>Each decade, we start to rot more. We stink, get dirty. Even cookies aren\'t save from this fate.</q>','Time machine',13),
		new TieredUpgrade('Bake matter','Antimatter condensers are <b>twice</b> as efficient.<q>Just a bunch of tiny balls during scientific baking.</q>','Antimatter condenser',13),
		//new TieredUpgrade('NERDS: Cookies','Antimatter condensers are <b>twice</b> as efficient.<q>Not the greatest idea we had.</q>','Antimatter condenser',13),
		new TieredUpgrade('Shiny!!','Prisms are <b>twice</b> as efficient.<q>Let\'s baking!</q>','Prism',13),
		//new TieredUpgrade('Colorful arrangement','Prisms are <b>twice</b> as efficient.<q>Also known as: Rainbow.</q>','Prism',13),
		new TieredUpgrade('Casino fever','Chancemakers are <b>twice</b> as efficient.<q>A dangerous place for your wallet has become heaven on earth for it.</q>','Chancemaker',13),
		//new TieredUpgrade('Odd-ifiers','Chancemakers are <b>twice</b> as efficient.<q>No longer shall you ask "What are the odds?" with this!</q>','Chancemaker',13),
		new TieredUpgrade('Big brain time','Fractal engines are <b>twice</b> as efficient.<q>Think thonk.</q>','Fractal engine',13),
		//new TieredUpgrade('Nora','Fractal engines are <b>twice</b> as efficient.<q>Fractals are her specialty.</q>','Fractal engine',13),
		new TieredUpgrade('Darky can\'t actually code','Javascript consoles are <b>twice</b> as efficient.<q>He just happened to be smart enough to make both an achievement and upgrade mod for Cookie Clicker.</q>','Javascript console',13),
		//new TieredUpgrade('new Game.TieredUpgrade','Javascript consoles are <b>twice</b> as efficient.<q>I am so tiered of this.</q>','Javascript console',13),

	])

	//-------------------------------------------------------------------

	//Game.Upgrades['Nonillion fingers'].order=113
	//Game.Upgrades['Loyalystic mouse'].order=163
	Game.Upgrades['Granny talk'].order=201
	//Game.Upgrades['Bing bang bingo'].order=202
	Game.Upgrades['Chocolate chip seeds'].order=301
	//Game.Upgrades['Bulldoughzer'].order=302
	Game.Upgrades['Omegadrill'].order=401
	//Game.Upgrades['Miner\'s delight'].order=402
	Game.Upgrades['Pumping out new workers'].order=501
	//Game.Upgrades['Rainbow factory'].order=502
	Game.Upgrades['Baking the dough'].order=526
	//Game.Upgrades['Cookie credit cards'].order=527
	Game.Upgrades['Cookie cults'].order=551
	//Game.Upgrades['Baking bible'].order=552
	Game.Upgrades['Trix™️'].order=576
	//Game.Upgrades['Fixing misspellings in spells'].order=577
	Game.Upgrades['Hyperspeed'].order=601
	//Game.Upgrades['10 seconds flat'].order=602
	Game.Upgrades['The way we make golden cookies'].order=701
	//Game.Upgrades['Eggheads'].order=702
	Game.Upgrades['Portal to nowhere'].order=801
	//Game.Upgrades['Port Al'].order=802
	Game.Upgrades['Year of the weekly months without the days'].order=901
	//Game.Upgrades['Decaying decades'].order=902
	Game.Upgrades['Bake matter'].order=1001
	//Game.Upgrades['NERDS: Cookies'].order=1002
	Game.Upgrades['Shiny!!'].order=1101
	//Game.Upgrades['Colorful arrangement'].order=1102
	Game.Upgrades['Casino fever'].order=1201
	//Game.Upgrades['Odd-ifiers'].order=1202
	Game.Upgrades['Big brain time'].order=1301
	//Game.Upgrades['Nora'].order=1302
	Game.Upgrades['Darky can\'t actually code'].order=1401
	//Game.Upgrades['new Game.TieredUpgrade'].order=1402

	//-------------------------------------------------------------------

	Game.customChecks = Game.customChecks.concat([
		//function(){if (Game.Objects['Cursor'].amount+Game.Objects['Grandma'].amount+Game.Objects['Farm'].amount+Game.Objects['Factory'].amount+Game.Objects['Mine'].amount+Game.Objects['Bank'].amount+Game.Objects['Temple'].amount+Game.Objects['Wizard tower'].amount+Game.Objects['Shipment'].amount+Game.Objects['Alchemy lab'].amount+Game.Objects['Portal'].amount+Game.Objects['Time machine'].amount+Game.Objects['Antimatter condenser'].amount+Game.Objects['Prism'].amount+Game.Objects['Chancemaker'].amount+Game.Objects['Fractal engine'].amount+Game.Objects['Javascript console'].amount>=100) Unlock('Building up')},

		//function(){if (Game.Objects['Cursor'].amount>=450) Unlock('Nonillion fingers')},
		//function(){if (Game.handmadeCookies>=1000000000000000000000000000) Unlock('Loyalystic mouse')},
		function(){if (Game.Objects['Grandma'].amount>=500) Unlock('Granny talk')},
		//function(){if (Game.Objects['Grandma'].amount>=500) Unlock('Bing bang bingo')},
		function(){if (Game.Objects['Farm'].amount>=500) Unlock('Chocolate chip seeds')},
		//function(){if (Game.Objects['Farm'].amount>=500) Unlock('Bulldoughzer')},
		function(){if (Game.Objects['Mine'].amount>=500) Unlock('Omegadrill')},
		//function(){if (Game.Objects['Mine'].amount>=500) Unlock('Miner\'s delight')},
		function(){if (Game.Objects['Factory'].amount>=500) Unlock('Pumping out new workers')},
		//function(){if (Game.Objects['Factory'].amount>=500) Unlock('Rainbow factory')},
		function(){if (Game.Objects['Bank'].amount>=500) Unlock('Baking the dough')},
		//function(){if (Game.Objects['Bank'].amount>=500) Unlock('Cookie credit cards')},
		function(){if (Game.Objects['Temple'].amount>=500) Unlock('Cookie cults')},
		//function(){if (Game.Objects['Temple'].amount>=500) Unlock('Baking bible')},
		function(){if (Game.Objects['Wizard tower'].amount>=500) Unlock('Trix™️')},
		//function(){if (Game.Objects['Wizard tower'].amount>=500) Unlock('Fixing misspellings in spells')},
		function(){if (Game.Objects['Shipment'].amount>=500) Unlock('Hyperspeed')},
		//function(){if (Game.Objects['Shipment'].amount>=500) Unlock('10 seconds flat')},
		function(){if (Game.Objects['Alchemy lab'].amount>=500) Unlock('The way we make golden cookies')},
		//function(){if (Game.Objects['Alchemy lab'].amount>=500) Unlock('Eggheads')},
		function(){if (Game.Objects['Portal'].amount>=500) Unlock('Portal to nowhere')},
		//function(){if (Game.Objects['Portal'].amount>=500) Unlock('Port Al')},
		function(){if (Game.Objects['Time machine'].amount>=500) Unlock('Year of the weekly months without the days')},
		//function(){if (Game.Objects['Time machine'].amount>=500) Unlock('Decaying decades')},
		function(){if (Game.Objects['Antimatter condenser'].amount>=500) Unlock('Bake matter')},
		//function(){if (Game.Objects['Antimatter condenser'].amount>=500) Unlock('NERDS: Cookies')},
		function(){if (Game.Objects['Prism'].amount>=500) Unlock('Shiny!!')},
		//function(){if (Game.Objects['Prism'].amount>=500) Unlock('Colorful arrangement')},
		function(){if (Game.Objects['Chancemaker'].amount>=500) Unlock('Casino fever')},
		//function(){if (Game.Objects['Chancemaker'].amount>=500) Unlock('Odd-ifiers')},
		function(){if (Game.Objects['Fractal engine'].amount>=500) Unlock('Big brain time')},
		//function(){if (Game.Objects['Fractal engine'].amount>=500) Unlock('Nora')},
		function(){if (Game.Objects['Javascript console'].amount>=500) Unlock('Darky can\'t actually code')},
		//function(){if (Game.Objects['Javascript console'].amount>=500) Unlock('new Game.TieredUpgrade')},
	])

	//-------------------------------------------------------------------

	//eval("Game.mouseCps =" + Game.mouseCps.toString().split("Octillion fingers')) add+=	5000000;").join("Octillion fingers')) add+=	5000000;\nif (Game.Has('Nonillion fingers')) add+=	50000000; //Darky's upgrade package injection").split("Plasmarble mouse')) add+=Game.cookiesPs*0.01;").join("Plasmarble mouse')) add+=Game.cookiesPs*0.01;\nif (Game.Has('Loyalystic mouse')) add+=Game.cookiesPs*0.01; //Darky's upgrade package injection"));
	//eval("Game.Objects[\"Cursor\"].cps =" + Game.Objects["Cursor"].cps.toString().split("Octillion fingers')) add+=	5000000;").join("Octillion fingers')) add+=	5000000;\nif (Game.Has('Nonillion fingers')) add+=	50000000; //Darky's upgrade package injection"));

	//-------------------------------------------------------------------

	DarkySavePrefix = "DarkyPackage";

	DarkyUpgradesSaveConfig = function () {
		localStorage.setItem(DarkySavePrefix, JSON.stringify(DarkySave));
	}

	DarkyUpgradesSaveDefault = function () {
		if (typeof DarkySave === 'undefined') {
			DarkySave = {};
		}
		
		DarkySave.Upgrades = {};
		for (var i in Game.Upgrades) {
			var me = Game.Upgrades[i];
			if (me.darky == 1) {
				DarkySave.Upgrades[me.name] = {};
				DarkySave.Upgrades[me.name].unlocked = 0;
				DarkySave.Upgrades[me.name].bought = 0;
			}
		}
		DarkyUpgradesSaveConfig();
	}

	DarkyUpgradesLoadConfig = function () {
		if (localStorage.getItem(DarkySavePrefix) != null) {
			DarkySave = JSON.parse(localStorage.getItem(DarkySavePrefix));
			if (typeof DarkySave.Upgrades === 'undefined') {
				DarkySave.Upgrades = {};
			}
			for (var i in Game.Upgrades) {
				var me = Game.Upgrades[i];
				if (me.darky == 1) {
					if (typeof DarkySave.Upgrades[me.name] === "undefined") {
						DarkySave.Upgrades[me.name] = {};
						DarkySave.Upgrades[me.name].unlocked = 0;
						DarkySave.Upgrades[me.name].bought = 0;
						DarkyUpgradesSaveConfig();
					}
					else {
						if (DarkySave.Upgrades[me.name].unlocked == 1) {
							Unlock(me.name);
						}
						if (DarkySave.Upgrades[me.name].bought == 1) {
							Game.Upgrades[me.name].bought = 1;
						}
					}
				}
			}
		}
		else {
			DarkyUpgradesSaveDefault();
		}
	}

	let oldReset = Game.HardReset;
	Game.HardReset = new Proxy(oldReset, {
		apply: function (func, thisArg, args) {
			if (args[0] == 2) {
				DarkyUpgradesSaveDefault();
			}
			return func.apply(thisArg, args);
		}
	})

	DarkyUpgradesLoadConfig();
}

	//-------------------------------------------------------------------

	Game.Win("Third-party")
	Game.Notify("Darky's Armful Collection of Upgrades 1.1", " <b>16</b> new Upgrades have been added, enjoy and thank you for using my mod!", [19, 26, "https://i.imgur.com/3jNJJNw.png"]);
	PlaySound("https://freesound.org/data/previews/172/172589_71257-lq.mp3");
