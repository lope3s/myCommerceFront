import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StoreProvider } from "easy-peasy";
import store from "../src/store/store";
import { HOCStateManegement } from "../src/components";
import Head from "next/head";

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ApolloProvider client={client}>
                <StoreProvider store={store}>
                    <HOCStateManegement>
                        <Component {...pageProps} />
                    </HOCStateManegement>
                </StoreProvider>
            </ApolloProvider>
        </>
    );
}

export default MyApp;
