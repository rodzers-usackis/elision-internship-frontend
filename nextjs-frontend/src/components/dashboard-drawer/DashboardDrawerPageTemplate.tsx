import React, {ReactNode} from "react";
import Grid from "@mui/material/Grid";
import DashboardDrawer from "./DashboardDrawer";
import styles from "../../styles/DashboardCatalog.module.css";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {DashboardDrawerItem} from "./DashboardDrawerItems";

interface DashboardDrawerPageTemplateProps {
    currentPage: DashboardDrawerItem
    pageTitle: string;
    pageSubtitle: string;
    actionShelf: ReactNode;
    pageComponent: ReactNode;
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


                    {actionShelf}


                    <Divider/>

                    {pageComponent}

                </Grid>
            </Grid>
        </>
    )

}