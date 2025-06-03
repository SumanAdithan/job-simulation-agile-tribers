import { create } from 'zustand';
import axios from 'axios';

export type ProductType = {
    id: string;
    name: {
        name: string;
        sub_name: string;
    };
    favourite: boolean;
    title: {
        title: string;
        sub_title: string[];
    };
    price: number;
    spec: {
        title: string;
        sub_title: string;
    }[];
    product_image: string;
    product_modules: string[];
};

export type CartProductType = {
    id?: string;
    name: {
        name: string;
        sub_name: string;
    };
    net_price: number;
    total_price: number;
    quantity: number;
    product_image: string;
};

type ProductStore = {
    product: ProductType;
    category: string;
    product_status: boolean;
    cart: CartProductType[];
    cart_status: boolean;
    fetchProduct: (category: string) => Promise<void>;
    fetchCart: () => Promise<void>;
    setCategory: (category: string) => void;
    deleteCartProduct: (id: string) => void;
    updateCartProduct: (updatedItems: { id: string; quantity: number; total_price: number }) => void;
    addToCart: (product: CartProductType) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
    product: {
        id: '',
        name: {
            name: '',
            sub_name: '',
        },
        favourite: false,
        title: {
            title: '',
            sub_title: [],
        },
        price: 0,
        spec: [],
        product_image: '',
        product_modules: [],
    },
    product_status: false,
    cart_status: false,
    category: 'phone',
    cart: [],

    fetchProduct: async (category: string) => {
        set({ product_status: false });
        try {
            const product = await axios.get(`http://localhost:3000/products/${category}`);
            set({ product: product.data, product_status: true });
        } catch (err) {
            set({ product_status: false });
            console.log(err);
        }
    },

    fetchCart: async () => {
        set({ cart_status: false });
        try {
            const cartProducts = await axios.get(`http://localhost:3000/cart`);
            set({ cart: cartProducts.data, cart_status: true });
        } catch (err) {
            set({ cart_status: false });
            console.log(err);
        }
    },

    addToCart: async (product: CartProductType) => {
        set({ cart_status: false });
        try {
            const cartProduct = await axios.post(`http://localhost:3000/cart`, product);
            set((state) => ({
                cart: [...state.cart, cartProduct.data],
                cart_status: true,
            }));
        } catch (err) {
            set({ cart_status: false });
            console.log(err);
        }
    },

    updateCartProduct: async (updatedItems) => {
        try {
            const updatedProduct = await axios.patch(`http://localhost:3000/cart/${updatedItems.id}`, updatedItems);
            console.log(updatedProduct);
            set((state) => ({
                cart: state.cart.map((product) =>
                    product.id === updatedItems.id ? { ...product, ...updatedProduct.data } : product
                ),
                cart_status: true,
            }));
        } catch (err) {
            console.log(err);
        }
    },

    deleteCartProduct: async (id: string) => {
        try {
            await axios.delete(`http://localhost:3000/cart/${id}`);
            set((state) => ({
                cart: state.cart.filter((product) => product.id !== id),
            }));
        } catch (err) {
            console.log(err);
        }
    },

    setCategory: (category: string) => set({ category }),
}));
