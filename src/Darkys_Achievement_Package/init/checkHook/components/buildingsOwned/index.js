const buildingsOwned = [
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
];

export default buildingsOwned;
