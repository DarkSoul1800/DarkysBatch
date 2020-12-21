const bigCookieClicks = [
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
];

export default bigCookieClicks;
