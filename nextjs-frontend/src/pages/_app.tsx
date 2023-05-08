import '<components>/styles/globals.css'
import type {AppProps} from 'next/app'
import {createTheme, ThemeProvider} from "@mui/material";
import RegistrationFormContextProvider from "<components>/context/register/RegistrationFormContextProvider";
import Navbar from "<components>/components/navbar/Navbar";

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
                    <Navbar/>
                    <Component {...pageProps} />
                </RegistrationFormContextProvider>
            </ThemeProvider>
        </>
    )
}
