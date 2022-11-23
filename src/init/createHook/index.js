import Achievement from '../../Achievement';

const spritesheet = 'https://hyoretsu.github.io/DarkysCheevosPackage/static/achievements.png';
const externalSpritesheet = 'https://i.imgur.com/3jNJJNw.png';

const createHook = () => {
    // Have X buildings

    Achievement('Squeak goes the mouse', 'Have <b>900</b> cursors.', [0, 19]);
    Game.last.order = 1060;
    Achievement("I'm too old for this", 'Have <b>650</b> grandmas.', [1, 21]);
    Game.last.order = 1110;
    Achievement('Gorden garden', 'Have <b>650</b> farms.', [2, 21]);
    Game.last.order = 1210;
    Achievement('A fine mine you got there', 'Have <b>650</b> mines.', [3, 21]);
    Game.last.order = 1310;
    Achievement('Working 24/7', 'Have <b>650</b> factories.', [4, 21]);
    Game.last.order = 1410;
    Achievement('Bank on it', 'Have <b>650</b> banks.', [15, 21]);
    Game.last.order = 1430;
    Achievement('Temple pun', 'Have <b>650</b> temples.', [16, 21]);
    Game.last.order = 1460;
    Achievement("It's magic, Joel!", 'Have <b>650</b> wizard towers.', [17, 21]);
    Game.last.order = 1480;
    Achievement('My shipment arrives in the morning', 'Have <b>650</b> shipments.', [5, 21]);
    Game.last.order = 1510;
    Achievement('Turning cookies into gold since 2013', 'Have <b>650</b> alchemy labs.', [6, 21]);
    Game.last.order = 1610;
    Achievement('A portal inside of a portal', 'Have <b>650</b> portals.', [7, 21]);
    Game.last.order = 1710;
    Achievement(
        'It all began on the 8th of August, 2013',
        'Have <b>650</b> time machines.',
        [8, 21],
    );
    Game.last.order = 1810;
    Achievement('AntimatterCon', 'Have <b>650</b> antimatter condensers.', [13, 21]);
    Game.last.order = 1910;
    Achievement('Stop being a prissm', 'Have <b>650</b> prisms.', [14, 21]);
    Game.last.order = 2010;
    Achievement('And yet you probably never got a blab', 'Have <b>650</b> chancemakers.', [19, 21]);
    Game.last.order = 2110;
    Achievement('Gouchnox', 'Have <b>650</b> fractal engines.<q>69</q>', [20, 21]);
    Game.last.order = 2210;
    Achievement('Follow the javascript', 'Have <b>650</b> javascript consoles.', [32, 21]);
    Game.last.order = 2310;
    Achievement("Don't call them fanverses, you fool", 'Have <b>650</b> idleverses.', [33, 21]);
    Game.last.order = 2410;

    // Have X of every building

    Achievement(
        'Sexcentennial and a half',
        'Have at least <b>650 of everything</b>.<q>Yes I just did that.</q>',
        [1, 3, spritesheet],
    );
    Game.last.order = 7004;

    // Buildings owned

    Achievement('Owner of Buildings', 'Own <b>3000</b> buildings.', [0, 0, spritesheet]);
    Game.last.order = 5010;
    Achievement('World-dominating company', 'Own <b>5000</b> buildings.', [2, 0, spritesheet]);
    Game.last.order = 5012;
    Achievement('Creator of the Cookieverse', 'Own <b>6000</b> buildings.', [3, 0, spritesheet]);
    Game.last.order = 5013;
    Achievement("Build until you can't build anymore", 'Own <b>7000</b> buildings.', [
        4,
        0,
        spritesheet,
    ]);
    Game.last.order = 5014;
    Achievement('Overlord', 'Own <b>9000</b> buildings.', [4, 4, spritesheet]);
    Game.last.order = 5016;
    Achievement("That's enough, boss", 'Own <b>10000</b> buildings.', [6, 0, spritesheet]);
    Game.last.order = 5017;

    // Upgrades owned

    Achievement('Earth-shattering association', 'Purchase <b>500</b> upgrades.', [
        2,
        1,
        spritesheet,
    ]);
    Game.last.order = 6003;
    Achievement('Maker of the Idleverse', 'Purchase <b>600</b> upgrades.', [3, 1, spritesheet]);
    Game.last.order = 6004;

    // Prestige upgrades owned

    Achievement(
        'Secret fortune',
        'Purchase the <b>3 secret prestige upgrades</b>.<q>You got more than one ace up your sleeve, huh?',
        [24, 15],
    );
    Game.last.order = 32001;
    Achievement('Pretty prestige', 'Purchase <b>15</b> prestige upgrades.', [
        19,
        48,
        externalSpritesheet,
    ]);
    Game.last.order = 6005;
    Achievement('Live and learn', 'Purchase <b>30</b> prestige upgrades.<q>And never forget.', [
        19,
        47,
        externalSpritesheet,
    ]);
    Game.last.order = 6006;
    Achievement(
        'We will stay with you forever',
        "Purchase <b>60</b> prestige upgrades.<q>Don't reset us.</q>",
        [19, 46, externalSpritesheet],
    );
    Game.last.order = 6007;

    // Big cookie clicks

    Achievement('Clicker', 'Click on the big cookie <b>1,000</b> times.', [11, 22]);
    Game.last.order = 1020;
    Achievement('Advanced Clicker', 'Click on the big cookie <b>10,000</b> times.', [11, 23]);
    Game.last.order = 1021;
    Achievement('Expert Clicker', 'Click on the big cookie <b>25,000</b> times.', [11, 24]);
    Game.last.order = 1022;

    // Make X cookies from clicking

    Achievement(
        'Stop it, it clickles',
        'Make <b>100 octillion</b> cookies from clicking.',
        [11, 21],
    );
    Game.last.order = 1010;
    Achievement('Keep up the click', 'Make <b>10 nonillion</b> cookies from clicking.', [
        0,
        69,
        externalSpritesheet,
    ]);
    Game.last.order = 1011;
    Achievement('Clicking is the new booping', 'Make <b>1 decillion</b> cookies from clicking.', [
        0,
        34,
        externalSpritesheet,
    ]);
    Game.last.order = 1012;
    Achievement(
        'The final click',
        'Make <b>100 decillion</b> cookies from clicking.<q>But its never over.</q>',
        [0, 46, externalSpritesheet],
    );
    Game.last.order = 1013;
    Achievement(
        'Sike, thats the wrong achievement',
        "Make <b>10 undecillion</b> cookies from clicking.<q>The last achievement wasn't the final one.</q>",
        [0, 5, spritesheet],
    );
    Game.last.order = 1014;
    Achievement(
        'How about we tap the cookie now',
        'Make <b>1 duodecillion</b> cookies from clicking.<q>I heard the mobile version is out now.</q>',
        [1, 5, spritesheet],
    );
    Game.last.order = 1015;
    Achievement(
        'Cookie Destroyer',
        'Make <b>100 duodecillion</b> cookies from clicking.<q>Agent Johnson was here</q>',
        [2, 5, spritesheet],
    );
    Game.last.order = 1016;
    Achievement('Give it a click', 'Make <b>10 tredecillion</b> cookies from clicking.', [
        3,
        5,
        spritesheet,
    ]);
    Game.last.order = 1017;
    Achievement(
        'Clicking Frenzy: Our Lord and Saviour',
        'Make <b>1 quattuordecillion</b> cookies from clicking.',
        [4, 5, spritesheet],
    );
    Game.last.order = 1018;
    Achievement(
        'Hand-made cookies are still the best',
        'Make <b>100 quattuordecillion</b> cookies from clicking.',
        [5, 5, spritesheet],
    );
    Game.last.order = 1019;
    Achievement(
        'My strange clicking addiction',
        'Make <b>10 quindecillion</b> cookies from clicking.',
        [6, 5, spritesheet],
    );
    Game.last.order = 1019;

    // Prestige amount

    Achievement('Heavenly', 'Reach prestige level <b>100</b>.', [19, 7]);
    Game.last.order = 30010;
    Achievement('Transcendent', 'Reach prestige level <b>10,000</b>.', [18, 7]);
    Game.last.order = 30011;
    Achievement('Higher energy state', 'Reach prestige level <b>1 million</b>.', [17, 7]);
    Game.last.order = 30012;
    Achievement('Omniverse', 'Reach prestige level <b>100 million</b>.', [16, 7]);
    Game.last.order = 30013;
    Achievement('The Ascendant', 'Reach prestige level <b>10 billion</b>.', [15, 7]);
    Game.last.order = 30014;

    // Themed upgrades

    Achievement('Getting fancy', 'Purchase <b>all fancy biscuits</b>.', [21, 8]);
    Game.last.order = 21101;
    Achievement('You wanna be popular?', 'Purchase <b>all popular biscuits</b>.', [20, 9]);
    Game.last.order = 21103;
    Achievement('Emmanuel Macaron', 'Purchase <b>all macarons</b>.', [20, 8]);
    Game.last.order = 21102;
    Achievement('Rich butterfingers', 'Purchase <b>all rich butter cookies</b>.', [21, 9]);
    Game.last.order = 21104;
    Achievement('Bake me, maybe?', 'Purchase <b>all maybe cookies</b>.', [25, 29]);
    Game.last.order = 21106;
    Achievement(
        'Burger Clicker',
        'Purchase <b>all not cookies</b>.<q>Shoutout to the old Idle Game Maker!</q>',
        [26, 29],
    );
    Game.last.order = 21107;
    Achievement('Pastries from the past', 'Purchase <b>all pastries</b>.', [27, 29]);
    Game.last.order = 21105;
    Achievement(
        'Purrfect Perfection',
        'Purrchase <b>every kitten upgrade</b>.<q>Are you sick of these puns yet?</q>',
        [26, 7],
    );
    Game.last.order = 10001;
    Achievement(
        "It's sweet, sweet, sweet Synergy",
        "Purchase <b>all Synergy I upgrades</b>.<q>It's ours for the baking.</q>",
        [9, 20],
    );
    Game.last.order = 6008;
    Achievement('Out of Energy? Get Synergy!', 'Purchase <b>all Synergy II upgrades</b>.', [9, 29]);
    Game.last.order = 6009;
    Achievement(
        'Spike the dragon',
        'Purchase <b>all dragon upgrades</b>.<q>Keep an eye on your gems.</q>',
        [30, 12],
    );
    Game.last.order = 21109;
    Achievement(
        'Collecting these is like growing plants',
        'Purchase <b>all plant upgrades</b>.<q>It takes a looooong time.</q>',
        [24, 25],
    );
    Game.last.order = 21108;

    // Buildings' level

    Achievement('Level 1 complete!', 'Reach level <b>1</b> of every building.', [
        0,
        2,
        spritesheet,
    ]);
    Game.last.order = 5017;
    Achievement('Five Hive', 'Reach level <b>5</b> of every building.', [1, 2, spritesheet]);
    Game.last.order = 5018;
    Achievement('This took forever', 'Reach level <b>10</b> of every building.', [
        2,
        2,
        spritesheet,
    ]);
    Game.last.order = 5019;

    // Shadow achievements

    Achievement('Mod-God complex', 'Name yourself <b>Darky</b>.<q>Ducky.</q>', [2, 12]);
    Game.last.order = 30201;
    Game.last.pool = 'shadow';
    Achievement('Golden Jackpot', 'Click <b>77,777 golden cookies</b>.', [0, 3, spritesheet]);
    Game.last.order = 10001;
    Game.last.pool = 'shadow';

    // Etc

    Achievement(
        'All you had to do was ask',
        "Click this custom achievement's slot.<q>Here you go.</q>",
        [2, 4, spritesheet],
    );
    Game.last.order = 11001;
    Game.last.clickFunction = () => {
        if (!Game.HasAchiev('All you had to do was ask')) {
            PlaySound('snd/tick.mp3');
            Game.Win('All you had to do was ask');
        }
    };
};

export default createHook;
