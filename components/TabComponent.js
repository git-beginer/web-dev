import { useState } from "react";
import { ImageComponent } from "./ImageComponent";

const TabComponent = () => {
    const [markt, setMarkt] = useState(true);
    const [eigen, setEigen] = useState(false);
    const [contact, setContact] = useState(false);

    const handleMarkt = () => {
        setMarkt(true);
        if (eigen) setEigen(false);
        if (contact) setContact(false);
    }

    const handleEigen = () => {
        setEigen(true);
        if (markt) setMarkt(false);
        if (contact) setContact(false);
    }

    const handleContact = () => {
        setContact(true);
        if (eigen) setEigen(false);
        if (contact) setMarkt(false);
    }

    return (
        <div>
            <div className="mb-4 border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                    <li className="mr-2">
                        <button className={`${markt ? 'inline-block p-4 rounded-t-lg border-b-2 text-sky-600 hover:text-sky-600 text-base font-medium leading-9 border-sky-600 md:text-xl' : 'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300  text-gray-500 border-gray-100 text-base font-medium leading-9 text-xl'}`} type="button" onClick={handleMarkt}>Zakelijke markt</button>
                    </li>
                    <li className="mr-2">
                        <button className={`${eigen ? 'inline-block p-4 rounded-t-lg border-b-2 text-sky-600 hover:text-sky-600 text-base font-medium leading-9 border-sky-600 md:text-xl' : 'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300  text-gray-500 border-gray-100 text-base font-medium leading-9 text-xl'}`} type="button" onClick={handleEigen}>Eigen beheer</button>
                    </li>
                    <li className="mr-2 hidden sm:block">
                        <button className={`${contact ? 'inline-block p-4 rounded-t-lg border-b-2 text-sky-600 hover:text-sky-600 text-base font-medium leading-9 border-sky-600 md:text-xl' : 'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300  text-gray-500 border-gray-100 text-base font-medium leading-9 text-xl'}`} type="button" onClick={handleContact}>Neem contact op</button>
                    </li>
                </ul>
            </div>
            <div id="myTabContent">
                <div className={`${markt ? 'p-4 rounded-lg flex items-center' : 'hidden'}`}>
                    <div className="basis-full md:basis-1/2 p-4">
                        <p className="font-avenir text-sky-900 font-black text-2xl leading-8 md:text-3xl md:leading-10">zakelijke markt</p>
                        <p className="text-base leading-6 md:font-normal md:text-xl md:leading-9">T.H.A schilderwerk & vastgoedonderhoud uit Zwaag (gemeente Hoorn) is gespecialiseerd in totaaloplossingen die betrekking hebben op het binnen- en buitenschilderwerk. Naast de schilderwerkzaamheden kunt u ons benaderen voor het bestrijden van houtrot en andere schadegevallen zoals nicotine aanslag, waterschade, roetschade of rookschade. Tevens kunt u ons benaderen voor andere gerelateerde onderhoudswerkzaamheden.</p><br />
                        <p className="text-base leading-6 md:font-normal md:text-xl md:leading-9">
                            Naast het bedienen van particuliere klanten zijn we ook actief in de zakelijke markt. Wij zijn een vaste partner van een groot aantal professionele organisaties. Deze partner zien ons als het vaste adres voor schilderwerkzaamheden en hebben bij ons een onderhoudscontract afgesloten. De invulling van het contract stemmen we uiteraard af op de wensen en behoeften van de opdrachtgever met als doel deze instantie volledig te ontzorgen op ons vakgebied. </p>
                    </div>
                    <div className="basis-full md:basis-1/2 hidden md:block h-505 p-4">
                        <ImageComponent imgUrl={'images/coatings-hoorn.jpg'} />
                    </div>
                </div>
                <div className={`${eigen ? 'p-4 bg-gray-50 rounded-lg flex items-center' : 'hidden'}`}>
                    <div className="basis-full md:basis-1/2 p-4">
                        <p className="font-avenir text-sky-900 font-black text-2xl leading-8 md:text-3xl md:leading-10">Eigen beheer</p>
                        <p className="text-base leading-6 md:font-normal md:text-xl md:leading-9">T.H.A schilderwerk & vastgoedonderhoud uit Zwaag (gemeente Hoorn) is gespecialiseerd in totaaloplossingen die betrekking hebben op het binnen- en buitenschilderwerk. Naast de schilderwerkzaamheden kunt u ons benaderen voor het bestrijden van houtrot en andere schadegevallen zoals nicotine aanslag, waterschade, roetschade of rookschade. Tevens kunt u ons benaderen voor andere gerelateerde onderhoudswerkzaamheden.</p><br />
                        <p className="text-base leading-6 md:font-normal md:text-xl md:leading-9">
                            Naast het bedienen van particuliere klanten zijn we ook actief in de zakelijke markt. Wij zijn een vaste partner van een groot aantal professionele organisaties. Deze partner zien ons als het vaste adres voor schilderwerkzaamheden en hebben bij ons een onderhoudscontract afgesloten. De invulling van het contract stemmen we uiteraard af op de wensen en behoeften van de opdrachtgever met als doel deze instantie volledig te ontzorgen op ons vakgebied. </p>
                    </div>
                    <div className="basis-full md:basis-1/2 hidden md:block h-505 p-4">
                        <ImageComponent imgUrl={'images/coatings-hoorn.jpg'} />
                    </div>
                </div>
                <div className={`${contact ? 'p-4 bg-gray-50 rounded-lg flex items-center' : 'hidden'}`}>
                    <div className="basis-full md:basis-1/2 p-4">
                        <p className="font-avenir text-sky-900 font-black text-2xl leading-8 md:text-3xl md:leading-10">Neem contact op</p>
                        <p className="text-base leading-6 md:font-normal md:text-xl md:leading-9">T.H.A schilderwerk & vastgoedonderhoud uit Zwaag (gemeente Hoorn) is gespecialiseerd in totaaloplossingen die betrekking hebben op het binnen- en buitenschilderwerk. Naast de schilderwerkzaamheden kunt u ons benaderen voor het bestrijden van houtrot en andere schadegevallen zoals nicotine aanslag, waterschade, roetschade of rookschade. Tevens kunt u ons benaderen voor andere gerelateerde onderhoudswerkzaamheden.</p><br />
                        <p className="text-base leading-6 md:font-normal md:text-xl md:leading-9">
                            Naast het bedienen van particuliere klanten zijn we ook actief in de zakelijke markt. Wij zijn een vaste partner van een groot aantal professionele organisaties. Deze partner zien ons als het vaste adres voor schilderwerkzaamheden en hebben bij ons een onderhoudscontract afgesloten. De invulling van het contract stemmen we uiteraard af op de wensen en behoeften van de opdrachtgever met als doel deze instantie volledig te ontzorgen op ons vakgebied. </p>
                    </div>
                    <div className="basis-full md:basis-1/2 hidden md:block h-505 p-4">
                        <ImageComponent imgUrl={'images/coatings-hoorn.jpg'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabComponent;