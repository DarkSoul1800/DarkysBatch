const checkHookContent = [
    // Have X buildings
    () => {
        if (Game.Objects.Cursor.amount >= 900) {
            Game.Win('Squeak goes the mouse');
        }
    },
    () => {
        if (Game.Objects.Grandma.amount >= 650) {
            Game.Win("I'm too old for this");
        }
    },
    () => {
        if (Game.Objects.Farm.amount >= 650) {
            Game.Win('Gorden garden');
        }
    },
    () => {
        if (Game.Objects.Mine.amount >= 650) {
            Game.Win('A fine mine you got there');
        }
    },
    () => {
        if (Game.Objects.Factory.amount >= 650) {
            Game.Win('Working 24/7');
        }
    },
    () => {
        if (Game.Objects.Bank.amount >= 650) {
            Game.Win('Bank on it');
        }
    },
    () => {
        if (Game.Objects.Temple.amount >= 650) {
            Game.Win('Temple pun');
        }
    },
    () => {
        if (Game.Objects['Wizard tower'].amount >= 650) {
            Game.Win("It's magic, Joel!");
        }
    },
    () => {
        if (Game.Objects.Shipment.amount >= 650) {
            Game.Win('My shipment arrives in the morning');
        }
    },
    () => {
        if (Game.Objects['Alchemy lab'].amount >= 650) {
            Game.Win('Turning cookies into gold since 2013');
        }
    },
    () => {
        if (Game.Objects.Portal.amount >= 650) {
            Game.Win('A portal inside of a portal');
        }
    },
    () => {
        if (Game.Objects['Time machine'].amount >= 650) {
            Game.Win('It all began on the 8th of August, 2013');
        }
    },
    () => {
        if (Game.Objects['Antimatter condenser'].amount >= 650) {
            Game.Win('AntimatterCon');
        }
    },
    () => {
        if (Game.Objects.Prism.amount >= 650) {
            Game.Win('Stop being a prissm');
        }
    },
    () => {
        if (Game.Objects.Chancemaker.amount >= 650) {
            Game.Win('And yet you probably never got a blab');
        }
    },
    () => {
        if (Game.Objects['Fractal engine'].amount >= 650) {
            Game.Win('Gouchnox');
        }
    },
    () => {
        if (Game.Objects['Javascript console'].amount >= 650) {
            Game.Win('Follow the javascript');
        }
    },
    () => {
        if (Game.Objects.Idleverse.amount >= 650) {
            Game.Win("Don't call them fanverses, you fool");
        }
    },
    // Have X of every building
    () => {
        if (Math.min(...Game.ObjectsById.map(building => building.amount)) >= 650) {
            Game.Win('Sexcentennial and a half');
        }
    },
    // Buildings owned
    () => {
        if (Game.BuildingsOwned >= 3000) {
            Game.Win('Owner of Buildings');
        }
    },
    () => {
        if (Game.BuildingsOwned >= 5000) {
            Game.Win('World-dominating company');
        }
    },
    () => {
        if (Game.BuildingsOwned >= 6000) {
            Game.Win('Creator of the Cookieverse');
        }
    },
    () => {
        if (Game.BuildingsOwned >= 7000) {
            Game.Win("Build until you can't build anymore");
        }
    },
    () => {
        if (Game.BuildingsOwned >= 9000) {
            Game.Win('Overlord');
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
            Game.Win('Earth-shattering association');
        }
    },
    () => {
        if (Game.UpgradesOwned >= 600) {
            Game.Win('Maker of the Idleverse');
        }
    },
    // Prestige upgrades owned
    () => {
        if (Game.Has('Lucky digit') && Game.Has('Lucky number') && Game.Has('Lucky payout')) {
            Game.Win('Secret fortune');
        }
    },
    () => {
        const prestigeUpgradesOwned = Game.PrestigeUpgrades.reduce(
            (sum, upgrade) => (upgrade.bought ? sum + 1 : sum),
            0,
        );

        if (prestigeUpgradesOwned >= 15) {
            Game.Win('Pretty prestige');
        }
    },
    () => {
        const prestigeUpgradesOwned = Game.PrestigeUpgrades.reduce(
            (sum, upgrade) => (upgrade.bought ? sum + 1 : sum),
            0,
        );

        if (prestigeUpgradesOwned >= 30) {
            Game.Win('Live and learn');
        }
    },
    () => {
        const prestigeUpgradesOwned = Game.PrestigeUpgrades.reduce(
            (sum, upgrade) => (upgrade.bought ? sum + 1 : sum),
            0,
        );

        if (prestigeUpgradesOwned >= 60) {
            Game.Win('We will stay with you forever');
        }
    },
    // Big cookie clicks
    () => {
        if (Game.cookieClicks >= 1000) {
            Game.Win('Clicker');
        }
    },
    () => {
        if (Game.cookieClicks >= 10000) {
            Game.Win('Advanced Clicker');
        }
    },
    () => {
        if (Game.cookieClicks >= 25000) {
            Game.Win('Expert Clicker');
        }
    },
    // Make X cookies from clicking
    () => {
        if (Game.handmadeCookies >= 1e29) {
            Game.Win('Stop it, it clickles');
        }
    },
    () => {
        if (Game.handmadeCookies >= 1e31) {
            Game.Win('Keep up the click');
        }
    },
    () => {
        if (Game.handmadeCookies >= 1e33) {
            Game.Win('Clicking is the new booping');
        }
    },
    () => {
        if (Game.handmadeCookies >= 1e35) {
            Game.Win('The final click');
        }
    },
    () => {
        if (Game.handmadeCookies >= 1e37) {
            Game.Win('Sike, thats the wrong achievement');
        }
    },
    () => {
        if (Game.handmadeCookies >= 1e39) {
            Game.Win('How about we tap the cookie now');
        }
    },
    () => {
        if (Game.handmadeCookies >= 1e41) {
            Game.Win('Cookie Destroyer');
        }
    },
    () => {
        if (Game.handmadeCookies >= 1e43) {
            Game.Win('Give it a click');
        }
    },
    () => {
        if (Game.handmadeCookies >= 1e45) {
            Game.Win('Clicking Frenzy: Our Lord and Saviour');
        }
    },
    () => {
        if (Game.handmadeCookies >= 1e47) {
            Game.Win('Hand-made cookies are still the best');
        }
    },
    () => {
        if (Game.handmadeCookies >= 1e49) {
            Game.Win('My strange clicking addiction');
        }
    },
    // Prestige amount
    () => {
        if (Game.prestige >= 100) {
            Game.Win('Heavenly');
        }
    },
    () => {
        if (Game.prestige >= 10000) {
            Game.Win('Transcendent');
        }
    },
    () => {
        if (Game.prestige >= 1000000) {
            Game.Win('Higher energy state');
        }
    },
    () => {
        if (Game.prestige >= 1e8) {
            Game.Win('Omniverse');
        }
    },
    () => {
        if (Game.prestige >= 1e10) {
            Game.Win('The Ascendant');
        }
    },
    // Themed upgrades
    () => {
        if (
            Game.Has('British tea biscuits') &&
            Game.Has('Chocolate british tea biscuits') &&
            Game.Has('Round british tea biscuits') &&
            Game.Has('Round chocolate british tea biscuits') &&
            Game.Has('Round british tea biscuits with heart motif') &&
            Game.Has('Round chocolate british tea biscuits with heart motif')
        ) {
            Game.Win('Getting fancy');
        }
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
            Game.Has('Lombardia cookies') &&
            Game.Has('Bastenaken cookies') &&
            Game.Has('Festivity loops') &&
            Game.Has('Havabreaks') &&
            Game.Has('Zilla wafers') &&
            Game.Has('Dim Dams') &&
            Game.Has('Pokey')
        ) {
            Game.Win('You wanna be popular?');
        }
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
            Game.Has('Licorice macarons') &&
            Game.Has('Earl Grey macarons')
        ) {
            Game.Win('Emmanuel Macaron');
        }
    },
    () => {
        if (
            Game.Has('Butter horseshoes') &&
            Game.Has('Butter pucks') &&
            Game.Has('Butter knots') &&
            Game.Has('Butter slabs') &&
            Game.Has('Butter swirls')
        ) {
            Game.Win('Rich butterfingers');
        }
    },
    () => {
        if (
            Game.Has('Cookie dough') &&
            Game.Has('Burnt cookie') &&
            Game.Has('A chocolate chip cookie but with the chips picked off for some reason') &&
            Game.Has('Flavor text cookie') &&
            Game.Has('High-definition cookie') &&
            Game.Has('Crackers')
        ) {
            Game.Win('Bake me, maybe?');
        }
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
        ) {
            Game.Win('Burger Clicker');
        }
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
        ) {
            Game.Win('Pastries from the past');
        }
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
            Game.Has('Kitten angels') &&
            Game.Has('Fortune #103')
        ) {
            Game.Win('Purrfect Perfection');
        }
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
            Game.Has('Script grannies') &&
            Game.Has('Perforated mille-feuille cosmos')
        ) {
            Game.Win("It's sweet, sweet, sweet Synergy");
        }
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
            Game.Has('Tombola computing') &&
            Game.Has('Infraverses and superverses')
        ) {
            Game.Win('Out of Energy? Get Synergy!');
        }
    },
    () => {
        if (
            Game.Has('Dragon scale') &&
            Game.Has('Dragon claw') &&
            Game.Has('Dragon fang') &&
            Game.Has('Dragon teddy bear')
        ) {
            Game.Win('Spike the dragon');
        }
    },
    () => {
        if (
            Game.Has('Elderwort biscuits') &&
            Game.Has('Bakeberry cookies') &&
            Game.Has('Duketater cookies') &&
            Game.Has('Green yeast digestives') &&
            Game.Has('Fern tea') &&
            Game.Has('Ichor syrup') &&
            Game.Has('Wheat slims')
        ) {
            Game.Win('Collecting these is like growing plants');
        }
    },
    // Buildings' level
    () => {
        const buildingsLevels = Game.ObjectsById.map(building => building.level);

        if (buildingsLevels.filter(level => level >= 1).length === Game.ObjectsById.length) {
            Game.Win('Level 1 complete!');
        }
    },
    () => {
        const buildingsLevels = Game.ObjectsById.map(building => building.level);

        if (buildingsLevels.filter(level => level >= 5).length === Game.ObjectsById.length) {
            Game.Win('Five Hive');
        }
    },
    () => {
        const buildingsLevels = Game.ObjectsById.map(building => building.level);

        if (buildingsLevels.filter(level => level >= 10).length === Game.ObjectsById.length) {
            Game.Win('This took forever');
        }
    },
    // Shadow achievements
    () => {
        if (Game.bakeryName === 'Darky') {
            Game.Win('Mod-God complex');
        }
    },
    () => {
        if (Game.goldenClicks >= 77777) {
            Game.Win('Golden Jackpot');
        }
    },
];

export default checkHookContent;
