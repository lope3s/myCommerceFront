import { Action } from "easy-peasy";

export interface ILoading {
    isLoading: boolean;
    setIsLoading: Action<ILoading, boolean>;
}

export interface IModelActions {
    loadingModel: { setIsLoading: Action<ILoading, boolean> };
}

export interface IModelStates {
    loadingModel: { isLoading: boolean };
}
