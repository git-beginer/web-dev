import Image from 'next/image'

const Main2 = () => {
    return (
        <div className='p-16 flex flex-wrap'>
            <h2 className="font-avenir font-black text-sky-900 text-2xl leading-8 xl:leading-13 xl:text-4xl">T.H.A schilderwerk & vastgoedonderhoud kan de volgende schilder werkzaamheden voor u uitvoeren: </h2>
            <div className="w-full md:basis-1/2 flex flex-col items-stretch">
                <div className='mt-3'>
                    <p className='font-avenir font-medium leading-5 md:text-2xl text-base md:leading-9'><span className="bg-blue-600 text-white font-normal leading-4 text-base md:leading-9 md:text-2xl md:font-black mr-2 px-2.5 py-0.5 rounded">1</span>Schilderwerk binnen en buitenshuis.</p>
                </div>
                <div className='mt-3'>
                    <p className='font-avenir font-medium leading-5 md:text-2xl text-base md:leading-9'><span className="bg-blue-600 text-white font-normal leading-4 text-base md:leading-9 md:text-2xl md:font-black mr-2 px-2.5 py-0.5 rounded">2</span>Houtrot reparaties (Houtsanering).</p>
                </div>
                <div className='mt-3'>
                    <p className='font-avenir font-medium leading-5 md:text-2xl text-base md:leading-9'><span className="bg-blue-600 text-white font-normal leading-4 text-base md:leading-9 md:text-2xl md:font-black mr-2 px-2.5 py-0.5 rounded">3</span>Beglazingskit vervangen of plaatsen.</p>
                </div>
                <div className='mt-3'>
                    <p className='font-avenir font-medium leading-5 md:text-2xl text-base md:leading-9'><span className="bg-blue-600 text-white font-normal leading-4 text-base md:leading-9 md:text-2xl md:font-black mr-2 px-2.5 py-0.5 rounded">4</span>Neuslatten vervangen of plaatsen.</p>
                </div>
                <div className='mt-3'>
                    <p className='font-avenir font-medium leading-5 md:text-2xl text-base md:leading-9'><span className="bg-blue-600 text-white font-normal leading-4 text-base md:leading-9 md:text-2xl md:font-black mr-2 px-2.5 py-0.5 rounded">5</span>Stucwerkzaamheden uitvoeren.</p>
                </div>
                <div className='mt-3'>
                    <p className='font-avenir font-medium leading-5 md:text-2xl text-base md:leading-9'><span className="bg-blue-600 text-white font-normal leading-4 text-base md:leading-9 md:text-2xl md:font-black mr-2 px-2.5 py-0.5 rounded">6</span>Glasvezelbehang plaatsen.</p>
                </div>
                <div className='mt-3'>
                    <p className='font-avenir font-medium leading-5 md:text-2xl text-base md:leading-9'><span className="bg-blue-600 text-white font-normal leading-4 text-base md:leading-9 md:text-2xl md:font-black mr-2 px-2.5 py-0.5 rounded">7</span>Schoonmaak/reiniging werkzaamheden</p>
                </div>
            </div>
            <div className="mt-10 mb-10 order-first md:order-last h-56 w-full md:h-505 md:basis-1/2"
                style={{
                    backgroundImage: `url(/images/latex-spuiten-hoorn.jpg)`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
        </div>
    )
}

export default Main2;