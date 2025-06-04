import { Route } from 'react-router-dom';
import { Layout } from '@layouts';
import { OverviewPage } from '@pages';

export const AdminRoutes = () => {
    return (
        <Route path='/' element={<Layout />}>
            <Route index element={<OverviewPage />} />
        </Route>
    );
};
