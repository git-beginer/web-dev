const ContactForm = () => {
    return (
        <div className="p-8 w-full md:basis-5/12 flex flex-col md:mt-32 lg:mt-0 items-center">
            <input className="mt-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"></input>
            <input className="mt-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Naam"></input>
            <textarea rows="4" className="mt-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Bericht"></textarea>
            <button className="mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Vertuur
            </button>
        </div>
    )
}

export default ContactForm;