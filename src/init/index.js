import overrides from './overrides';
import checkHookContent from './checkHook';
import createHook from './createHook';

const init = () => {
 overrides();

 Game.registerHook('check', checkHookContent);
 createHook();
};

export default init;
