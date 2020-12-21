import { original, tiered } from "./components";

const createHook = () => {
    original();
    tiered();
};

export default createHook;
