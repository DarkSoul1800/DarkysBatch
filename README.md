# Darky's Achievements and Upgrades Batch

Hey there! My name is Darky and welcome to Darky's Achievement Package, a mod for the popular and Father of Idle Games: Cookie Clicker

## What is Darky's Achievements and Upgrades Batch?

Darky's Achievement Package is a mod that, when loaded into Cookie Clicker, gives you a lot of new custom achievements for the game! And yes, **those achievements add to your milk!**

If you like to spoil yourself on all the new achievements and upgrades in this Batch, then go over to this little [wiki](https://github.com/DarkSoul1800/DarkysBatch/wiki).

## Current version

Check the [releases page](https://github.com/hyoretsu/DarkysCheevosPackage/releases) for a full history of all versions. (excluding Pastebin ones)

# How do I load these mods?

There are a few ways to load these mods:

## Bookmarklet

1. Copy this code and save it as a bookmark.
2. Paste it in the URL section.
3. To activate, click the bookmark when the game's open.

```javascript
javascript: Game.LoadMod('https://hyoretsu.github.io/DarkysCheevosPackage/dist/DarkysAchievementPackage.js');
```

## Userscript

Want the mods to be loaded automatically everytime you open the game? Well for that we have this following script for stuff like _Tampermonkey_ or _Greasemonkey_ that you can use:

```javascript
// ==UserScript==
// @name Darky's Achievement Package
// @namespace Package
// @include http://orteil.dashnet.org/cookieclicker/
// @include https://orteil.dashnet.org/cookieclicker/
// @include http://orteil.dashnet.org/cookieclicker/beta/
// @include https://orteil.dashnet.org/cookieclicker/beta/
// @version 1
// @grant none
// ==/UserScript==

setInterval(() => {
 if (Game.ready) {
  Game.LoadMod('https://hyoretsu.github.io/DarkysCheevosPackage/dist/DarkysAchievementPackage.js');
 }
}, 1000);
```

# Bugs and suggestions

Any bugs or suggestions you have should be **opened as an issue** [here](https://github.com/hyoretsu/DarkysBatch/issues) for easier tracking. This allows me to close issues once they're fixed.

# Is that all?

Yea, i guess so. Thanks for reading and using my mods!
