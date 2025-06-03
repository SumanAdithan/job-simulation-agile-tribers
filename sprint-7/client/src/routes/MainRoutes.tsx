import { Route } from 'react-router-dom';
import { Layout } from '@layouts';
import { CartPage, ProductPage } from '@pages';

export const MainRoutes = () => {
    return (
        <Route path='/' element={<Layout />}>
            <Route index element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
        </Route>
    );
};
