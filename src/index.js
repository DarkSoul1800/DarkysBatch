import init from './init';
import save from './save';
import load from './load';
import Achievement from './Achievement';

const DarkysAchievementPackage = {
 init,
 save,
 load,
 Achievement,
};

Game.registerMod('Darkys Achievement Package', DarkysAchievementPackage);
