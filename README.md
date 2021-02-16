# Darky's Achievements and Upgrades Batch

Hey there! My name is Darky and welcome to **Darky's Achievements and Upgrades Batch**, a _bundle_ of 2 mods i made for the popular and Father of Idle Games: [Cookie Clicker](https://orteil.dashnet.org/cookieclicker/). Those 2 mods in question are: _Darky's Achievement Package_ and _Darky's Armful Collection of Upgrades_.

## What is Darky's Achievements and Upgrades Batch?

As already mentioned, _Darky's Achievements and Upgrades Batch_ is a _bundle_ mod containing _Darky's Achievement Package_ and _Darky's Armful Collection of Upgrades_ and when loaded into Cookie Clicker will give you a lot of new custom achievements and upgrades for the game! And yes, **those achievements add to your milk!**

If you like to spoil yourself on all the new achievements and upgrades in this Batch, then go over to this little [wiki](https://github.com/DarkSoul1800/DarkysBatch/wiki).

## Current version

Check the [releases page](https://github.com/hyoretsu/DarkysBatch/releases) for a full history of all versions of both the Package and the Collection (excluding the Pastebin versions).

# How do I load these mods?

There are a few ways to load these mods:

## Bookmarklet

1. Copy this code and save it as a bookmark.
2. Paste it in the URL section.
3. To activate, click the bookmark when the game's open.

**Package:**

```javascript
javascript: Game.LoadMod('https://hyoretsu.github.io/DarkysBatch/dist/Darkys_Achievement_Package.js');
```

**Collection:**

```javascript
javascript: Game.LoadMod('https://hyoretsu.github.io/DarkysBatch/dist/Darkys_Armful_Collection_of_Upgrades.js');
```

**Batch:**

```javascript
javascript: Game.LoadMod('https://hyoretsu.github.io/DarkysBatch/dist/Darkys_Achievements_and_Upgrades_Batch.js');
```

## Userscript

Want the mods to be loaded automatically everytime you open the game? Well for that we have this following script for stuff like _Tampermonkey_ or _Greasemonkey_ that you can use:

**Package:**

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
  Game.LoadMod('https://hyoretsu.github.io/DarkysBatch/dist/Darkys_Achievement_Package.js');
 }
}, 1000);
```

**Collection:**

```javascript
// ==UserScript==
// @name Darky's Armful Collection of Upgrades
// @namespace Collection
// @include http://orteil.dashnet.org/cookieclicker/
// @include https://orteil.dashnet.org/cookieclicker/
// @include http://orteil.dashnet.org/cookieclicker/beta/
// @include https://orteil.dashnet.org/cookieclicker/beta/
// @version 1
// @grant none
// ==/UserScript==

setInterval(() => {
 if (Game.ready) {
  Game.LoadMod('https://hyoretsu.github.io/DarkysBatch/dist/Darkys_Armful_Collection_of_Upgrades.js');
 }
}, 1000);
```

**Batch:**

```javascript
// ==UserScript==
// @name Darky's Achievements and Upgrades Batch
// @namespace Batch
// @include http://orteil.dashnet.org/cookieclicker/
// @include https://orteil.dashnet.org/cookieclicker/
// @include http://orteil.dashnet.org/cookieclicker/beta/
// @include https://orteil.dashnet.org/cookieclicker/beta/
// @version 1
// @grant none
// ==/UserScript==

setInterval(() => {
 if (Game.ready) {
  Game.LoadMod('https://hyoretsu.github.io/DarkysBatch/dist/Darkys_Achievements_and_Upgrades_Batch.js');
 }
}, 1000);
```

# Bugs and suggestions

Any bugs or suggestions you have should be **opened as an issue** [here](https://github.com/hyoretsu/DarkysBatch/issues) for easier tracking. This allows me to close issues once they're fixed.

# Is that all?

Yea, i guess so. Thanks for reading and using my mods!
