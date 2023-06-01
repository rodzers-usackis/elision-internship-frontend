import NotificationsActive from "@mui/icons-material/NotificationsActive";
import {useAlertCount} from "../../hooks/alerts/useAlertCount";
import Badge from "@mui/material/Badge";

export const NotificationsBellIcon = () => {
    const {alertCount} = useAlertCount();

    return (
        <>
            {alertCount! > 0 ?
                <>
                    <Badge badgeContent={alertCount} color="error">
                        <NotificationsActive/>
                    </Badge>
                </>
                :
                <NotificationsActive/>}
        </>
    );
}