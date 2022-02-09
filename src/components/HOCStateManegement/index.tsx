import { LoadingPage } from "../";
import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { IModelStates, IModelActions, InitialData } from "../../types";
import { useLazyQuery } from "@apollo/client";
import { GET_INITIAL_DATA } from "../../gqlSchemas";
import { Header } from "../";

const HOCStateManegement: React.FC = ({ children }) => {
    const [getInitialData, { data, error }] =
        useLazyQuery<InitialData>(GET_INITIAL_DATA);
    const isLoading = useStoreState<IModelStates, boolean>(
        (state) => state.loadingModel.isLoading
    );
    const setIsLoading = useStoreActions<IModelActions>(
        (actions) => actions.loadingModel.setIsLoading
    );

    if (data && isLoading) {
        localStorage.setItem("myCommerce:initialData", JSON.stringify(data));
        setIsLoading(false);
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    useEffect(() => {
        const localInitialData = localStorage.getItem("myCommerce:initialData");

        if (!localInitialData) {
            getInitialData();
            return;
        }

        setIsLoading(false);
    }, []);

    return <>{isLoading ? <LoadingPage /> : <Header>{children}</Header>}</>;
};

export default HOCStateManegement;
