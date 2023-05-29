import Typography from "@mui/material/Typography";
import styles from '../../styles/AlertSettings.module.css'
import React from "react";

interface AlertSettingsFormRowProps {
    title: string;
    children: React.ReactNode;
}


export function AlertSettingsFormRow({title, children}: AlertSettingsFormRowProps) {

    return (
        <div className={styles["alert-settings-row"]} >
            <Typography variant={"h5"}>{title}</Typography>
            {children}
        </div>
    )

}