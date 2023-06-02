import InventoryIcon from '@mui/icons-material/Inventory';
import RadarIcon from '@mui/icons-material/Radar';
import AssessmentIcon from '@mui/icons-material/Assessment';
import {NotificationsBellIcon} from "../../components/dashboard-drawer/NotificationsBellIcon"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

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
        title: 'My Account',
        href: '/dashboard/my-account',
        className: 'nav-links',
        icon: <PermIdentityIcon/>,
        value: 5,
    }
]

export enum DashboardDrawerItem{
    MyCatalog = 1,
    Competitors = 2,
    Reports = 3,
    Alerts = 4,
    MyAccount = 5,
    AlertSettings = 6,
}