import { logo, menu } from '@assets';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const handleSetActive = (section: string) => {
        navigate(`#${section}`, { replace: true });
    };

    return (
        <header>
            <div className='fixed top-0 left-0 right-0 z-40 h-fit max-w-7xl mx-auto bg-white'>
                <div className='py-2 lg:px-8'>
                    <div className='flex justify-between items-center relative'>
                        <div className='flex items-center py-4 gap-2 md:gap-4 ml-5 lg:ml-0'>
                            <div className='shrink-0'>
                                <img src={logo} alt='logo' />
                            </div>
                            <div className='text-3xl font-bold text-font-primary'>Nexcent</div>
                        </div>
                        <div
                            className={`lg:flex items-center absolute lg:relative top-16 lg:top-0 bg-white w-full lg:w-fit ${
                                isOpen ? '' : 'hidden'
                            }`}
                        >
                            <ul className='flex items-center flex-col lg:flex-row gap-4 lg:gap-28 text-xl font-bold p-4 lg:p-0'>
                                <li className='hover:text-primary transition duration-300 cursor-pointer'>
                                    <Link
                                        to='home'
                                        smooth={true}
                                        duration={300}
                                        spy={true}
                                        offset={-80}
                                        onSetActive={() => handleSetActive('home')}
                                        className={`${location.hash === '#home' ? 'text-primary' : ''}`}
                                        onClick={() => {
                                            setIsOpen(false);
                                            handleSetActive('home');
                                        }}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className='hover:text-primary transition duration-300 cursor-pointer'>
                                    <Link
                                        to='services'
                                        smooth={true}
                                        duration={300}
                                        spy={true}
                                        offset={-80}
                                        className={`${location.hash === '#services' ? 'text-primary' : ''}`}
                                        onSetActive={() => handleSetActive('services')}
                                        onClick={() => {
                                            setIsOpen(false);
                                            handleSetActive('services');
                                        }}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li className='hover:text-primary transition duration-300 cursor-pointer'>
                                    <Link
                                        to='about-us'
                                        smooth={true}
                                        duration={300}
                                        spy={true}
                                        offset={-80}
                                        className={`${location.hash === '#about-us' ? 'text-primary' : ''}`}
                                        onSetActive={() => handleSetActive('about-us')}
                                        onClick={() => {
                                            setIsOpen(false);
                                            handleSetActive('about-us');
                                        }}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li className='hover:text-primary transition duration-300 cursor-pointer'>
                                    <Link
                                        to='contact'
                                        smooth={true}
                                        duration={300}
                                        spy={true}
                                        className={`${location.hash === '#contact' ? 'text-primary' : ''}`}
                                        onClick={() => {
                                            setIsOpen(false);
                                            handleSetActive('contact');
                                        }}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='block lg:hidden w-8 mr-10' onClick={() => setIsOpen(!isOpen)}>
                            <img src={menu} alt='menu' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
