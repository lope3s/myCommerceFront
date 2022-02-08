import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StoreProvider } from "easy-peasy";
import store from "../src/store/store";
import { HOCStateManegement } from "../src/components";

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <StoreProvider store={store}>
                <HOCStateManegement>
                    <Component {...pageProps} />
                </HOCStateManegement>
            </StoreProvider>
        </ApolloProvider>
    );
}

export default MyApp;
