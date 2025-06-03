import type { CartProductType } from '@store';

export const calculateOrderSummary = (cart: CartProductType[]) => {
    const { sub_total, quantity } = cart.reduce(
        (acc, item) => {
            acc.sub_total += item.total_price;
            acc.quantity += item.quantity;
            return acc;
        },
        { sub_total: 0, quantity: 0 }
    );

    const shipping_discount = 100;
    const shipping_handling = 1000;
    const tax = sub_total * 0.18;
    const total = sub_total + tax + shipping_handling - shipping_discount;

    return {
        sub_total,
        quantity,
        shipping_discount,
        shipping_handling,
        tax,
        total,
    };
};
