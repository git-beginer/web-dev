import { ImageComponent } from "./ImageComponent";

const imgUrl = '/images/contact_md.jpg'
const imgFilterUrl = '/images/contact_md_filter.jpg'

const ContactComponent = () => {
  return (
    <div>
      <div className="hidden md:block w-full h-fit md:h-1126">
        <ImageComponent imgUrl={imgUrl}>
          <div className="w-full xl:w-896 p-16 mt-8">
            <div className="w-full md:w-3/4">
              <p className="font-avenir font-black text-2xl text-white leading-9 md:text-sky-900 md:text-42 md:leading-13">Vraag hier uw offerte aan</p>
              <p className="font-avenir font-normal text-white md:text-sky-600 text-base md:text-xl md:leading-9 mt-3">
                Wilt u ontdekken wat we voor u kunnen betekenen? Neem dan contact met ons op. We vertellen u graag meer over onze diensten en kunnen u uiteraard voorzien van een geheel vrijblijvende offerte.
              </p>
              <p className="font-avenir text-white font-black text-base md:text-2xl md:leading-9 mt-3 md:text-sky-600">T.H.A schilderwerk & vastgoedonderhoud</p>
              <div className="mt-3 pl-2">
                <p><svg className="mt-2 text-white md:text-sky-600 w-6 h-6 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span className="font-avenir text-white font-black text-base md:text-2xl md:leading-9 mt-3 md:text-sky-600 ml-4">contact@tha-diensten.nl </span></p>
              </div>
              <div className="mt-3 pl-2">
                <p><svg className="mt-2 text-white md:text-sky-600 w-6 h-6 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span className="font-avenir text-white font-black text-base md:text-2xl md:leading-9 mt-3 md:text-sky-600 ml-4">0630075013</span></p>
              </div>
              <div className="mt-3 pl-2">
                <p><svg className="mt-2 text-white md:text-sky-600 w-6 h-6 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg><span className="font-avenir text-white font-black text-base md:text-2xl md:leading-9 mt-3 md:text-sky-600 ml-4">Whatsapp </span></p>
              </div>
              <div className="mt-3 pl-2">
                <p><svg className="mt-2 text-white md:text-sky-600 w-6 h-6 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span className="font-avenir text-white font-black text-base md:text-2xl md:leading-9 mt-3 md:text-sky-600 ml-4">Kieftentuin 1
                  1689 LH Zwaag
                  Gemeente Hoorn </span></p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-wrap">
                <div className="w-full md:basis-1/2 xl:w-3/5 mt-5 pr-2">
                  <input className="shadow appearance-none border rounded w-full py-4 md:py-6 px-8 md:px-10 text-base text-gray-700 md:text-xl md:leading-6 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Naam"></input>
                </div>
                <div className="w-full md:basis-1/2 xl:w-3/5 mt-5 pr-2">
                  <input className="shadow appearance-none border rounded w-full py-4 md:py-6 px-8 md:px-10 text-base text-gray-700 md:text-xl md:leading-6 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"></input>
                </div>
                <div className="w-full md:basis-1/2 xl:w-3/5 mt-5 pr-2">
                  <input className="shadow appearance-none border rounded w-full py-4 md:py-6 px-8 md:px-10 text-base text-gray-700 md:text-xl md:leading-6 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Woonplaats"></input>
                </div>
                <div className="w-full md:basis-1/2 xl:w-3/5 mt-5 pr-2">
                  <input className="border rounded w-full py-4 md:py-6 px-8 md:px-10 text-base text-gray-700 md:text-xl md:leading-6 leading-tight focus:outline-none" id="username" type="text" placeholder="Telefoon"></input>
                </div>
              </div>
              <div className="w-full md:w-1/2 pr-2">
                <textarea rows="4" className="mt-6 shadow appearance-none border rounded w-full py-4 md:py-6 px-8 md:px-10 text-base md:text-xl md:leading-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Bericht"></textarea>
                <button className="mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-normal text-xl md:text-2xl leading-6 md:leading-7 py-5 md:py-6 rounded focus:outline-none focus:shadow-outline" type="button">
                  Vertuur
                </button>
              </div>
            </div>
          </div>
        </ImageComponent>
      </div>
      <div className="md:hidden w-full h-fit">
        <ImageComponent imgUrl={imgFilterUrl}>
          <div className="w-full xl:w-896 p-16 mt-8">
            <div className="w-full md:w-3/4">
              <p className="font-avenir font-black text-2xl text-white leading-9 md:text-sky-900 md:text-42 md:leading-13">Vraag hier uw offerte aan</p>
              <p className="font-avenir font-normal text-white md:text-sky-600 text-base md:text-xl md:leading-9 mt-3">
                Wilt u ontdekken wat we voor u kunnen betekenen? Neem dan contact met ons op. We vertellen u graag meer over onze diensten en kunnen u uiteraard voorzien van een geheel vrijblijvende offerte.
              </p>
              <p className="font-avenir text-white font-black text-base md:text-2xl md:leading-9 mt-3 md:text-sky-600">T.H.A schilderwerk & vastgoedonderhoud</p>
              <div className="mt-3 pl-2">
                <p><svg className="mt-2 text-white md:text-sky-600 w-6 h-6 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span className="font-avenir text-white font-black text-base md:text-2xl md:leading-9 mt-3 md:text-sky-600 ml-4">contact@tha-diensten.nl </span></p>
              </div>
              <div className="mt-3 pl-2">
                <p><svg className="mt-2 text-white md:text-sky-600 w-6 h-6 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span className="font-avenir text-white font-black text-base md:text-2xl md:leading-9 mt-3 md:text-sky-600 ml-4">0630075013</span></p>
              </div>
              <div className="mt-3 pl-2">
                <p><svg className="mt-2 text-white md:text-sky-600 w-6 h-6 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg><span className="font-avenir text-white font-black text-base md:text-2xl md:leading-9 mt-3 md:text-sky-600 ml-4">Whatsapp </span></p>
              </div>
              <div className="mt-3 pl-2">
                <p><svg className="mt-2 text-white md:text-sky-600 w-6 h-6 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span className="font-avenir text-white font-black text-base md:text-2xl md:leading-9 mt-3 md:text-sky-600 ml-4">Kieftentuin 1
                  1689 LH Zwaag
                  Gemeente Hoorn </span></p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-wrap">
                <div className="w-full md:basis-1/2 xl:w-3/5 mt-5 pr-2">
                  <input className="shadow appearance-none border rounded w-full py-4 md:py-6 px-8 md:px-10 text-base text-gray-700 md:text-xl md:leading-6 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Naam"></input>
                </div>
                <div className="w-full md:basis-1/2 xl:w-3/5 mt-5 pr-2">
                  <input className="shadow appearance-none border rounded w-full py-4 md:py-6 px-8 md:px-10 text-base text-gray-700 md:text-xl md:leading-6 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"></input>
                </div>
                <div className="w-full md:basis-1/2 xl:w-3/5 mt-5 pr-2">
                  <input className="shadow appearance-none border rounded w-full py-4 md:py-6 px-8 md:px-10 text-base text-gray-700 md:text-xl md:leading-6 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Woonplaats"></input>
                </div>
                <div className="w-full md:basis-1/2 xl:w-3/5 mt-5 pr-2">
                  <input className="border rounded w-full py-4 md:py-6 px-8 md:px-10 text-base text-gray-700 md:text-xl md:leading-6 leading-tight focus:outline-none" id="username" type="text" placeholder="Telefoon"></input>
                </div>
              </div>
              <div className="w-full md:w-1/2 pr-2">
                <textarea rows="4" className="mt-6 shadow appearance-none border rounded w-full py-4 md:py-6 px-8 md:px-10 text-base md:text-xl md:leading-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Bericht"></textarea>
                <button className="mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-normal text-xl md:text-2xl leading-6 md:leading-7 py-5 md:py-6 rounded focus:outline-none focus:shadow-outline" type="button">
                  Vertuur
                </button>
              </div>
            </div>
          </div>
        </ImageComponent>
      </div>
    </div>
  )
}

export default ContactComponent;