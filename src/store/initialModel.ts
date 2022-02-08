import { action } from "easy-peasy";
import { IInitialData, InitialData } from "../types";

const initialModel = {
    initialData: {} as InitialData,
    setInitialData: action<IInitialData>((state, payload) => {
        state.initialData = payload;
    }),
};

export default initialModel;
