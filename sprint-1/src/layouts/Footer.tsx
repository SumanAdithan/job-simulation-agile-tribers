import { email, fb, linkedin, logo, phone, twitter } from '@assets';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

export const Footer = () => {
    const navigate = useNavigate();
    const handleSetActive = (section: string) => {
        navigate(`#${section}`, { replace: true });
    };

    return (
        <footer className='relative bg-font-primary text-white p-x lg:pt-16 lg:pb-28' id='contact'>
            <div className='max-w-7xl mx-auto  flex flex-col lg:flex-row p-6 justify-between'>
                <div className='lg:w-[600px]'>
                    <div className='flex items-center gap-4 mb-2'>
                        <div>
                            <img src={logo} alt='logo' />
                        </div>
                        <div className='text-3xl font-bold text-white'>Nexcent</div>
                    </div>
                    <p>
                        © 2025 Nexcent. Empowering businesses through smart IT solutions. Your trusted partner for
                        software development, cloud services, and digital innovation.
                    </p>
                    <div className='mt-4 flex gap-5'>
                        <a
                            href='https://www.facebook.com/'
                            target='_blank'
                            className='bg-white w-14 rounded-full p-3 hover:scale-110 transition duration-300'
                        >
                            <img src={fb} alt='fb' />
                        </a>
                        <a
                            href='https://x.com/'
                            target='_blank'
                            className='bg-white w-14 rounded-full p-3 hover:scale-110 transition duration-300'
                        >
                            <img src={twitter} alt='twitter' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/suman-99334825b/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-white w-14 rounded-full p-3 hover:scale-110 transition duration-300'
                        >
                            <img src={linkedin} alt='linkedin' />
                        </a>
                    </div>
                </div>
                <div className='mt-10 lg:mt-0'>
                    <div>
                        <h1 className='font-bold text-xl'>Pages</h1>
                        <ul className='flex flex-col gap-2 mt-2'>
                            <li className='cursor-pointer hover:text-primary'>
                                <Link
                                    to='home'
                                    smooth={true}
                                    duration={300}
                                    spy={true}
                                    offset={-80}
                                    onClick={() => handleSetActive('home')}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className='cursor-pointer hover:text-primary'>
                                <Link
                                    to='services'
                                    smooth={true}
                                    duration={300}
                                    spy={true}
                                    offset={-80}
                                    onClick={() => handleSetActive('services')}
                                >
                                    Services
                                </Link>
                            </li>
                            <li className='cursor-pointer hover:text-primary'>
                                <Link
                                    to='about-us'
                                    smooth={true}
                                    duration={300}
                                    spy={true}
                                    offset={-80}
                                    onClick={() => handleSetActive('about-us')}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className='cursor-pointer hover:text-primary'>
                                <Link
                                    to='contact'
                                    smooth={true}
                                    duration={300}
                                    spy={true}
                                    onClick={() => handleSetActive('contact')}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-10 lg:mt-0'>
                    <h1 className='font-bold text-xl'>Contact</h1>
                    <div className='flex items-center gap-2 mt-2'>
                        <div className='w-6'>
                            <img src={phone} alt='phone' />
                        </div>
                        <div>91+9999999999</div>
                    </div>
                    <div className='flex items-center gap-2 mt-4'>
                        <div className='w-6'>
                            <img src={email} alt='email' />
                        </div>
                        <div className='cursor-pointer hover:text-primary'>
                            <a href='mailto:sumanadithan34@gmail.com'>sumanadithan34@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
