import '<components>/styles/globals.css'
import type {AppProps} from 'next/app'
import {createTheme, ThemeProvider} from "@mui/material";
import Navbar from "<components>/components/navbar/Navbar";
import {useRouter} from "next/router";
import {QueryClient, QueryClientProvider} from 'react-query'
import React from "react";

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    const queryClient = new QueryClient()

    const theme = createTheme({
        typography: {
            fontFamily: 'Inter, sans-serif',
            button: {
                textTransform: "none"
            }
        }
    });

    const isLayoutNeeded = (router.pathname.startsWith(`/dashboard`));

    return (
        <>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    {isLayoutNeeded ? <React.Fragment/> : <Navbar/>}
                    <Component {...pageProps} />
                </QueryClientProvider>
            </ThemeProvider>
        </>
    );
}
