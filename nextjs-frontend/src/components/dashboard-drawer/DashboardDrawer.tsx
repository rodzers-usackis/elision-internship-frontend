import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import {DashboardDrawerItem, DashboardDrawerItems} from "../../components/dashboard-drawer/DashboardDrawerItems";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Image from "next/image";
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import styles from '../../styles/DashboardDrawer.module.css'
import {useContext, useState} from "react";
import AuthenticationContext from "../../context/authentication/AuthenticationContext";
import IconButton from "@mui/material/IconButton";

export interface DashboardDrawerProps {
    selectedPage: DashboardDrawerItem;
    showHideButton?: boolean;
    onHide?: () => void;
    isMobile?: boolean;
}

export default function DashboardDrawer({selectedPage, showHideButton, onHide, isMobile}: DashboardDrawerProps) {
    const drawerWidth = '260px'
    // const [selectedIndex, setSelectedIndex] = useState(1);
    const {logout, loggedInUser} = useContext(AuthenticationContext);

    const buttonProps = (value: number) => ({
        selected: selectedPage === value
        // onClick: () => setSelectedIndex(value),
    });

    return (
        <>
            <Drawer variant={'permanent'} anchor={'left'} sx={{
                minWidth: drawerWidth,
                width: drawerWidth,
            }}>
                {showHideButton ? <IconButton onClick={onHide}>
                    <CloseIcon/>
                </IconButton> : ''}
                <Grid container display={'flex'} flexDirection={'column'} paddingX={2}
                      sx={{height: '100%', flexWrap: "nowrap"}}>
                    <Grid item>
                        <Grid container display={'flex'} justifyContent={'center'} paddingY={1}>
                            <Toolbar>
                                {isMobile ? '' :
                                    <Image src="/price_spy_logo.svg" alt="Price Spy Logo" width={180} height={80}
                                           priority/>}
                            </Toolbar>
                        </Grid>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12} flex={1} overflow="auto">
                        <List>
                            {DashboardDrawerItems.map((item) => (
                                <ListItem key={item.value}>
                                    <Link href={item.href} className={styles.listItemLink}>
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
                    <Grid item position="sticky" bottom={0}>
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
                                    {loggedInUser?.firstName}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button onClick={(e) => {
                                    e.preventDefault();
                                    logout()
                                }}>
                                    <LogoutIcon sx={{fontSize: '30px'}}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Drawer>
        </>
    );

}