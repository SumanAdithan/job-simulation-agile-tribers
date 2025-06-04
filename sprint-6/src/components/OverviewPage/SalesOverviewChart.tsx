import { CustomLineChart } from '@charts';
import { SALES_DATA } from '@constants';
import { Box, Typography } from '@mui/material';

const lineChartProps = {
    data: SALES_DATA,
    strokeDashArray: '3 3',
    dataKeys: ['name', 'sales'],
    strokes: {
        cartesianGridStroke: '#4b5563',
        xAxisStroke: '#9ca3af',
        yAxisStroke: '#9ca3af',
    },
    tooltip: {
        active: true,
        contentStyle: {
            backgroundColor: 'rgba(31, 45, 55, 0.8)',
            borderColor: '#4b5563',
        },
        itemStyle: { color: '#e5e7eb' },
    },
    line: {
        type: 'monotone' as 'monotone',
        stroke: '#6366f1',
        strokeWidth: 3,
        dot: {
            fill: '#6366f1',
            strokeWidth: 2,
            r: 5,
        },
        activeDot: {
            r: 8,
            strokeWidth: 2,
        },
    },
    legend: false,
};

export const SalesOverviewChart = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                boxShadow: 6,
                backdropFilter: 'blur(12px)',
                borderRadius: 3,
                py: 2,
                pr: 3,
                pl: 2,
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
                <CustomLineChart {...lineChartProps} />
            </Box>
        </Box>
    );
};
