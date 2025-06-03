import { Cart, Loader } from '@components';
import { useProductStore } from '@store';
import { useEffect } from 'react';

export const CartPage = () => {
    const cart = useProductStore((state) => state.cart);
    const fetchCart = useProductStore((state) => state.fetchCart);
    const cartStatus = useProductStore((state) => state.cart_status);

    useEffect(() => {
        fetchCart();
    }, []);

    if (!cartStatus) return <Loader />;

    return <Cart cart={cart} />;
};
