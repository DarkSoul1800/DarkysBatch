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

const themedUpgrades = [
    () => {
        if (
            CheckUpgrades([
                "British tea biscuits",
                "Chocolate british tea biscuits",
                "Round british tea biscuits",
                "Round chocolate british tea biscuits",
                "Round british tea biscuits with heart motif",
                "Round chocolate british tea biscuits with heart motif",
            ])
        ) {
            Game.Win("Getting fancy");
        }
    },
    () => {
        if (
            CheckUpgrades([
                "Caramoas",
                "Sagalongs",
                "Shortfoils",
                "Win mints",
                "Fig gluttons",
                "Loreols",
                "Jaffa cakes",
                "Grease's cups",
                "Digits",
                "Lombardia cookies",
                "Bastenaken cookies",
                "Festivity loops",
                "Havabreaks",
                "Zilla wafers",
                "Dim Dams",
                "Pokey",
            ])
        ) {
            Game.Win("You wanna be popular?");
        }
    },
    () => {
        if (
            CheckUpgrades([
                "Rose macarons",
                "Lemon macarons",
                "Chocolate macarons",
                "Pistachio macarons",
                "Hazelnut macarons",
                "Violet macarons",
                "Caramel macarons",
                "Licorice macarons",
                "Earl Grey macarons",
            ])
        ) {
            Game.Win("Emmanuel Macaron");
        }
    },
    () => {
        if (CheckUpgrades(["Butter horseshoes", "Butter pucks", "Butter knots", "Butter slabs", "Butter swirls"])) {
            Game.Win("Rich butterfingers");
        }
    },
    () => {
        if (
            CheckUpgrades([
                "Cookie dough",
                "Burnt cookie",
                "A chocolate chip cookie but with the chips picked off for some reason",
                "Flavor text cookie",
                "High-definition cookie",
                "Crackers",
            ])
        ) {
            Game.Win("Bake me, maybe?");
        }
    },
    () => {
        if (
            CheckUpgrades([
                "Toast",
                "Peanut butter & jelly",
                "Wookies",
                "Cheeseburger",
                "One lone chocolate chip",
                "Pizza",
                "Candy",
            ])
        ) {
            Game.Win("Burger Clicker");
        }
    },
    () => {
        if (
            CheckUpgrades([
                "Profiteroles",
                "Jelly donut",
                "Glazed donut",
                "Chocolate cake",
                "Strawberry cake",
                "Apple pie",
                "Lemon meringue pie",
                "Butter croissant",
            ])
        ) {
            Game.Win("Pastries from the past");
        }
    },
    () => {
        if (
            CheckUpgrades([
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
                "Kitten angels",
                "Fortune #103",
            ])
        ) {
            Game.Win("Purrfect Perfection");
        }
    },
    () => {
        if (
            CheckUpgrades([
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
            ])
        ) {
            Game.Win("It's sweet, sweet, sweet Synergy");
        }
    },
    () => {
        if (
            CheckUpgrades([
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
            ])
        ) {
            Game.Win("Out of Energy? Get Synergy!");
        }
    },
    () => {
        if (CheckUpgrades(["Dragon scale", "Dragon claw", "Dragon fang", "Dragon teddy bear"])) {
            Game.Win("Spike the dragon");
        }
    },
    () => {
        if (
            CheckUpgrades([
                "Elderwort biscuits",
                "Bakeberry cookies",
                "Duketater cookies",
                "Green yeast digestives",
                "Fern tea",
                "Ichor syrup",
                "Wheat slims",
            ])
        ) {
            Game.Win("Collecting these is like growing plants");
        }
    },
];
export default themedUpgrades;
