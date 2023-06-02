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
        title: ' Competitors',
        href: '/dashboard/competitors',
        className: 'nav-links',
        icon: <RadarIcon/>,
        value: 2,
    },
    {
        title: 'Reports',
        href: '/dashboard/reports',
        className: 'nav-links',
        icon: <AssessmentIcon/>,
        value: 3,
    },
    {
        title: ' Alerts',
        href: '/dashboard/alerts',
        className: 'nav-links',
        icon: <NotificationsBellIcon/>,
        value: 4,
    },
    {
        title: ' Alert Rules',
        href: '/dashboard/alert-rules',
        className: 'nav-links',
        icon: <EditNotificationsIcon/>,
        value: 5,
        subValue: 1,
    },
    {
        title: 'Alert Settings',
        href: '/dashboard/alert-settings',
        className: 'nav-links',
        icon: <Settings/>,
        value: 6,
        subValue: 2,
    },
    {
        title: 'My Account',
        href: '/dashboard/my-account',
        className: 'nav-links',
        icon: <PermIdentityIcon/>,
        value: 7,
    }
]

export enum DashboardDrawerItem{
    MyCatalog = 1,
    Competitors = 2,
    Reports = 3,
    Alerts = 4,
    AlertRules = 5,
    AlertSettings = 6,
    MyAccount = 7,
}