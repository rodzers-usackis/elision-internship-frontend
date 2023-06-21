import DashboardDrawer, {DashboardDrawerProps} from "./DashboardDrawer";
import {useState} from "react";
import {useMediaQuery} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from 'next/image';

export default function ResponsiveDashboardDrawer({selectedPage}: DashboardDrawerProps) {

    const [isVisible, setIsVisible] = useState(false);
    const isScreenBigEnough = useMediaQuery('(min-width: 900px)');

    function MobileDashNav(){
        return (<><AppBar position="fixed" sx={{backgroundColor: "#aaa", zIndex: "1500"}}>
            <Toolbar variant="dense">
                <IconButton onClick={() => setIsVisible(!isVisible)} edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Image src="/price_spy_logo.svg" alt="Price Spy Logo" width={180} height={80} />
            </Toolbar>
        </AppBar>
            {isVisible ? <DashboardDrawer selectedPage={selectedPage} isMobile  onHide={()=>setIsVisible(false)}/> : ''}
        </>)
    }


    if (isScreenBigEnough) {
        return (<DashboardDrawer selectedPage={selectedPage}/>)
    }else {
        return (<>
            <MobileDashNav/>
        </>)
    }

    // if(isVisible) {
    //     return (<DashboardDrawer showHideButton onHide={()=>setIsVisible(false)} selectedPage={selectedPage}/>)
    // }else {
    //     return (<>
    //        <MobileDashNav/>
    //     </>)
    // }


}