import { HEADER_TITLE } from '@constants';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Header = () => {
    const [title, setTitle] = useState('');
    const { pathname } = useLocation();

    useEffect(() => {
        setTitle(HEADER_TITLE[pathname]);
    }, [pathname]);

    return (
        <Box
            component='header'
            sx={{
                backgroundColor: '#1f2937',
                borderBottom: '1px solid #374151',
            }}
        >
            <AppBar
                position='static'
                sx={{
                    backgroundColor: 'inherit',
                    boxShadow: 'none',
                }}
            >
                <Toolbar
                    sx={{
                        maxWidth: '1280px',
                        width: '100%',
                        mx: 'auto',
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            fontWeight: 600,
                            color: '#f3f4f6',
                        }}
                    >
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
