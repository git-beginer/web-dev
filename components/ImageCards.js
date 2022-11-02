import Image from 'next/image'

const ImageCards = () => {
    return (
        <div className="flex flex-wrap justify-items-center items-center p-2">
            <div className="mt-10 mb-10 mx-8 lg:mx-0 basis-full lg:basis-1/3 justify-center items-center rounded-lg p-5">
                {/* <Image
                    src={'/images/image-card (1).jpg'}
                    alt=""
                    width={367}
                    height={196}
                    layout="responsive"
                    className='rounded-lg w-full md:h-302'
                /> */}
                <div className="h-56 w-full rounded-lg sm:h-192 md:h-302"
                    style={{
                        backgroundImage: `url('/images/image-card (1).jpg')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className='p-2 md:border md:border-slate-300'>
                    <p className='font-bold text-xl leading-7 md:text-28 md:leading-9 text-sky-900'>Binnenschilderwerk</p>
                    <p className='font-normal text-base leading-6 md:text-xl md:leading-8'>
                        De kwaliteit van het schilderwerk is een belangrijke factor in de uitstraling van een ruimte. Daarnaast vormt het binnenschilderwerk een beschermende waarde van de woning. Het is dus zeker belangrijk om hier ...
                    </p>
                    <div className='flex justify-center'>
                        <button className="w-3/5 mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Lees meer
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-10 mb-10 mx-8 lg:mx-0 basis-full lg:basis-1/3 justify-center items-center rounded-lg p-5 h-718px">
                {/* <Image
                    src={'/images/image-card (2).jpg'}
                    alt=""
                    width={367}
                    height={196}
                    layout="responsive"
                    className='rounded-lg w-full md:h-302'
                /> */}
                <div className="h-56 w-full rounded-lg sm:h-192 md:h-302"
                    style={{
                        backgroundImage: `url('/images/image-card (2).jpg')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className='p-2 border border-slate-300 h-416px'>
                    <p className='font-bold text-xl leading-7 md:text-28 md:leading-9 text-sky-900'>Buitenschilderwerk</p>
                    <p className='font-normal text-base leading-6 md:text-xl md:leading-8'>
                        Het schilderen van de buitenboel is een klus waar veel bij komt kijken om een optimaal resultaat te krijgen. Veel mensen laten deze klus dan ook graag aan een gespecialiseerd bedrijf over. Zoekt u een vakkundige schilder...
                    </p>
                    <div className='flex justify-center'>
                        <button className="w-3/5 mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Lees meer
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-10 mb-10 mx-8 lg:mx-0 basis-full lg:basis-1/3 justify-center items-center rounded-lg p-5 h-718px">
                {/* <Image
                    src={'/images/image-card (3).jpg'}
                    alt=""
                    width={367}
                    height={196}
                    layout="responsive"
                    className='rounded-lg w-full md:h-302'
                /> */}
                <div className="h-56 w-full rounded-lg sm:h-192 md:h-302"
                    style={{
                        backgroundImage: `url('/images/image-card (3).jpg')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className='p-2 border border-slate-300 h-416px'>
                    <p className='font-bold text-xl leading-7 md:text-28 md:leading-9 text-sky-900'>Spuitwerk</p>
                    <p className='font-normal text-base leading-6 md:text-xl md:leading-8'>
                        Wilt u uw wanden of plafonds voorzien van een nieuwe verflaag? Dan is het zeker aan te raden om het latex spuiten te overwegen. Dit is een snelle en voordelige verf methode waarmee een streeploos resultaat kan worden ...
                    </p>
                    <div className='flex justify-center'>
                        <button className="w-3/5 mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Lees meer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCards;