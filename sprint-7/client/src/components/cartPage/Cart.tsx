import { minus, plus, trash } from '@assets';
import { useProductStore, type CartProductType } from '@store';
import { calculateOrderSummary } from '@utils';

export const Cart = ({ cart }: { cart: CartProductType[] }) => {
    const updateCartProduct = useProductStore((state) => state.updateCartProduct);
    const deleteCartProduct = useProductStore((state) => state.deleteCartProduct);

    const orderSummary = calculateOrderSummary(cart);

    const updateProductQuantity = (
        type: 'add' | 'remove',
        id: string,
        quantity: number,
        total_price: number,
        net_price: number
    ) => {
        const newQuantity = type === 'add' ? quantity + 1 : quantity - 1;
        if (newQuantity < 1) return;

        const newTotalPrice = type === 'add' ? total_price + net_price : total_price - net_price;

        updateCartProduct({ id, quantity: newQuantity, total_price: newTotalPrice });
    };

    return (
        <div className='flex gap-52'>
            <div>
                <h1 className='text-2xl font-extrabold p-2'>Your Cart</h1>
                <div>
                    <ul className='h-[500px] overflow-auto w-fit p-4'>
                        {cart.map((product, i) => (
                            <li className='bg-white/5 w-fit py-8 px-12 rounded-xl mb-4 relative' key={i}>
                                <div className='w-5 absolute right-4 bottom-4'>
                                    <img
                                        src={trash}
                                        alt='trash'
                                        onClick={() => deleteCartProduct(product.id as string)}
                                    />
                                </div>
                                <div className='flex gap-15'>
                                    <div className='w-[150px]'>
                                        <img src={product.product_image} alt='product' />
                                    </div>
                                    <div>
                                        <h1>{product.name.name}</h1>
                                        <p>{product.name.sub_name}</p>
                                        <div className='flex gap-2 mt-2 items-center'>
                                            <div
                                                className='w-10 hover:scale-110 transition duration-300 cursor-pointer'
                                                onClick={() =>
                                                    updateProductQuantity(
                                                        'remove',
                                                        product.id as string,
                                                        product.quantity,
                                                        product.total_price,
                                                        product.net_price
                                                    )
                                                }
                                            >
                                                <img src={minus} alt='minus' />
                                            </div>
                                            <div>{product.quantity}</div>
                                            <div
                                                className='w-10 hover:scale-110 transition duration-300 cursor-pointer'
                                                onClick={() =>
                                                    updateProductQuantity(
                                                        'add',
                                                        product.id as string,
                                                        product.quantity,
                                                        product.total_price,
                                                        product.net_price
                                                    )
                                                }
                                            >
                                                <img src={plus} alt='plus' />
                                            </div>
                                        </div>
                                        <p className='font-extrabold text-center mt-2'>₹{product.total_price}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-extrabold'>Order Summary</h1>
                <div className='flex flex-col gap-5 mt-10 ml-10'>
                    <div className='flex justify-between w-[300px]'>
                        <div>Subtotal {`(${orderSummary.quantity} items)`}</div>
                        <div>₹{orderSummary.sub_total}</div>
                    </div>
                    <div className='flex justify-between w-[300px]'>
                        <div>Shipping Discount</div>
                        <div>-₹{cart.length !== 0 ? orderSummary.shipping_discount : 0}</div>
                    </div>
                    <div className='flex justify-between w-[300px]'>
                        <div>Shipping and Handling</div>
                        <div>₹{cart.length !== 0 ? orderSummary.shipping_handling : 0}</div>
                    </div>
                    <div className='flex justify-between w-[300px]'>
                        <div>Tax (18% GST)</div>
                        <div>₹{orderSummary.tax}</div>
                    </div>
                    <div className='border'></div>
                    <div className='mt-6'>
                        <div className='flex justify-between w-[300px]'>
                            <div>Total</div>
                            <div>₹{cart.length !== 0 ? orderSummary.total : 0}</div>
                        </div>
                    </div>
                    <div className='p-4 bg-white text-black rounded-xl text-center mt-2 hover:scale-105 transition duration-300 cursor-pointer'>
                        Proceed to Checkout
                    </div>
                </div>
            </div>
        </div>
    );
};
