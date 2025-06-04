import { Box } from '@mui/material';
import { Main, Header, Sidebar } from '@layouts';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
                backgroundColor: '#111827',
                color: '#f3f4f6',
                overflow: 'hidden',
            }}
        >
            <Sidebar />
            <Box
                sx={{
                    flex: 1,
                    zIndex: 20,
                    overflow: 'auto',
                    position: 'relative',
                    backgroundColor: '#111827',
                    scrollBehavior: 'smooth',
                }}
            >
                <Header />
                <Main>
                    <Outlet />
                </Main>
            </Box>
        </Box>
    );
};
