import React, {ReactNode} from "react";
import Grid from "@mui/material/Grid";
import DashboardDrawer from "./DashboardDrawer";
import styles from "../../styles/DashboardGenericContent.module.css";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {DashboardDrawerItem} from "./DashboardDrawerItems";
import ResponsiveDashboardDrawer from "./ResponsiveDashboardDrawer";

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
            <Grid className={styles.dashboardPage} container display={'flex'} flexDirection={'row'} height={'100vh'} px={0}>
                <Grid item sx={{maxHeight: '64px'}}>
                    <ResponsiveDashboardDrawer selectedPage={currentPage}/>
                </Grid>

                <Grid item className={styles.dashboardWrapper}>
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