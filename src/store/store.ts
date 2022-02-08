import { createStore } from "easy-peasy";
import loadingModel from "./loadingModel";
import initialModel from "./initialModel";

const model = { loadingModel, initialModel };

const store = createStore(model);

export default store;
