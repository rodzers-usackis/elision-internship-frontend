import '<components>/styles/globals.css'
import type {AppProps} from 'next/app'
import TopNavbar from "<components>/components/navbar/desktop/TopNavbar";
import {createTheme, ThemeProvider} from "@mui/material";

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
                <TopNavbar/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
