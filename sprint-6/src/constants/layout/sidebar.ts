import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';
import type { SvgIconComponent } from '@mui/icons-material';

interface SidebarItems {
    name: string;
    icon: SvgIconComponent;
    color: string;
    href: string;
}

export const SIDEBAR_ITEMS: SidebarItems[] = [
    { name: 'Overview', icon: BarChartIcon, color: '#6366f1', href: '/' },
    { name: 'Products', icon: ShoppingBagIcon, color: '#8B5CF6', href: '/products' },
    { name: 'Users', icon: GroupIcon, color: '#EC4899', href: '/users' },
    { name: 'Sales', icon: AttachMoneyIcon, color: '#10B981', href: '/sales' },
    { name: 'Orders', icon: ShoppingCartIcon, color: '#F59E0B', href: '/orders' },
    { name: 'Analytics', icon: TrendingUpIcon, color: '#3B82F6', href: '/analytics' },
    { name: 'Settings', icon: SettingsIcon, color: '#6EE7B7', href: '/settings' },
];
