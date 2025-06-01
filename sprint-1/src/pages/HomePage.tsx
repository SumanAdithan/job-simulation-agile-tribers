import { clients, experience, heroIcon, projects } from '@assets';

export const HomePage = () => {
    return (
        <section className='w-full min-h-screen' id='home'>
            <div className='max-w-7xl mx-auto px-8'>
                <div className='flex flex-col lg:flex-row justify-between items-center py-20 lg:py-36 w-full'>
                    <div className='lg:w-1/2 mt-8'>
                        <h1 className='flex flex-col text-4xl md:text-6xl font-bold gap-5'>
                            <span className='md:text-nowrap'>Empowering Your </span>
                            <span className='text-primary'>Digital Future</span>
                        </h1>
                        <p className='text-md md:text-xl my-4'>
                            We deliver innovative IT solutions that drive growth, streamline operations, and
                            future-proof your business. From custom software development to cloud infrastructure, our
                            team turns technology into your competitive edge.
                        </p>
                        <button className='bg-primary text-white font-bold p-4 rounded-md mt-2 hover:scale-105 transition duration-300'>
                            Register
                        </button>
                    </div>
                    <div>
                        <img src={heroIcon} alt='hero-icon' />
                    </div>
                </div>
                <div className='bg-font-primary lg:h-[100px] py-4 lg:py-0 text-white flex items-center px-10 rounded-md mt-5'>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 lg:gap-8'>
                        <div className='flex gap-2 items-center w-[210px]'>
                            <div className='bg-white w-14 rounded-full p-3 shrink-0'>
                                <img src={projects} alt='projects' />
                            </div>
                            <div>
                                <h1 className='font-bold text-primary'>100+</h1>
                                <p className='text-nowrap'>Projects Delivered </p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center w-[210px]'>
                            <div className='bg-white w-14 rounded-full p-3 shrink-0'>
                                <img src={clients} alt='clients' />
                            </div>
                            <div>
                                <h1 className='font-bold text-primary'>50+</h1>
                                <p className='text-nowrap'>Happy Clients</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center w-[210px]'>
                            <div className='bg-white w-14 rounded-full p-3 shrink-0'>
                                <img src={experience} alt='projects' />
                            </div>
                            <div>
                                <h1 className='font-bold text-primary'>10+</h1>
                                <p className='text-nowrap'>Years of Experience</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center w-[210px]'>
                            <div className='bg-white w-14 rounded-full p-3 shrink-0'>
                                <img src={projects} alt='projects' />
                            </div>
                            <div>
                                <h1 className='font-bold text-primary'>24/7</h1>
                                <p className='text-nowrap'>Support & Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
