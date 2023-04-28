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
import Typography from "@mui/material/Typography";
import {Drawer, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileNavbar() {

    return (
        <>
            <AppBar className={'appbar-paper'}
                    sx={{position: 'sticky', top: 0, left: 0, right: 0, backgroundColor: '#fff'}} elevation={0}>
                <Toolbar>
                    <Grid container justifyContent='space-between' alignItems={'center'}>
                        <Grid item className={'logo-item'} justifyContent={'center'} alignContent={'center'} lg={2}>
                            <Link href='/'>
                                <Image
                                    src="/price_spy_logo.svg"
                                    alt="Price Spy Logo"
                                    width={100}
                                    height={60}
                                    priority
                                />
                            </Link>
                        </Grid>

                        <Grid item xl={4} md={5} sm={6} justifyContent={'end'}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <MenuIcon className={styles.burgerIcon} fontSize={'large'}/>
                            </IconButton>
                        </Grid>

                        <Drawer>

                        </Drawer>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}