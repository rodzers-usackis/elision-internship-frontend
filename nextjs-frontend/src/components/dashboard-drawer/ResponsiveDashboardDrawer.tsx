import DashboardDrawer, {DashboardDrawerProps} from "./DashboardDrawer";
import {useState} from "react";
import {useMediaQuery} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from 'next/image';
import Grid from "@mui/material/Grid";
import styles from "../../styles/MobileNavbar.module.css";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import Link from "next/link";

export default function ResponsiveDashboardDrawer({selectedPage, isMobile = false}: DashboardDrawerProps) {
    const [isVisible, setIsVisible] = useState(false);
    const isScreenBigEnough = useMediaQuery('(min-width: 900px)');
    const mobileClass = isMobile ? '' : 'hidden';
    const priceSpyLogo = (
        <Link href='/'>
            <Image
                src="/price_spy_logo.svg"
                alt="Price Spy Logo"
                width={100}
                height={60}
                priority
            />
        </Link>
    )

    const toggleDrawer = () => {
        setIsVisible(!isVisible);
    };

    function MobileDashNav() {
        return (
            <>
                <AppBar
                    className={`appbar-paper ${mobileClass}`}
                    sx={{position: 'sticky', top: 0, left: 0, right: 0, backgroundColor: '#fff', width: '100vw'}}
                    elevation={0}
                >
                    <Toolbar>
                        <Grid container justifyContent='space-between' alignItems={'center'}>
                            <Grid item display={'flex'} justifyContent={'start'}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={toggleDrawer}
                                >
                                    <MenuIcon className={styles.burgerIcon} fontSize={'large'}/>
                                </IconButton>
                            </Grid>

                            <Grid item className={'logo-item'} justifyContent={'center'} alignContent={'center'}>
                                {priceSpyLogo}
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <Drawer anchor="left" open={isVisible} onClose={toggleDrawer}>
                    <DashboardDrawer selectedPage={selectedPage} />
                </Drawer>
            </>
        )
    }

    if (isScreenBigEnough) {
        return <DashboardDrawer selectedPage={selectedPage} />;
    } else {
        return (
            <>
                <MobileDashNav/>
            </>
        )
    }
}
