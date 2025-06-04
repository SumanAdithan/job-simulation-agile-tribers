import { CustomBarChart } from '@charts';
import { SALES_CHANNEL_DATA, SALES_CHANNEL_DATA_COLORS as COLORS } from '@constants';
import { Box, Typography } from '@mui/material';

const barChartProps = {
    data: SALES_CHANNEL_DATA,
    strokeDashArray: '3 3',
    dataKeys: ['name', 'value'],
    strokes: {
        cartesianGridStroke: '#4b5563',
        xAxisStroke: '#9ca3af',
        yAxisStroke: '#9ca3af',
    },
    bar: {
        fill: '#8884d8',
    },
    tooltip: {
        active: true,
        contentStyle: {
            backgroundColor: 'rgba(31, 45, 55, 0.8)',
            borderColor: '#4b5563',
        },
        itemStyle: { color: '#e5e7eb' },
    },
    colors: COLORS,
    legend: true,
};

export const SalesChannelChart = () => {
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
                Sales By Channel
            </Typography>
            <Box
                sx={{
                    height: 320,
                    overflowY: 'hidden',
                    overflowX: 'auto',
                }}
            >
                <CustomBarChart {...barChartProps} />
            </Box>
        </Box>
    );
};
