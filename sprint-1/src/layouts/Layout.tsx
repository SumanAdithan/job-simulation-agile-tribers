import { AboutPage, HomePage, ServicePage } from '@pages';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
    return (
        <div className='h-screen bg-background font-primary text-font-secondary'>
            <Header />
            <main className='md:px-8'>
                <HomePage />
                <ServicePage />
                <AboutPage />
            </main>
            <Footer />
        </div>
    );
};
