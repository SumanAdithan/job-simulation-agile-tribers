import { aboutUs } from '@assets';

export const AboutPage = () => {
    return (
        <section className='relative max-w-7xl mx-auto mb-8 md:my-16 scroll-mt-20' id='about-us'>
            <h1 className='text-3xl font-bold text-center text-font-primary'>About Us</h1>
            <div className='w-full mt-10 flex flex-col lg:flex-row items-center'>
                <div className='lg:w-1/2  block'>
                    <img src={aboutUs} alt='' />
                </div>
                <div className='lg:w-1/2 text-xl p-8'>
                    <div>
                        <div>
                            <span className='font-bold text-3xl text-primary'>Nexcent </span>
                            <span className='font-bold text-3xl'>is a technology-driven company</span>
                        </div>
                        <span className='mt-2'>
                            focused on delivering smart, scalable IT solutions. We help businesses grow through custom
                            software, cloud services, and expert consulting. With a foundation built on innovation and
                            trust, we turn ideas into impact.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
