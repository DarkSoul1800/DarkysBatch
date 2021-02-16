import overrides from './overrides';
import checkHookContent from './checkHook';
import cpsHookContent from './cpsHook';
import createHook from './createHook';

const init = () => {
 overrides();

 Game.registerHook('check', checkHookContent);
 Game.registerHook('cps', cpsHookContent);
 createHook();
};

export default init;
