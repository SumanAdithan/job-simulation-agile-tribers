import { add, apple, favourite, notFavourite } from '@assets';
import { useProductStore, type ProductType } from '@store';
import { useNavigate } from 'react-router-dom';

export const Product = ({ product }: { product: ProductType }) => {
    const navigate = useNavigate();
    const addToCart = useProductStore((state) => state.addToCart);

    const cartProduct = {
        name: {
            name: product.name.name,
            sub_name: product.name.sub_name,
        },
        total_price: product.price,
        net_price: product.price,
        quantity: 1,
        product_image: product.product_image,
    };

    return (
        <div className='relative flex text-[#ffffff] h-full'>
            <div className='flex justify-between gap-20'>
                <div className='flex flex-col justify-between '>
                    <div>
                        <div className='flex gap-5 mb-8'>
                            <div className='p-3 bg-white/5 rounded-md'>
                                <img
                                    className='w-4 h-4 select-none'
                                    src={product.favourite ? favourite : notFavourite}
                                    alt='favourite'
                                />
                            </div>
                            <div className='w-8'>
                                <img src={apple} alt='apple' />
                            </div>
                        </div>
                        <h1 className='text-xl font-light'>{product.title.title}</h1>
                        <div className='text-4xl font-extrabold'>
                            {product.title.sub_title.map((title: string, i: number) => (
                                <div key={i}>{title}</div>
                            ))}
                        </div>
                    </div>
                    <div className='mb-5'>
                        <h1 className='text-xl font-light tracking-[1rem]'>{product.name.name}</h1>
                        <p className='text-5xl font-extrabold'>{product.name.sub_name}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='w-[500px] mr-8'>
                        <img src={product.product_image} alt='iphone' />
                    </div>
                </div>
            </div>
            <div className='mt-10 ml-10 flex gap-5'>
                <div className='flex flex-col gap-4'>
                    {product.spec.map(({ title, sub_title }: { title: string; sub_title: string }) => (
                        <div className='flex flex-col justify-center' key={title}>
                            <h1 className='font-extralight'>{title}</h1>
                            <p className='font-extrabold'>{sub_title}</p>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-8'>
                    {product.product_modules.map((img_path: any, i: number) => (
                        <div className='bg-white/5 p-5 rounded-xl hover:scale-110 transition duration-300' key={i}>
                            <img className='w-28' src={img_path} alt={`module-${i}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='absolute bg-white/4 backdrop-blur-md -bottom-27 p-6  text-2xl font-extrabold rounded-xl flex items-center gap-10'>
                <div>₹{product.price}</div>
                <div className='flex gap-2'>
                    <div
                        className='hover:scale-110 transition duration-300'
                        onClick={() => {
                            addToCart(cartProduct);
                            navigate('/cart');
                        }}
                    >
                        <img src={add} alt='add' />
                    </div>
                </div>
            </div>
        </div>
    );
};
