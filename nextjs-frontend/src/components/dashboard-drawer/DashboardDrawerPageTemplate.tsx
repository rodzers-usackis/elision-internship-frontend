import React, {ReactNode} from "react";
import Grid from "@mui/material/Grid";
import DashboardDrawer from "./DashboardDrawer";
import styles from "../../styles/DashboardCatalog.module.css";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {DashboardDrawerItem} from "./DashboardDrawerItems";

interface DashboardDrawerPageTemplateProps {
    pageComponent: ReactNode;
    pageTitle: string;
    pageSubtitle: string;
    actionShelf: ReactNode;
    currentPage: DashboardDrawerItem
}

export default function DashboardDrawerPageTemplate({
                                                        pageComponent,
                                                        currentPage,
                                                        pageTitle,
                                                        pageSubtitle,
                                                        actionShelf
                                                    }: DashboardDrawerPageTemplateProps) {

    return (
        <>
            <Grid container display={'flex'} flexDirection={'row'} height={'100vh'} px={0}>
                <Grid item style={{flex: 0}}>
                    <DashboardDrawer selectedPage={currentPage}/>
                </Grid>

                <Grid item className={styles.dashboardMainContentWrapper}>
                    <Typography className={styles.dashboardTitle}>
                        {pageTitle}
                    </Typography>
                    <Typography className={styles.dashboardSubtitle}>
                        {pageSubtitle}
                    </Typography>
                    <Grid container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Grid item xs={6} className={styles.actionShelf}>
                            {actionShelf}
                        </Grid>
                    </Grid>

                    <Divider/>

                    {pageComponent}

                </Grid>
            </Grid>
        </>
    )

}