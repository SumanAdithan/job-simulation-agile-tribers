import { activePhone, activeVr, activeWatch, inactivePhone, inactiveVr, inactiveWatch } from '@assets';
import { useProductStore } from '@store';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = useProductStore((state: any) => state);

    const [activeNav, setActiveNav] = useState({
        phone: true,
        vr: false,
        watch: false,
    });

    return (
        <header className='flex items-center justify-between'>
            <div
                className='py-4 px-6 bg-white/5 backdrop-blur-2xl w-fit mb-5 rounded-xl hover:scale-x-110 transition duration-300 cursor-pointer'
                onClick={() => (location.pathname === '/cart' ? navigate('/') : navigate('/cart'))}
            >
                {location.pathname === '/cart' ? 'Back' : 'Cart'}
            </div>
            {location.pathname !== '/cart' && (
                <div className='p-4 bg-white/5 backdrop-blur-2xl mb-5 rounded-xl flex gap-4'>
                    <div
                        className={`p-2 ${activeNav.phone ? 'bg-[#ffffff]' : 'bg-[#ffffff]/5'} rounded-md`}
                        onClick={() => {
                            setActiveNav({ phone: true, vr: false, watch: false });
                            product.setCategory('phone');
                        }}
                    >
                        {activeNav.phone ? (
                            <img src={activePhone} alt='phone' />
                        ) : (
                            <img src={inactivePhone} alt='phone' />
                        )}
                    </div>
                    <div
                        className={`p-2 ${activeNav.vr ? 'bg-[#ffffff]' : 'bg-[#ffffff]/5'} rounded-md`}
                        onClick={() => {
                            setActiveNav({ phone: false, vr: true, watch: false });
                            product.setCategory('vr');
                        }}
                    >
                        {activeNav.vr ? <img src={activeVr} alt='phone' /> : <img src={inactiveVr} alt='phone' />}
                    </div>
                    <div
                        className={`p-2 ${activeNav.watch ? 'bg-[#ffffff]' : 'bg-[#ffffff]/5'} rounded-md`}
                        onClick={() => {
                            setActiveNav({ phone: false, vr: false, watch: true });
                            product.setCategory('watch');
                        }}
                    >
                        {activeNav.watch ? (
                            <img src={activeWatch} alt='phone' />
                        ) : (
                            <img src={inactiveWatch} alt='phone' />
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};
