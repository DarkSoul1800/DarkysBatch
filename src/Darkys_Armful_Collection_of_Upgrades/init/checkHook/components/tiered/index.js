const tiered = [
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
];

export default tiered;
