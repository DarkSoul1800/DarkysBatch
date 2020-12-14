{
    const DarkysUpgradeCollection = {};

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
        if (Game.Upgrades[what] && Game.Upgrades[what].darky === 1) {
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

    if (typeof Darky === "undefined") {
        const style = document.createElement("style");
        style.textContent =
            ".darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}";
        document.head.appendChild(style);
    }

    if (typeof Darky === "undefined") {
        Darky = {};
    }
    // -------------------------------------------------------------------
    if (!Game.customCrate) Game.customCrate = [];
    Game.customCrate = Game.customCrate.concat([
        // ~ ~ ~ ORIGINAL ~ ~ ~
        // No idea how to make this one work at all, help would be appreciated! The idea was that Everything is 0.005% more efficient per building.
        // new Upgrade(
        //     "Building up",
        //     "Everything is more efficient per building owned.<q>I can already feel the power building up.</q>",
        //     1000000,
        //     [2, 6]
        // ),
        // ~ ~ ~ TIERED ~ ~ ~
        // new Upgrade(
        //     "Nonillion fingers",
        //     "The mouse and cursors gain <b>+50000000</b> cookies for each non-cursor object owned.<q>That's quite the finger power.</q>",
        //     10000000000000000000000000,
        //     [13, 19]
        // ),
        // Game.MakeTiered(Game.last, 13, 0),
        // new Upgrade(
        //     "Loyalystic mouse",
        //     "Clicking gains <b>+1% of your CpS</b>.<q>A true, true mouse.</q>",
        //     50000000000000000000000000000,
        //     [11, 31]
        // ),
        // Game.MakeTiered(Game.last, 13, 11),
        new TieredUpgrade(
            "Granny talk",
            "Grandmas are <b>twice</b> as efficient.<q>Only a few have survived.</q>",
            "Grandma",
            13
        ),
        new TieredUpgrade(
            "Chocolate chip seeds",
            "Farms are <b>twice</b> as efficient.<q>Makes sense, right?</q>",
            "Farm",
            13
        ),
        new TieredUpgrade(
            "Omegadrill",
            "Mines are <b>twice</b> as efficient.<q>It's coming in late but we go it.</q>",
            "Mine",
            13
        ),
        new TieredUpgrade(
            "Pumping out new workers",
            "Factories are <b>twice</b> as efficient.<q>Yes, we no longer need the birds and the bees, we can just create life itself!</q>",
            "Factory",
            13
        ),
        new TieredUpgrade(
            "Baking the dough",
            "Banks are <b>twice</b> as efficient.<q>Instead of making the bucks.</q>",
            "Bank",
            13
        ),
        new TieredUpgrade(
            "Cookie cults",
            "Temples are <b>twice</b> as efficient.<q>Every sunday they meet to bake in secret.</q>",
            "Temple",
            13
        ),
        new TieredUpgrade(
            "Trix™️",
            "Wizard towers are <b>twice</b> as efficient.<q>Brand cookies which taste pretty bad but not taken off the market for some reason. These darn wizards and their silly magic, keeping their brand cookies alive with their magic!</q>",
            "Wizard tower",
            13
        ),
        new TieredUpgrade(
            "Hyperspeed",
            "Shipments are <b>twice</b> as efficient.<q>HYPE, HYPE, HYPE, HYPE!</q>",
            "Shipment",
            13
        ),
        new TieredUpgrade(
            "The way we make golden cookies",
            "Alchemy labs are <b>twice</b> as efficient.<q>[REDACTED]</q>",
            "Alchemy lab",
            13
        ),
        new TieredUpgrade(
            "Portal to nowhere",
            "Portals are <b>twice</b> as efficient.<q>A quiet place to store the cookies. I don't know why you would want to do that though.</q>",
            "Portal",
            13
        ),
        new TieredUpgrade(
            "Year of the weekly months without the days",
            "Time machines are <b>twice</b> as efficient.<q>Counting the hourly seconds by minutes.</q>",
            "Time machine",
            13
        ),
        new TieredUpgrade(
            "Bake matter",
            "Antimatter condensers are <b>twice</b> as efficient.<q>Just a bunch of tiny balls during scientific baking.</q>",
            "Antimatter condenser",
            13
        ),
        new TieredUpgrade("Shiny!!", "Prisms are <b>twice</b> as efficient.<q>Let's baking!</q>", "Prism", 13),
        new TieredUpgrade(
            "Casino fever",
            "Chancemakers are <b>twice</b> as efficient.<q>A dangerous place for your wallet has become heaven on earth for it.</q>",
            "Chancemaker",
            13
        ),
        new TieredUpgrade(
            "Big brain time",
            "Fractal engines are <b>twice</b> as efficient.<q>Think thonk.</q>",
            "Fractal engine",
            13
        ),
        new TieredUpgrade(
            "Darky can't actually code",
            "Javascript consoles are <b>twice</b> as efficient.<q>He just happened to be smart enough to make both an achievement and upgrade mod for Cookie Clicker.</q>",
            "Javascript console",
            13
        ),
    ]);
    // -------------------------------------------------------------------
    // Game.Upgrades["Nonillion fingers"].order = 113;
    // Game.Upgrades["Loyalystic mouse"].order = 163;
    Game.Upgrades["Granny talk"].order = 201;
    Game.Upgrades["Chocolate chip seeds"].order = 301;
    Game.Upgrades["Omegadrill"].order = 401;
    Game.Upgrades["Pumping out new workers"].order = 501;
    Game.Upgrades["Baking the dough"].order = 526;
    Game.Upgrades["Cookie cults"].order = 551;
    Game.Upgrades["Trix™️"].order = 576;
    Game.Upgrades["Hyperspeed"].order = 601;
    Game.Upgrades["The way we make golden cookies"].order = 701;
    Game.Upgrades["Portal to nowhere"].order = 801;
    Game.Upgrades["Year of the weekly months without the days"].order = 901;
    Game.Upgrades["Bake matter"].order = 1001;
    Game.Upgrades["Shiny!!"].order = 1101;
    Game.Upgrades["Casino fever"].order = 1201;
    Game.Upgrades["Big brain time"].order = 1301;
    Game.Upgrades["Darky can't actually code"].order = 1401;
    // -------------------------------------------------------------------
    Game.customChecks = Game.customChecks.concat([
        // () => {
        //     if (
        //         Game.Objects["Cursor"].amount +
        //             Game.Objects["Grandma"].amount +
        //             Game.Objects["Farm"].amount +
        //             Game.Objects["Factory"].amount +
        //             Game.Objects["Mine"].amount +
        //             Game.Objects["Bank"].amount +
        //             Game.Objects["Temple"].amount +
        //             Game.Objects["Wizard tower"].amount +
        //             Game.Objects["Shipment"].amount +
        //             Game.Objects["Alchemy lab"].amount +
        //             Game.Objects["Portal"].amount +
        //             Game.Objects["Time machine"].amount +
        //             Game.Objects["Antimatter condenser"].amount +
        //             Game.Objects["Prism"].amount +
        //             Game.Objects["Chancemaker"].amount +
        //             Game.Objects["Fractal engine"].amount +
        //             Game.Objects["Javascript console"].amount >=
        //         100
        //     ) {
        //         Unlock("Building up");
        //     }
        // },
        // () => {
        //     if (Game.Objects["Cursor"].amount >= 450) {
        //         Unlock("Nonillion fingers");
        //     }
        // },
        // () => {
        //     if (Game.handmadeCookies >= 1e27) {
        //         Unlock("Loyalystic mouse");
        //     }
        // },
        () => {
            if (Game.Objects["Grandma"].amount >= 500) {
                Unlock("Granny talk");
            }
        },
        () => {
            if (Game.Objects["Farm"].amount >= 500) {
                Unlock("Chocolate chip seeds");
            }
        },
        () => {
            if (Game.Objects["Mine"].amount >= 500) {
                Unlock("Omegadrill");
            }
        },
        () => {
            if (Game.Objects["Factory"].amount >= 500) {
                Unlock("Pumping out new workers");
            }
        },
        () => {
            if (Game.Objects["Bank"].amount >= 500) {
                Unlock("Baking the dough");
            }
        },
        () => {
            if (Game.Objects["Temple"].amount >= 500) {
                Unlock("Cookie cults");
            }
        },
        () => {
            if (Game.Objects["Wizard tower"].amount >= 500) {
                Unlock("Trix™️");
            }
        },
        () => {
            if (Game.Objects["Shipment"].amount >= 500) {
                Unlock("Hyperspeed");
            }
        },
        () => {
            if (Game.Objects["Alchemy lab"].amount >= 500) {
                Unlock("The way we make golden cookies");
            }
        },
        () => {
            if (Game.Objects["Portal"].amount >= 500) {
                Unlock("Portal to nowhere");
            }
        },
        () => {
            if (Game.Objects["Time machine"].amount >= 500) {
                Unlock("Year of the weekly months without the days");
            }
        },
        () => {
            if (Game.Objects["Antimatter condenser"].amount >= 500) {
                Unlock("Bake matter");
            }
        },
        () => {
            if (Game.Objects["Prism"].amount >= 500) {
                Unlock("Shiny!!");
            }
        },
        () => {
            if (Game.Objects["Chancemaker"].amount >= 500) {
                Unlock("Casino fever");
            }
        },
        () => {
            if (Game.Objects["Fractal engine"].amount >= 500) {
                Unlock("Big brain time");
            }
        },
        () => {
            if (Game.Objects["Javascript console"].amount >= 500) {
                Unlock("Darky can't actually code");
            }
        },
    ]);
    // -------------------------------------------------------------------
    DarkysUpgradeCollection.save = () => {
        const DarkySave = {};

        Game.UpgradesById.forEach(upgrade => {
            if (upgrade.darky && upgrade.unlocked) {
                const formattedName = upgrade.name
                    .toLowerCase()
                    .replace(/\s+(.)/g, (match, group) => group.toUpperCase());

                Object.assign(DarkySave, {
                    [formattedName]: !!upgrade.bought,
                });
            }
        });

        return JSON.stringify(DarkySave);
    };
    DarkysUpgradeCollection.load = saveString => {
        const save = JSON.parse(saveString);

        const entries = Object.keys(save);
        const names = Object.keys(save).map(upgradeName => {
            const sentenceCase = upgradeName.replace(/([A-Z])/g, (group, match) => ` ${match.toLowerCase()}`);
            const normalName = sentenceCase.charAt(0).toUpperCase() + sentenceCase.slice(1);

            return normalName;
        });

        entries.forEach((upgrade, index) => {
            const upgradeName = names[index];
            Unlock(upgradeName);

            if (save[upgrade] === true) {
                Game.Upgrades[upgradeName].bought = 1;
            }
        });
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
    // -------------------------------------------------------------------
    Game.registerMod("Darkys Upgrade Collection", DarkysUpgradeCollection);
    Game.Notify(
        "Darky's Armful Collection of Upgrades 1.1",
        " <b>16</b> new Upgrades have been added, enjoy and thank you for using my mod!",
        [19, 26, "https://i.imgur.com/3jNJJNw.png"]
    );
    PlaySound("https://freesound.org/data/previews/172/172589_71257-lq.mp3");
}
