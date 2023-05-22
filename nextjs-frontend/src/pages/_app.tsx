import React from "react";
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {createTheme, ThemeProvider} from "@mui/material";
import AuthenticationContextProvider from "../context/authentication/AuthenticationContextProvider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Navbar from "<components>/components/navbar/Navbar";
import {useRouter} from "next/router";
import RouteProtector from "../context/authentication/RouteProtector";
import RegistrationFormContextProvider from "../context/register/RegistrationFormContextProvider";

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
            <AuthenticationContextProvider>
                <RouteProtector>
                    <ThemeProvider theme={theme}>
                            {isDashboardPage ? null : <Navbar/>}
                            {isRegisterPage ?
                                <RegistrationFormContextProvider><Component {...pageProps}/></RegistrationFormContextProvider> :
                                <Component {...pageProps}/>}
                    </ThemeProvider>
                </RouteProtector>
            </AuthenticationContextProvider>
        </QueryClientProvider>
    )
}
