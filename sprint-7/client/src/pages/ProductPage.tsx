import { Loader, Product } from '@components';
import { useProductStore } from '@store';
import { useEffect } from 'react';

export const ProductPage = () => {
    const product = useProductStore((state) => state.product);
    const category = useProductStore((state) => state.category);
    const fetchProduct = useProductStore((state) => state.fetchProduct);
    const productStatus = useProductStore((state) => state.product_status);

    useEffect(() => {
        if (category) {
            fetchProduct(category);
        }
    }, [category]);

    if (!productStatus) return <Loader />;

    return <Product product={product} />;
};
