import Header from "../components/Header";
import Footer_md from "../components/Footer_md";
import TextContent from "../components/TextContent";
import ContactComponent from "../components/ContactComponent";
import MainLayout from "../layout/mainLayout";
import { CallbackRight } from "../components/CallbackRight";

const imageUrls = {
    header: '/images/5th_header.jpg',
};

const textObj = {
    header: {
        title: 'Werkwijze',
        content: 'Bent u op zoek naar een vakkundig en betrouwbaar bedrijf voor binnen- en buitenschilderwerk, totaaloplossingen voor houtrot, schadegevallen of andere onderhoudswerkzaamheden in en om het huis? Dan is T.H.A schilderwerk & vastgoedonderhoud een uitstekende optie. Wij onderscheiden ons door onze klantgerichte benadering en uitstekende vakkennis. Wij zorgen dat u jarenlang plezier zult hebben van ons werk.'
    },
    textContent: {
        title: 'Hoe gaat T.H.A schilderwerk & vastgoedonderhoud te werk?',
        content: [
            "T.H.A schilderwerk & vastgoedonderhoud is een initiatief van Thierry Henrich dat in de loop van de jaren is uitgegroeid tot een netwerk van ervaren schilders. U kunt bij ons rekenen op uitstekend vakmanschap. We maken weloverwogen keuzes met betrekking tot onze werkwijze, het gebruik van materialen, de technieken die we hanteren en uiteraard de voorbereiding van de werkzaamheden. Dit doen we om onze hoge kwaliteitsnormen waar te kunnen maken. De zorgvuldigheid in het uitvoeren van onze opdrachten is duidelijk te zien in onze volledige werkwijze." 
        ]
    },
    textContent1: {
        title: 'De Werkwijze van T.H.A schilderwerk & vastgoedonderhoud ',
        content: [
            "Op onze website vindt u zeer veel informatie over ons bedrijf, over onze passie in het schildersvak en veel praktische informatie over de werkzaamheden die wij u kunnen leveren. Met deze informatie kunt u alvast een beeld vormen over ons bedrijf.",

            "Op het moment dat u op basis van deze informatie vragen of interesse heeft in persoonlijk advies, kunt u ons uiteraard altijd vrijblijvend benaderen. Dit kan zowel telefonisch (via nummer: 06 - 300 750 13), via email (contact@tha-diensten.nl) of via het contactformulier op onze website. Mocht u ons niet direct te pakken krijgen, nemen we zo spoedig mogelijk contact met u op.",
            
            "Uiteraard zijn wij in de gelegenheid om bij u ter plaatse te komen om de situatie te bekijken. Wij zullen dan uitgebreid de tijd voor u vrij maken om uw wensen met u door te nemen en u te voorzien van een maatwerkadvies met betrekking tot het uitkiezen van de kleuren, verftechnieken, voorbereidende werkzaamheden, het gebruik van materialen en andere zaken die hierbij van belang zijn. Vanzelfsprekend kunnen we u ook voorzien van een geheel vrijblijvende offerte voor uw schilderwerk.", 
        ]
    }
}

export default function Forth() {
    return (
        <MainLayout>
            <Header imageUrl={imageUrls.header} textObj={textObj.header} />
            <TextContent data={textObj.textContent} />
            <CallbackRight />
            <TextContent data={textObj.textContent1}/>
            <ContactComponent />
            <Footer_md />
        </MainLayout>
    )
}
