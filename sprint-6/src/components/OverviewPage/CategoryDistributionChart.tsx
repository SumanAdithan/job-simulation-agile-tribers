import { CustomPieChart } from '@charts';
import { CATEGORY_DATA, CATEGORY_DATA_COLORS as COLORS } from '@constants';
import { Box, Typography } from '@mui/material';

const pieChartProps = {
    data: CATEGORY_DATA,
    pie: {
        cx: '50%',
        cy: '50%',
        labelLine: false,
        outerRadius: 80,
        fill: '#8884d8',
    },
    dataKeys: ['name', 'value'],
    colors: COLORS,
    tooltip: {
        active: true,
        contentStyle: {
            backgroundColor: 'rgba(31, 45, 55, 0.8)',
            borderColor: '#4b5563',
        },
        itemStyle: { color: '#e5e7eb' },
    },
    legend: true,
};

export const CategoryDistributionChart = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                boxShadow: 6,
                backdropFilter: 'blur(12px)',
                borderRadius: 3,
                py: 2,
                px: 2,
                border: '1px solid #374151',
            }}
        >
            <Typography variant='h6' marginBottom={2}>
                Sales Overview
            </Typography>
            <Box
                sx={{
                    height: 320,
                    overflowY: 'hidden',
                    overflowX: 'auto',
                }}
            >
                <CustomPieChart {...pieChartProps} />
            </Box>
        </Box>
    );
};
