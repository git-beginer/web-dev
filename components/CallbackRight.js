export const CallbackRight = () => {
    return (
        <div className='w-full sm:py-16 flex justify-end items-center'
            style={{
                backgroundImage: `url(images/callback_right.jpg)`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-full h-fit md:basis-2/5 flex justify-center items-center">
                <div className="md:w-3/5 bg-white p-8">
                    <h1 className="font-avenir font-black text-xl leading-7 text-sky-900 xl:text-3xl xl:leading-10">Laat u terugbellen</h1>
                    <p className="font-avenir leading-6 text-base font-normal xl:leading-9 xl:text-2xl">Voer uw nummer in en wij nemen zo spoedig mogelijk contact met u op.</p>
                    <input className="font-avenir text-base font-light leading-5 xl:text-2xl xl:leading-7 mt-5 shadow appearance-none border rounded w-full px-6 py-4 xl:py-6 xl:px-9 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
                    <button className="font-avenir text-base font-light leading-5 xl:text-2xl xl:leading-7 px-6 py-4 xl:py-6 xl:px-9 mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Vertuur
                    </button>
                </div>
            </div>
        </div>
    )
}