import { useEffect, useState } from 'react';
import { Box, IconButton, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { SIDEBAR_ITEMS } from '@constants';

export const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const isMobile = useMediaQuery('(max-width:767px)');

    useEffect(() => {
        setIsSidebarOpen(!isMobile);
    }, [isMobile]);

    return (
        <Box
            component='aside'
            sx={{
                width: isSidebarOpen ? 240 : 75,
                backgroundColor: '#1F2937',
                height: '100vh',
                padding: 2,
                borderRight: '1px solid #374151',
                transition: 'width 0.3s ease',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <IconButton
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                sx={{
                    p: 1,
                    borderRadius: '50%',
                    transition: '0.3s ease',
                    maxWidth: 'fit-content',
                    color: 'white',
                    alignSelf: 'flex-start',
                    mb: 2,
                    '&:hover': {
                        scale: 1.05,
                        backgroundColor: '#374151',
                    },
                }}
            >
                <MenuIcon />
            </IconButton>

            <List sx={{ flexGrow: 1 }}>
                {SIDEBAR_ITEMS.map((item) => (
                    <NavLink key={item.href} to={item.href} style={{ textDecoration: 'none' }}>
                        {({ isActive }) => (
                            <ListItemButton
                                sx={{
                                    mb: 1,
                                    borderRadius: 2,
                                    color: isActive ? 'white' : '#D1D5DB',
                                    backgroundColor: isActive ? '#374151' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#374151',
                                        color: 'white',
                                    },
                                    justifyContent: isSidebarOpen ? 'flex-start' : 'center',
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: item.color,
                                        minWidth: 0,
                                        justifyContent: 'center',
                                        mr: isSidebarOpen ? 2 : 0,
                                    }}
                                >
                                    <item.icon />
                                </ListItemIcon>

                                {isSidebarOpen && <ListItemText primary={item.name} />}
                            </ListItemButton>
                        )}
                    </NavLink>
                ))}
            </List>
        </Box>
    );
};
