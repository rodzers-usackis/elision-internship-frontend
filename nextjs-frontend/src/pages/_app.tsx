import '<components>/styles/globals.css'
import type {AppProps} from 'next/app'
import TopNavbar from "<components>/components/navbar/desktop/TopNavbar";
import {createTheme, ThemeProvider} from "@mui/material";
import AuthenticationContextProvider from "../context/login/AuthenticationContextProvider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


export default function App({Component, pageProps}: AppProps) {


    const theme = createTheme({
        typography: {
            fontFamily: 'Inter, sans-serif',
            button: {
                textTransform: "none"
            }
        }
    });

    const queryClient = new QueryClient();

    return (
        <>

            <QueryClientProvider
                client={queryClient}>
                <AuthenticationContextProvider>
                    <ThemeProvider theme={theme}>
                        <TopNavbar/>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </AuthenticationContextProvider>
            </QueryClientProvider>
        </>
    )
}
