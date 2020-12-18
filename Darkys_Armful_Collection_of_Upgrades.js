{
    const DarkysUpgradeCollection = {};

    // Game.crate = Game.crate
    //     .toString()
    //     .split("classes+=' upgrade';")
    //     .join("classes+=' upgrade';\nif (me.darky === 1) classes+=' darky';//Darky's upgrade package injection");

    const style = document.createElement("style");
    style.textContent = ".darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}";
    document.head.appendChild(style);
    // -------------------------------------------------------------------
    DarkysUpgradeCollection.init = () => {
        Game.registerHook("check", [
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
            //         Game.Game.Unlock("Building up");
            //     }
            // },
            // () => {
            //     if (Game.Objects["Cursor"].amount >= 450) {
            //         Game.Unlock("Nonillion fingers");
            //     }
            // },
            // () => {
            //     if (Game.handmadeCookies >= 1e27) {
            //         Game.Unlock("Loyalystic mouse");
            //     }
            // },
            () => {
                if (Game.Objects["Grandma"].amount >= 500) {
                    Game.Unlock("Granny talk");
                }
            },
            () => {
                if (Game.Objects["Farm"].amount >= 500) {
                    Game.Unlock("Chocolate chip seeds");
                }
            },
            () => {
                if (Game.Objects["Mine"].amount >= 500) {
                    Game.Unlock("Omegadrill");
                }
            },
            () => {
                if (Game.Objects["Factory"].amount >= 500) {
                    Game.Unlock("Pumping out new workers");
                }
            },
            () => {
                if (Game.Objects["Bank"].amount >= 500) {
                    Game.Unlock("Baking the dough");
                }
            },
            () => {
                if (Game.Objects["Temple"].amount >= 500) {
                    Game.Unlock("Cookie cults");
                }
            },
            () => {
                if (Game.Objects["Wizard tower"].amount >= 500) {
                    Game.Unlock("Trix™️");
                }
            },
            () => {
                if (Game.Objects["Shipment"].amount >= 500) {
                    Game.Unlock("Hyperspeed");
                }
            },
            () => {
                if (Game.Objects["Alchemy lab"].amount >= 500) {
                    Game.Unlock("The way we make golden cookies");
                }
            },
            () => {
                if (Game.Objects["Portal"].amount >= 500) {
                    Game.Unlock("Portal to nowhere");
                }
            },
            () => {
                if (Game.Objects["Time machine"].amount >= 500) {
                    Game.Unlock("Year of the weekly months without the days");
                }
            },
            () => {
                if (Game.Objects["Antimatter condenser"].amount >= 500) {
                    Game.Unlock("Bake matter");
                }
            },
            () => {
                if (Game.Objects["Prism"].amount >= 500) {
                    Game.Unlock("Shiny!!");
                }
            },
            () => {
                if (Game.Objects["Chancemaker"].amount >= 500) {
                    Game.Unlock("Casino fever");
                }
            },
            () => {
                if (Game.Objects["Fractal engine"].amount >= 500) {
                    Game.Unlock("Big brain time");
                }
            },
            () => {
                if (Game.Objects["Javascript console"].amount >= 500) {
                    Game.Unlock("Darky can't actually code");
                }
            },
        ]);
        Game.registerHook("create", [
            () => {
                // ~ ~ ~ ORIGINAL ~ ~ ~
                // No idea how to make this one work at all, help would be appreciated! The idea was that Everything is 0.005% more efficient per building.
                // DarkysUpgradeCollection.Upgrade(
                //     "Building up",
                //     "Everything is more efficient per building owned.<q>I can already feel the power building up.</q>",
                //     1000000,
                //     [2, 6]
                // );
                // ~ ~ ~ TIERED ~ ~ ~
                // DarkysUpgradeCollection.Upgrade(
                //     "Nonillion fingers",
                //     "The mouse and cursors gain <b>+50000000</b> cookies for each non-cursor object owned.<q>That's quite the finger power.</q>",
                //     1e25,
                //     [13, 19]
                // );
                // Game.last.order = 113;
                // Game.MakeTiered(Game.last, 13, 0);
                // DarkysUpgradeCollection.Upgrade(
                //     "Loyalystic mouse",
                //     "Clicking gains <b>+1% of your CpS</b>.<q>A true, true mouse.</q>",
                //     5e28,
                //     [11, 31]
                // );
                // Game.last.order = 163;
                // Game.MakeTiered(Game.last, 13, 11);
                DarkysUpgradeCollection.TieredUpgrade(
                    "Granny talk",
                    "Grandmas are <b>twice</b> as efficient.<q>Only a few have survived.</q>",
                    "Grandma",
                    13
                );
                Game.last.order = 201;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Chocolate chip seeds",
                    "Farms are <b>twice</b> as efficient.<q>Makes sense, right?</q>",
                    "Farm",
                    13
                );
                Game.last.order = 301;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Omegadrill",
                    "Mines are <b>twice</b> as efficient.<q>It's coming in late but we go it.</q>",
                    "Mine",
                    13
                );
                Game.last.order = 401;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Pumping out new workers",
                    "Factories are <b>twice</b> as efficient.<q>Yes, we no longer need the birds and the bees, we can just create life itself!</q>",
                    "Factory",
                    13
                );
                Game.last.order = 501;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Baking the dough",
                    "Banks are <b>twice</b> as efficient.<q>Instead of making the bucks.</q>",
                    "Bank",
                    13
                );
                Game.last.order = 526;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Cookie cults",
                    "Temples are <b>twice</b> as efficient.<q>Every sunday they meet to bake in secret.</q>",
                    "Temple",
                    13
                );
                Game.last.order = 551;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Trix™️",
                    "Wizard towers are <b>twice</b> as efficient.<q>Brand cookies which taste pretty bad but not taken off the market for some reason. These darn wizards and their silly magic, keeping their brand cookies alive with their magic!</q>",
                    "Wizard tower",
                    13
                );
                Game.last.order = 576;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Hyperspeed",
                    "Shipments are <b>twice</b> as efficient.<q>HYPE, HYPE, HYPE, HYPE!</q>",
                    "Shipment",
                    13
                );
                Game.last.order = 601;
                DarkysUpgradeCollection.TieredUpgrade(
                    "The way we make golden cookies",
                    "Alchemy labs are <b>twice</b> as efficient.<q>[REDACTED]</q>",
                    "Alchemy lab",
                    13
                );
                Game.last.order = 701;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Portal to nowhere",
                    "Portals are <b>twice</b> as efficient.<q>A quiet place to store the cookies. I don't know why you would want to do that though.</q>",
                    "Portal",
                    13
                );
                Game.last.order = 801;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Year of the weekly months without the days",
                    "Time machines are <b>twice</b> as efficient.<q>Counting the hourly seconds by minutes.</q>",
                    "Time machine",
                    13
                );
                Game.last.order = 901;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Bake matter",
                    "Antimatter condensers are <b>twice</b> as efficient.<q>Just a bunch of tiny balls during scientific baking.</q>",
                    "Antimatter condenser",
                    13
                );
                Game.last.order = 1001;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Shiny!!",
                    "Prisms are <b>twice</b> as efficient.<q>Let's baking!</q>",
                    "Prism",
                    13
                );
                Game.last.order = 1101;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Casino fever",
                    "Chancemakers are <b>twice</b> as efficient.<q>A dangerous place for your wallet has become heaven on earth for it.</q>",
                    "Chancemaker",
                    13
                );
                Game.last.order = 1201;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Big brain time",
                    "Fractal engines are <b>twice</b> as efficient.<q>Think thonk.</q>",
                    "Fractal engine",
                    13
                );
                Game.last.order = 1301;
                DarkysUpgradeCollection.TieredUpgrade(
                    "Darky can't actually code",
                    "Javascript consoles are <b>twice</b> as efficient.<q>He just happened to be smart enough to make both an achievement and upgrade mod for Cookie Clicker.</q>",
                    "Javascript console",
                    13
                );
                Game.last.order = 1401;
            },
        ]);
    };
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
    DarkysUpgradeCollection.Upgrade = (name, desc, price, icon, buyFunction) => {
        const answer = new Game.Upgrade(name, desc, price, icon, buyFunction);
        answer.darky = 1;

        return answer;
    };
    DarkysUpgradeCollection.TieredUpgrade = (name, desc, building, tier) => {
        const answer = new Game.TieredUpgrade(name, desc, building, tier);
        answer.darky = 1;

        return answer;
    };
    // -------------------------------------------------------------------
    Game.registerMod("Darkys Upgrade Collection", DarkysUpgradeCollection);
    Game.Notify(
        "Darky's Armful Collection of Upgrades 1.1",
        " <b>16</b> new Upgrades have been added, enjoy and thank you for using my mod!",
        [19, 26, "https://i.imgur.com/3jNJJNw.png"]
    );
    PlaySound("https://freesound.org/data/previews/172/172589_71257-lq.mp3");
}
