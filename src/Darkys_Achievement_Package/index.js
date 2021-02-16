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
Game.Notify(
 "Darky's Achievement Package 1.7",
 ' <b>68</b> new Achievements have been added, enjoy and thank you for using my mod!',
 [17, 26, 'https://i.imgur.com/3jNJJNw.png'],
);
PlaySound('https://freesound.org/data/previews/203/203121_777645-lq.mp3');
