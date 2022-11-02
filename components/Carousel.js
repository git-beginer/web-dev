import Image from 'next/image'

const Carousel = () => {
    return (
        <div>
            <p className="font-avenir font-black text-2xl md:text-42 md:leading-14 text-center text-sky-900">Merken waar wij mee werken</p>

            <div id="indicators-carousel" className="relative hidden md:block" data-carousel="static">
                <div className="relative h-36 overflow-hidden rounded-lg md:h-56">
                    <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20 flex flex-row items-center grayscale p-8" data-carousel-item="active">
                        <div className='basis-1/4 flex justify-center'>
                            <Image
                                src={'/images/image (1).png'}
                                alt=""
                                width={282}
                                height={85}
                                layout="responsive"
                            />
                        </div>
                        <div className='basis-1/4 flex justify-center'>
                            <Image
                                src={'/images/image (2).png'}
                                alt=""
                                width={282}
                                height={85}
                                layout="responsive"
                            />
                        </div>
                        <div className='basis-1/4 flex justify-center'>
                            <Image
                                src={'/images/image (3).png'}
                                alt=""
                                width={282}
                                height={85}
                                layout="responsive"
                            />
                        </div>
                        <div className='basis-1/4 flex justify-center'>
                            <Image
                                src={'/images/image (4).png'}
                                alt=""
                                width={282}
                                height={85}
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full  bg-gray-800/50 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full  bg-gray-800/50 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full  bg-gray-800/50 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full  bg-gray-800/50 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800/30 dark:bg-gray-800/30 group-hover:bg-gray-800/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-800 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800/30 dark:bg-gray-800/30 group-hover:bg-gray-800/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-800 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <div className='md:hidden flex flex-wrap p-10'>
                <div className='basis-1/2 w-32 h-20 mt-10'
                    style={{
                        backgroundImage: `url('/images/image (1).png')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        filter: "grayscale(100%)",
                    }}
                >
                </div>
                <div className='basis-1/2 w-32 h-20 mt-10'
                    style={{
                        backgroundImage: `url('/images/image (2).png')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        filter: "grayscale(100%)",
                    }}
                >
                </div>
                <div className='basis-1/2 w-32 h-20 mt-10'
                    style={{
                        backgroundImage: `url('/images/image (3).png')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        filter: "grayscale(100%)",
                    }}
                >
                </div>
                <div className='basis-1/2 w-32 h-20 mt-10'
                    style={{
                        backgroundImage: `url('/images/image (4).png')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        filter: "grayscale(100%)",
                    }}
                >
                </div>
                <div className='basis-1/2 w-32 h-20 mt-10'
                    style={{
                        backgroundImage: `url('/images/image (5).png')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        filter: "grayscale(100%)",
                    }}
                >
                </div>
                <div className='basis-1/2 w-32 h-20 mt-10'
                    style={{
                        backgroundImage: `url('/images/image (6).png')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        filter: "grayscale(100%)",
                    }}
                >
                </div>
                <div className='basis-1/2 w-32 h-20 mt-10'
                    style={{
                        backgroundImage: `url('/images/image (7).png')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        filter: "grayscale(100%)",
                    }}
                >
                </div>
                <div className='basis-1/2 w-32 h-20 mt-10'
                    style={{
                        backgroundImage: `url('/images/image (8).png')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        filter: "grayscale(100%)",
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default Carousel;