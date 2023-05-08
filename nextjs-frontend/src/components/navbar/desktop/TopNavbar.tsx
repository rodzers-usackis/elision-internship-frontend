import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TopNavbarItems } from './TopNavbarItems'
import {Hidden, useMediaQuery} from "@mui/material";

import Link from 'next/link'
import Image from 'next/image'

import styles from '../../../styles/TopNavbar.module.css'

export default function TopNavbar() {
    const [isAuthenticated, setAuthenticated] = React.useState(false);
    const matches = useMediaQuery('(max-width:599px)');

    return (
        <>
            <AppBar className={'appbar-paper'} sx={{position: 'sticky', top: 0, left: 0, right: 0, backgroundColor: '#fff'}} elevation={0}>
                <Toolbar>
                    <Grid container justifyContent='space-between' alignItems={'center'}>
                        <Grid item className={'logo-item'} alignContent={'center'} lg={2}>
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

                        <Grid item lg={4} md={6} sm={8}>
                            <Hidden mdDown={matches}>
                                <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'space-between'}}>
                                    {TopNavbarItems.map((page) => (
                                        <Link href={page.href} key={page.title}>
                                            <Button disableRipple className={styles.navbarItemButton}>
                                                <Typography className={styles.navbarItem}>
                                                    {page.title}
                                                </Typography>
                                            </Button>
                                        </Link>
                                    ))}
                                </Box>
                            </Hidden>
                        </Grid>

                        <Grid item lg={2}>
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'end'}}>
                                <Link href={'/register'}>
                                    <Button disableRipple className={styles.signUpButton} >
                                        <Typography className={styles.signUpButtonText}>
                                            Get free trial
                                        </Typography>
                                    </Button>
                                </Link>

                                <Link href={'/login'}>
                                    <Button disableRipple className={styles.navbarItemButton}>
                                        <Typography className={styles.navbarItem}>
                                            Sign in
                                        </Typography>
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}