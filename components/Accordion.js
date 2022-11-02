import { useState } from "react";
import { ImageComponent } from "./ImageComponent";

const Accordion = ({ imgUrl }) => {
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);

    const handleActive1 = () => {
        setActive1(!active1);
    }

    const handleActive2 = () => {
        setActive2(!active2);
    }

    const handleActive3 = () => {
        setActive3(!active3);
    }

    const handleActive4 = () => {
        setActive4(!active4);
    }

    return (
        <div className="flex items-center p-8">
            <div className="basis-full md:basis-1/2">
                <p className="font-avenir text-sky-900 font-black text-2xl leading-8 md:text-32 md:leading-11">Vaak gestelde vraag</p>
                <div className="w-full h-fit mt-12">
                    <p className="font-avenir font-medium text-base leading-5 md:text-2xl md:leading-7 border border-gray-400 px-5 py-3" onClick={handleActive1}>Advies in kleurkeuze schilderwerk.<span className="font-avenir font-medium text-base leading-5 md:text-2xl md:leading-7 float-right">{active1 ? '-' : '+'}</span></p>
                    <p className={`${!active1 ? "hidden" : "font-avenir font-normal text-base leading-5 md:text-2xl md:leading-9 text-sky-800 px-3 py-3"}`}>Our products are shipped frozen. They are packed in an insulated cooler with ice packs or dry ice so they arrive at your door fresh.</p>
                </div>
                <div className="w-full h-fit mt-12">
                    <p className="font-avenir font-medium text-base leading-5 md:text-2xl md:leading-7 border border-gray-400 px-5 py-3" onClick={handleActive2}>Waar u zeker aan moet denken bij de keuze van verfkleuren.<span className="font-avenir font-medium text-base leading-5 md:text-2xl md:leading-7 float-right">{active2 ? '-' : '+'}</span></p>
                    <p className={`${!active2 ? "hidden" : "font-avenir font-normal text-base leading-5 md:text-2xl md:leading-9 text-sky-800 px-3 py-3"}`}>Our products are shipped frozen. They are packed in an insulated cooler with ice packs or dry ice so they arrive at your door fresh.</p>
                </div>
                <div className="w-full h-fit mt-12">
                    <p className="font-avenir font-medium text-base leading-5 md:text-2xl md:leading-7 border border-gray-400 px-5 py-3" onClick={handleActive3}>Veel gemaakte fouten bij het kiezen van de juiste kleur voor schilderwerk.<span className="font-avenir font-medium text-base leading-5 md:text-2xl md:leading-7 float-right">{active3 ? '-' : '+'}</span></p>
                    <p className={`${!active3 ? "hidden" : "font-avenir font-normal text-base leading-5 md:text-2xl md:leading-9 text-sky-800 px-3 py-3"}`}>Our products are shipped frozen. They are packed in an insulated cooler with ice packs or dry ice so they arrive at your door fresh.</p>
                </div>
                <div className="w-full h-fit mt-12">
                    <p className="font-avenir font-medium text-base leading-5 md:text-2xl md:leading-7 border border-gray-400 px-5 py-3" onClick={handleActive4}>Waarom het kiezen van een kleur erg lastig is.<span className="font-avenir font-medium text-base leading-5 md:text-2xl md:leading-7 float-right">{active4 ? '-' : '+'}</span></p>
                    <p className={`${!active4 ? "hidden" : "font-avenir font-normal text-base leading-5 md:text-2xl md:leading-9 text-sky-800 px-3 py-3"}`}>Our products are shipped frozen. They are packed in an insulated cooler with ice packs or dry ice so they arrive at your door fresh.</p>
                </div>
            </div>
            <div className="hidden md:block w-full h-505 md:basis-1/2 p-4">
                <ImageComponent imgUrl={imgUrl} />
            </div>
        </div>
    )
}

export default Accordion;