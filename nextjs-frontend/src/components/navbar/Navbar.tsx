import {useMediaQuery} from "@mui/material";
import DesktopNavbar from '../navbar/desktop/DesktopNavbar'
import MobileNavbar from '../navbar/mobile/MobileNavbar'

export default function Navbar() {
    const matches = useMediaQuery('(min-width:1020px)');

    return (
        <>
            {matches? <DesktopNavbar/> : <MobileNavbar showMobile={matches}/>}
        </>
    )
}