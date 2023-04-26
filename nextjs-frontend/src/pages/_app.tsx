import '<components>/styles/globals.css'
import type {AppProps} from 'next/app'
import TopNavbar from "<components>/components/navbar/desktop/TopNavbar";
import {createTheme, ThemeProvider} from "@mui/material";
import RegistrationFormContextProvider from "<components>/context/register/RegistrationFormContextProvider";

export default function App({Component, pageProps}: AppProps) {

    const theme = createTheme({
        typography: {
            fontFamily: 'Inter, sans-serif',
            button: {
                textTransform: "none"
            }
        }
    });


    return (
        <>
            <ThemeProvider theme={theme}>
                <RegistrationFormContextProvider>
                    <TopNavbar/>
                    <Component {...pageProps} />
                </RegistrationFormContextProvider>
            </ThemeProvider>
        </>
    )
}
