import React from "react";
import {Button, Divider, Drawer, Grid, Typography} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import {DashboardDrawerItems} from "<components>/components/dashboard-drawer/DashboardDrawerItems";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Image from "next/image";
import Link from 'next/link'


export default function DashboardDrawer() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const buttonProps = (value: number) => ({
        selected: selectedIndex === value,
        onClick: () => setSelectedIndex(value),
    });


    return (
        <Drawer variant={'permanent'} anchor={'left'}>
            <Grid container display={'flex'} justifyContent={'space-between'} flexDirection={'column'} paddingX={2}
                  sx={{
                      height: '100%',
                  }}>
                <Grid container display={'flex'} flexDirection={'column'}>
                    <Grid item display={'flex'} justifyContent={'center'} paddingY={1}>
                        <Toolbar>
                            <Image
                                src="/price_spy_logo.svg"
                                alt="Price Spy Logo"
                                width={180}
                                height={80}
                                priority
                            />
                        </Toolbar>
                    </Grid>
                    <Divider/>
                    <Grid item paddingTop={1}>
                        <List>
                            {DashboardDrawerItems.map((item) => (
                                <ListItem key={item.value}>
                                    <Link href={item.href}>
                                        <ListItemButton {...buttonProps(item.value)}>
                                            <ListItemIcon>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.title}/>
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>

                <Grid item>
                    <Divider/>
                    <Grid container display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}
                          flexDirection={'row'} paddingY={2}>
                        <Grid item>
                            <PhoneIcon sx={{
                                fontSize: '32px'
                            }}/>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={'bold'}>
                                Need help? Chat with us
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid container display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}
                          flexDirection={'row'} paddingY={2}>
                        <Grid item>
                            <Button>
                                <AccountCircleIcon sx={{fontSize: '48px'}}/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Customer
                            </Typography>
                            <Typography fontWeight={'bold'}>
                                customer@elision.eu
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button>
                                <LogoutIcon sx={{fontSize: '30px'}}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Drawer>
    )
}