import { Layout } from '@layouts';
import { Route } from 'react-router-dom';

export const MainRoutes = () => {
    return <Route path='/' element={<Layout />}></Route>;
};
