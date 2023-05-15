import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {createTheme, ThemeProvider} from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import {useRouter} from "next/router";
import {QueryClient, QueryClientProvider} from 'react-query'
import React from "react";
import RegistrationFormContextProvider from "../context/register/RegistrationFormContextProvider";

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

    const isDashboardPage = (router.pathname.startsWith(`/dashboard`));
    const isRegisterPage = (router.pathname.startsWith(`/register`));

    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                {isDashboardPage ? null : <Navbar/>}
                {isRegisterPage ? <RegistrationFormContextProvider><Component {...pageProps}/></RegistrationFormContextProvider> : <Component {...pageProps}/>}
            </QueryClientProvider>
        </ThemeProvider>
    )
}
