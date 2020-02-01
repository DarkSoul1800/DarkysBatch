# Darky's Achievement Package

Hey there! My name is Darky and welcome to **Darky's Achievement Package**, a mod for the popular and Father of Idle Games: [Cookie Clicker](https://cookieclicker.eu/cookieclicker/)

## What is Darky's Achievement Package?

Darky's Achievement Package is a mod that, when loaded into Cookie Clicker, gives you a lot of new custom achievements for the game! And yes, **they add to your milk!**
If you like to spoil yourself on all the new achievements in this Package, then go over to this little wiki.

## Current version

Check the [releases page](https://github.com/DarkSoul1800/DarkysAchievementPackage/releases) for a full history of all versions.

## If there is an Achievemnt mod, is there also an Upgrade mod as well?

Yes! After almost 2 years since the birth of Darky's Achievement Package, we finally got an Upgrade mod for everyone to play with as well! Check out [Darky's Armful Collection of Upgrades](https://cookieclicker.eu/cookieclicker/) for the Upgrade mod!
I would recommend checking out [Darky's Achievements and Upgrades Batch](https://cookieclicker.eu/cookieclicker/) if you wanna play both Achievement and Upgrade mods at the same time. It's a quick and easy load!

# How do i load this mod?

There are a few ways to load this mod:

## Bookmarklet

1. Copy this code and save it as a bookmark. 
2. Paste it in the URL section. 
3. To activate, click the bookmark when the game's open.

```javascript
javascript: (function () {
	Game.LoadMod('https://github.com/DarkSoul1800/DarkysAchievementPackage/DarkysAchievementPackage.js');
}());
```

## Userscript

Want the mod to be loaded automatically everytime you open the game? Well for that we have this following script for stuff like *Tampermonkey* or *Greasemonkey* that you can use:

```javascript
// ==UserScript==
// @name Darky's Achievement Package
// @namespace Package
// @include https://cookieclicker.eu/cookieclicker/
// @version 1
// @grant none
// ==/UserScript==

var code = "(" + (function() {
    var checkReady = setInterval(function() {
        if (typeof Game.ready !== 'undefined' && Game.ready) {
            Game.LoadMod('https://github.com/DarkSoul1800/DarkysAchievementPackage/DarkysAchievementPackage.js');
            clearInterval(checkReady);
        }
    }, 1000);
}).toString() + ")()";

window.eval(code);
```

# Bugs and suggestions

Any bugs or suggestions you have should be **opened as an issue** [here](https://github.com/DarkSoul1800/DarkysAchievementPackage/issues) for easier tracking. This allows me to close issues once they're fixed.

# Is that all?

Yea, i guess so. Thanks for reading and using my mods!
