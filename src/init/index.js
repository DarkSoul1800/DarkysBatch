import checkHookContent from './checkHook';
import createHook from './createHook';
import overrides from './overrides';

const init = () => {
    overrides();

    Game.registerHook('check', checkHookContent);
    createHook();
};

export default init;
