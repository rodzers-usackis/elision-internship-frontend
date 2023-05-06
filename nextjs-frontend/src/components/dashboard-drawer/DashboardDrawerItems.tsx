import InventoryIcon from '@mui/icons-material/Inventory';
import RadarIcon from '@mui/icons-material/Radar';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
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
        icon: <NotificationsNoneIcon/>,
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