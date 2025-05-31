import { cloud, consulting, software } from '@assets';

export const ServicePage = () => {
    return (
        <section className='max-w-7xl mx-auto mt-16 scroll-mt-20' id='services'>
            <h1 className='text-3xl font-bold text-center text-font-primary'>Services</h1>
            <div className='w-full mt-10 flex flex-col xl:flex-row'>
                <div className='xl:w-1/2'>
                    <div className='flex flex-wrap justify-center gap-5'>
                        <div className=' flex w-[250px] p-4 text-center flex-col items-center bg-card text-white rounded-md'>
                            <div className='w-10 h-10'>
                                <img src={software} alt='software' />
                            </div>
                            <h1 className='text-lg font-bold mb-2 text-primary'>Custom Software</h1>
                            <p>Tailored apps built for performance, scalability, and your exact needs.</p>
                        </div>
                        <div className=' flex flex-col w-[250px] p-4 text-center items-center  bg-card text-white rounded-md'>
                            <div className='w-10 h-10'>
                                <img src={cloud} alt='software' />
                            </div>
                            <h1 className='text-lg font-bold mb-2 text-primary'>Cloud Solutions</h1>
                            <p>Secure, optimized cloud infrastructure for agility and growth.</p>
                        </div>
                        <div className=' flex flex-col w-[250px] p-4 text-center items-center  bg-card text-white rounded-md'>
                            <div className='w-10 h-10'>
                                <img src={consulting} alt='software' />
                            </div>
                            <h1 className='text-lg font-bold mb-2 text-primary'>IT Consulting</h1>
                            <p>Expert guidance and support to align tech with your business goals.</p>
                        </div>
                    </div>
                </div>
                <div className='xl:ml-20 xl:w-1/2 p-8'>
                    <h1 className='flex flex-col items-center xl:items-baseline text-4xl font-bold mt-4'>
                        <span>Building Smarter Solutions,</span>
                        <span className='text-primary'>Backed by Strong Values</span>
                    </h1>
                    <p className='text-lg mt-6 xl:mb-6 px-16 xl:px-0 text-center xl:text-left'>
                        We help businesses thrive through innovative IT solutions rooted in trust, agility, and impact.
                        From strategy to support, our team delivers technology that solves real problems and drives
                        long-term growth.
                    </p>
                </div>
            </div>
        </section>
    );
};
