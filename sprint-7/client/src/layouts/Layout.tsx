import { background } from '@assets';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout = () => {
    return (
        <div className='relative bg-[#000000] w-full h-screen flex items-center justify-center font-primary text-[#ffffff]'>
            <img src={background} alt='background' className='absolute inset-0 w-full h-full object-cover z-0' />
            <div className='min-w-7xl'>
                <Header />
                <main className='w-full h-[650px] rounded-xl bg-white/5 backdrop-blur-md border border-white/20 shadow-lg p-16 mb-36'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
