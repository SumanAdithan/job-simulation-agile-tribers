import { Box } from '@mui/material';
import type { ReactNode } from 'react';

interface MainProps {
    children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
    return (
        <Box
            component='main'
            sx={{
                maxWidth: '1280px',
                width: '100%',
                mx: 'auto',
                py: 3,
                px: { xs: 2, lg: 4 },
            }}
        >
            {children}
        </Box>
    );
};
