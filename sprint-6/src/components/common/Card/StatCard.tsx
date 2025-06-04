import { type LucideIcon } from 'lucide-react';
import { Box, Typography } from '@mui/material';

interface StatCardProps {
    name: string;
    icon: LucideIcon;
    value: string;
    color?: string;
    change?: number;
}

export const StatCard = ({ name, icon: Icon, value, color = '#f3f4f6' }: StatCardProps) => {
    return (
        <Box
            sx={{
                minWidth: 200,
                backgroundColor: '#1f2937cc',
                backdropFilter: 'blur(8px)',
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid #374151',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                },
            }}
        >
            <Box px={4} py={3}>
                <Typography
                    display='flex'
                    alignItems='center'
                    variant='body2'
                    fontWeight={500}
                    sx={{ color: '#E5E7EB' }}
                >
                    <Icon size={22} style={{ color, marginRight: 8 }} />
                    {name}
                </Typography>
                <Typography variant='h5' fontWeight={600} sx={{ color: '#f3f4f6', mt: 1 }}>
                    {value}
                </Typography>
            </Box>
        </Box>
    );
};
