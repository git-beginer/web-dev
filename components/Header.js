import Image from 'next/image'

const Header = ({imageUrl, textObj}) => {
    return (
        <div className='w-full h-fit flex justify-start items-center'
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className='h-2/5 md:h-2/4 w-full md:w-2/5 m-8 md:m-28'>
                <h2 className="font-medium text-2xl md:text-6xl font-black font-avenir text-white leading-7 md:leading-21">{textObj.title}</h2>
                <p className="mt-3 md:mt-5 text-white font-light text-base lg:text-xl xl:text-3xl leading-6 md:leading-13">{textObj.content}</p>
                <div className='mt-3 md:mt-5 h-2/5'>
                    <button className="mt-2 w-1/2 md:w-2/6 bg-white text-base xl:text-2xl px-3 py-5 md:px-5 md:py-7 hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow mr-2">
                    Lees meer
                    </button>
                    <button className="w-1/2 md:w-3/6 text-white text-base xl:text-2xl font-semibold px-3 py-5 md:px-5 md:py-7 border border-white-400 rounded shadow mt-2">
                    offerte aanvraag
                    </button>
                </div>
            </div>

        </div >
    )
}

export default Header;