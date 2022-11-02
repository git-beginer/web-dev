import { useState } from 'react';
import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const [meerDropdownOpen, setMeerDropdownOpen] = useState(false);
    const [voooDropdownOpen, setVoooDropdownOpen] = useState(false);
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    const handleMeerDropdownClick = () => {
        setMeerDropdownOpen(true);
        setVoooDropdownOpen(false);
    }

    const handleVoooDropdownClick = () => {
        setVoooDropdownOpen(true);
        setMeerDropdownOpen(false);
    }
    return (
        <div>
            <nav className='h-104 w-full md:h-48 bg-white p-5 md:p-10'>
                <Link href="/" className='w-8 h-11 md:w-16 md:h-24 mr-2 items-center float-left'
                    style={{
                        backgroundImage: `url('/images/schilder-hoorn.png')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                </Link>
                <div className='hidden 2xl:block w-full'>
                    <div className='float-left mt-10'>
                        <Link href="/" className='text-3xl block font-black text-sky-900 font-avenir'>T.H.A schilderwerk & vastgoedonderhoud
                        </Link>
                    </div>
                    <div className='float-right mt-10 flex items-center'>
                        <button onClick={handleMeerDropdownClick} className='font-semibold text-lg h-fit mr-9 text-sky-900'>Meer<span
                            style={{
                                backgroundImage: `url('/images/dropdown.png')`,
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="float-right w-4 h-4 ml-3 mt-1.5"
                        ></span></button>

                        <div className={`${meerDropdownOpen ? 'p-8 block bg-white w-fit h-fit fixed top-28 z-10 border border-slate-500' : 'hidden'}`}
                        >
                            <Link href="/" className='block font-semibold text-lg m-9 text-sky-900'>Introdute</Link>
                            <Link href="/second" className='block font-semibold text-lg m-9 text-sky-900'>Waarom ons</Link>
                            <Link href="/third" className='block font-semibold text-lg m-9 text-sky-900'>Kennismaking</Link>
                        </div>

                        <Link href="/" className='block font-semibold text-lg mr-9 text-sky-900'>Binnenschilderwerk</Link>
                        <Link href="/" className='block font-semibold text-lg mr-9 text-sky-900'>Buitenschilderwerk</Link>
                        <Link href="/" className='block font-semibold text-lg mr-9 text-sky-900'>Spuitwerk</Link>
                        <button onClick={handleVoooDropdownClick} className='font-semibold text-lg h-fit mr-9 text-sky-900'>Vind Ons Ook Op<span
                            style={{
                                backgroundImage: `url('/images/dropdown.png')`,
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="float-right w-4 h-4 ml-3 mt-1.5"
                        ></span></button>
                        <div className={`${voooDropdownOpen ? 'p-8 block bg-white w-fit h-fit fixed top-28  right-0 z-10 border border-slate-500' : 'hidden'}`}
                        >
                            <Link href="/" className='block font-semibold text-lg m-9 text-sky-900'>Binnenschilderwerk</Link>
                            <Link href="/" className='block font-semibold text-lg m-9 text-sky-900'>Buitenschilderwerk</Link>
                            <Link href="/" className='block font-semibold text-lg m-9 text-sky-900'>Spuitwerk</Link>
                        </div>
                    </div>
                </div>
                <div className='float-right'>
                    <button className='inline-flex p-3 rounded 2xl:hidden text-dark ml-auto outline-none' onClick={handleClick}>
                        <svg
                            className='w-10 h-10 md:w-16 md:h-16'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>
                </div>
                <div className={`${active ? 'block bg-white w-9/12 h-5/6 float-right fixed z-10 right-0 top-0 border border-slate-500' : 'hidden'}`}
                >
                    <button className='m-5 w-8 h-8 md:w-16 md:h-16 items-center float-left'
                        style={{
                            backgroundImage: `url('/images/close-btn.png')`,
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                        }}
                        onClick={handleClick}
                    ></button>
                    <div className='w-3/4 ml-auto mt-14 md:mt-24'>
                        <button onClick={handleMeerDropdownClick} className='font-semibold text-base md:text-xl h-fit'>Meer<span
                            style={{
                                backgroundImage: `url('/images/dropdown.png')`,
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="float-right w-4 h-4 ml-3 mt-1.5"
                        ></span></button>
                        <div className={`${meerDropdownOpen ? 'p-3 block bg-white w-fit h-fit fixed top-32 z-10 border border-slate-500' : 'hidden'}`}
                        >
                            <Link href="/" className='block font-semibold text-lg m-6 text-sky-900'>Binnenschilderwerk</Link>
                            <Link href="/" className='block font-semibold text-lg m-6 text-sky-900'>Buitenschilderwerk</Link>
                            <Link href="/" className='block font-semibold text-lg m-6 text-sky-900'>Spuitwerk</Link>
                        </div>
                        <Link href="/" className='block mt-11 font-semibold text-base md:text-xl'>Binnenschilderwerk</Link>
                        <Link href="/" className='block mt-11 font-semibold text-base md:text-xl'>Buitenschilderwerk</Link>
                        <Link href="/" className='block mt-11 font-semibold text-base md:text-xl'>Spuitwerk</Link>
                        <button onClick={handleVoooDropdownClick} className='font-semibold mt-11 text-base md:text-xl h-fit'>Vind Ons Ook Op<span
                            style={{
                                backgroundImage: `url('/images/dropdown.png')`,
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="float-right w-4 h-4 ml-3 mt-1.5"
                        ></span></button>
                        <div className={`${voooDropdownOpen ? 'p-3 block bg-white w-fit h-fit fixed top-104 z-10 border border-slate-500' : 'hidden'}`}
                        >
                            <Link href="/" className='block font-semibold text-lg m-6 text-sky-900'>Binnenschilderwerk</Link>
                            <Link href="/" className='block font-semibold text-lg m-6 text-sky-900'>Buitenschilderwerk</Link>
                            <Link href="/" className='block font-semibold text-lg m-6 text-sky-900'>Spuitwerk</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;