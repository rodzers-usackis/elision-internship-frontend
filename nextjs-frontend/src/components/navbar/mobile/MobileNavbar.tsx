import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import {NavbarItems} from "<components>/components/navbar/NavbarItems";
import Button from "@mui/material/Button";
import styles from "<components>/styles/MobileNavbar.module.css";
import {Divider, Drawer, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {Person} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

type Props = {
    showMobile?: boolean;
}

export default function MobileNavbar({showMobile = false}: Props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const mobileClass = showMobile ? '' : 'hidden';

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    }

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

    const drawerContent = (
        <Box sx={{width: '100vw'}}>
            <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'} paddingLeft={2}
                  paddingRight={'5px'}>
                <Grid item>
                    {priceSpyLogo}
                </Grid>

                <Grid item>
                    <IconButton onClick={toggleDrawer} size={'large'}>
                        <CloseIcon/>
                    </IconButton>
                </Grid>
            </Grid>

            <Grid container paddingX={2}>
                {NavbarItems.map((page) => (
                    <Grid item width={'100%'}>
                        <Link href={page.href} key={page.title}>
                            <Button disableRipple className={styles.navbarItemButton}>
                                <Typography className={styles.navbarItem} sx={{fontSize: '20px', color: 'black'}}>
                                    {page.title}
                                </Typography>
                            </Button>
                        </Link>
                        <Divider/>
                    </Grid>
                ))}

                <Grid item width={'100%'}>
                    <Link href={'/login'} key={'login'}>
                        <Button disableRipple className={styles.navbarItemButton} onClick={closeDrawer} sx={{paddingLeft: '0px'}}>
                            <Person fontSize={'large'} sx={{color: 'black'}}/>
                            <Typography className={styles.navbarItem}
                                        sx={{fontSize: '20px', color: 'black', paddingLeft: '10px'}}>
                                Sign in
                            </Typography>
                        </Button>
                    </Link>
                    <Divider/>
                </Grid>

                <Grid item width={'100%'} paddingTop={3}>
                    <Link href={'/register'} key={'register'}>
                        <Button disableRipple className={styles.signUpButton} fullWidth={true} onClick={closeDrawer}>
                            <Typography className={styles.signUpButtonText}>
                                Get free trial
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );

    return (
        <>
            <AppBar className={`appbar-paper ${mobileClass}`}
                    sx={{position: 'sticky', top: 0, left: 0, right: 0, backgroundColor: '#fff'}} elevation={0}>
                <Toolbar>
                    <Grid container justifyContent='space-between' alignItems={'center'}>
                        <Grid item className={'logo-item'} justifyContent={'center'} alignContent={'center'}>
                            {priceSpyLogo}
                        </Grid>

                        <Grid item display={'flex'} justifyContent={'end'}>
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

                        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} transitionDuration={0}>
                            {drawerContent}
                        </Drawer>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}