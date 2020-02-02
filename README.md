# Darky's Achievements and Upgrades Batch

Hey there! My name is Darky and welcome to **Darky's Achievements and Upgrades Batch**, a *bundle* of 2 mods i made for the popular and Father of Idle Games: [Cookie Clicker](https://cookieclicker.eu/cookieclicker/). Those 2 mods in question are: *Darky's Achievement Package* and *Darky's Armful Collection of Upgrades*.

## What is Darky's Achievements and Upgrades Batch?

As already mentioned, *Darky's Achievements and Upgrades Batch* is a *bundle* mod containing *Darky's Achievement Package* and *Darky's Armful Collection of Upgrades* and when loaded into Cookie Clicker will give you a lot of new custom achievements and upgrades for the game! And yes, **those achievements add to your milk!**

If you like to spoil yourself on all the new achievements and upgrades in this Batch, then go over to this little wiki.

## Current version

Check the [releases page](https://github.com/DarkSoul1800/DarkysBatch/releases) for a full history of all versions of both the Package and the Collection.

# How do I load these mods?

There are a few ways to load these mods:

## Bookmarklet

1. Copy this code and save it as a bookmark. 
2. Paste it in the URL section. 
3. To activate, click the bookmark when the game's open.

**Package:**

```javascript
javascript: (function () {
	Game.LoadMod('https://darksoul1800.github.io/DarkysBatch/Darkys_Achievement_Package.js');
}());
```

**Collection:**

```javascript
javascript: (function () {
	Game.LoadMod('https://darksoul1800.github.io/DarkysBatch/Darkys_Armful_Collection_of_Upgrades.js');
}());
```

**Batch:**

```javascript
javascript: (function () {
	Game.LoadMod('https://darksoul1800.github.io/DarkysBatch/Darkys_Achievements_and_Upgrades_Batch.js');
}());
```

## Userscript

Want the mods to be loaded automatically everytime you open the game? Well for that we have this following script for stuff like *Tampermonkey* or *Greasemonkey* that you can use:

**Package:**

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
            Game.LoadMod('https://darksoul1800.github.io/DarkysBatch/Darkys_Achievement_Package.js');
            clearInterval(checkReady);
        }
    }, 1000);
}).toString() + ")()";

window.eval(code);
```


**Collection:**

```javascript
// ==UserScript==
// @name Darky's Armful Collection of Upgrades
// @namespace Collection
// @include https://cookieclicker.eu/cookieclicker/
// @version 1
// @grant none
// ==/UserScript==

var code = "(" + (function() {
    var checkReady = setInterval(function() {
        if (typeof Game.ready !== 'undefined' && Game.ready) {
            Game.LoadMod('https://darksoul1800.github.io/DarkysBatch/Darkys_Armful_Collection_of_Upgrades.js');
            clearInterval(checkReady);
        }
    }, 1000);
}).toString() + ")()";

window.eval(code);
```


**Batch:**

```javascript
// ==UserScript==
// @name Darky's Achievements and Upgrades Batch
// @namespace Batch
// @include https://cookieclicker.eu/cookieclicker/
// @version 1
// @grant none
// ==/UserScript==

var code = "(" + (function() {
    var checkReady = setInterval(function() {
        if (typeof Game.ready !== 'undefined' && Game.ready) {
            Game.LoadMod('https://darksoul1800.github.io/DarkysBatch/Darkys_Achievements_and_Upgrades_Batch.js');
            clearInterval(checkReady);
        }
    }, 1000);
}).toString() + ")()";

window.eval(code);
```

# Bugs and suggestions

Any bugs or suggestions you have should be **opened as an issue** [here](https://github.com/DarkSoul1800/DarkysBatch/issues) for easier tracking. This allows me to close issues once they're fixed.

# Is that all?

Yea, i guess so. Thanks for reading and using my mods!
