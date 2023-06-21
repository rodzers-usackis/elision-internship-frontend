import InventoryIcon from '@mui/icons-material/Inventory';
import RadarIcon from '@mui/icons-material/Radar';
import AssessmentIcon from '@mui/icons-material/Assessment';
import {NotificationsBellIcon} from "../../components/dashboard-drawer/NotificationsBellIcon"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Settings from '@mui/icons-material/Settings';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';

export const DashboardDrawerItems = [
    {
        title: 'My Catalog',
        href: '/dashboard/my-catalog',
        className: 'nav-links',
        icon: <InventoryIcon/>,
        value: 1,
    },
    {
        title: 'Reports',
        href: '/dashboard/reports',
        className: 'nav-links',
        icon: <AssessmentIcon/>,
        value: 2,
    },
    {
        title: ' Alerts',
        href: '/dashboard/alerts',
        className: 'nav-links',
        icon: <NotificationsBellIcon/>,
        value: 3,
    },
    {
        title: ' Alert Rules',
        href: '/dashboard/alert-rules',
        className: 'nav-links',
        icon: <EditNotificationsIcon/>,
        value: 4,
        subValue: 1,
    },
    {
        title: 'Alert Settings',
        href: '/dashboard/alert-settings',
        className: 'nav-links',
        icon: <Settings/>,
        value: 5,
        subValue: 2,
    },
]

export enum DashboardDrawerItem{
    MyCatalog = 1,
    Reports = 2,
    Alerts = 3,
    AlertRules = 4,
    AlertSettings = 5,
}