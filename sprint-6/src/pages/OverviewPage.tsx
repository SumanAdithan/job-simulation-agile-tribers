import { CategoryDistributionChart, SalesChannelChart, SalesOverviewChart, StatCard } from '@components';
import { OVERVIEW_STAT } from '@constants';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

export const OverviewPage = () => {
    return (
        <>
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {OVERVIEW_STAT.map((stat, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                        <StatCard {...stat} />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <SalesOverviewChart />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <CategoryDistributionChart />
                </Box>
            </Box>
            <Box marginTop={3}>
                <SalesChannelChart />
            </Box>
        </>
    );
};
