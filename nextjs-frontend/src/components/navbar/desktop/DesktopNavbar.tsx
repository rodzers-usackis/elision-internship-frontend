import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {NavbarItems} from '../NavbarItems'

import Link from 'next/link'
import Image from 'next/image'

import styles from '../../../styles/DesktopNavbar.module.css'

export default function DesktopNavbar() {

    return (
        <>
            <AppBar className={'appbar-paper'}
                    sx={{position: 'sticky', top: 0, left: 0, right: 0, backgroundColor: '#fff'}} elevation={0}>
                <Toolbar>
                    <Grid container justifyContent='space-between' alignItems={'center'} paddingX={2}>
                        <Grid item className={'logo-item'} alignContent={'center'} md={3}>
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

                        <Grid item xl={4} md={5} sm={6}>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                {NavbarItems.map((page) => (
                                    <Link href={page.href} key={page.title}>
                                        <Button disableRipple className={styles.navbarItemButton}>
                                            <Typography className={styles.navbarItem}>
                                                {page.title}
                                            </Typography>
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box sx={{display: 'flex', gap: 2, justifyContent: 'end'}}>
                                <Link href={'/register'}>
                                    <Button disableRipple className={styles.signUpButton}>
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