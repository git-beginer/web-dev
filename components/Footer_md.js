import GoogleMap from "./GoogleMap";

const Footer_md = () => {
    return (
        <div className="w-full h-fit md:h-619 flex flex-wrap p-8">
            <div className="basis-full lg:basis-1/3 p-8">
                <p className="font-medium text-xl leading-9 text-sky-900 md:font-black md:text-2xl">Adres</p>
                <p className="font-light text-base leading-8 md:text-xl">
                    Kieftentuin 1
                </p>
                <p className="font-light text-base leading-8 md:text-xl">
                    1689LH Zwaag (Gemeente hoorn)
                </p>
                <p className="font-medium text-xl leading-9 text-sky-900 md:font-black md:text-2xl mt-4">Contact</p>
                <div className="mt-3">
                    <p><svg className="w-6 h-6 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span className="ml-4">contact@tha-diensten.nl </span></p>
                </div>
                <div className="mt-3">
                    <p><svg className="w-6 h-6 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span className="ml-4">0630075013</span></p>
                </div>
                <div className="mt-3">
                    <p><svg className="w-6 h-6 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg><span className="ml-4">Whatsapp </span></p>
                </div>
            </div>
            <div className="basis-full lg:basis-1/3 p-8">
                <p className="font-medium text-xl leading-9 text-sky-900 md:font-black md:text-2xl mt-4">Pagina's</p>
                <ul className="w-full h-fit list-none lg:list-disc">
                    <li>
                        <p className="font-light text-base leading-8 md:text-xl">
                            Binnenschilderwerk
                        </p>
                    </li>
                    <li>
                        <p className="font-light text-base leading-8 md:text-xl">
                            Buitenschilderwerk
                        </p>
                    </li>
                    <li>
                        <p className="font-light text-base leading-8 md:text-xl">
                            Privacyverklaring
                        </p>
                    </li>
                    <li>
                        <p className="font-light text-base leading-8 md:text-xl">
                            spuitwerk
                        </p>
                    </li>
                    <li>
                        <p className="font-light text-base leading-8 md:text-xl">
                            Kennismaking
                        </p>
                    </li>
                    <li>
                        <p className="font-light text-base leading-8 md:text-xl">
                            Waarom ons
                        </p>
                    </li>
                </ul>
            </div>
            <div className="basis-full lg:basis-1/3 p-8 flex items-center">
                <GoogleMap />
            </div>
        </div>
    )
}

export default Footer_md;