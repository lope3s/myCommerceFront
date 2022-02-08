import { action } from "easy-peasy";
import { ILoading } from "../types/index";

const loadingModel = {
    isLoading: true,
    setIsLoading: action<ILoading>((state, payload) => {
        state.isLoading = payload;
    }),
};

export default loadingModel;
