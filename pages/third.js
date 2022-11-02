import Header from "../components/Header";
import Footer_md from "../components/Footer_md";
import TextContent from "../components/TextContent";
import { CallbackBrush } from "../components/CallbackBrush";
import ImageCards from "../components/ImageCards";
import ContactComponent from "../components/ContactComponent";
import MainLayout from "../layout/mainLayout";

const imageUrls = {
    header: '/images/3rd_header.jpg',
};

const textObj = {
    header: {
        title: 'Kennismaking',
        content: 'T.H.A schilderwerk & vastgoedonderhoud is een bedrijf dat zich in een zeer korte tijd heeft gevestigd als aansprekende aanbieder van schilder en onderhoudswerken. Het bedrijf is opgericht door Thierry Henrich, die zich hier na het afronden van zijn opleiding vol overgave op gericht heeft.'
    },
    textContent: {
        title: 'kennismaking met T.H.A schilderwerk & vastgoedonderhoud',
        content: [
            "Thierry is het bedrijf in januari 2015 gestart en heeft gekozen om zich te richten op het bieden van binnen- en buitenschilderwerk van hoge kwaliteit om zijn vakkennis letterlijk te kunnen aantonen. Daarnaast vind hij het belangrijk om zich te onderscheiden met een zeer klantgerichte benadering.",

            "De keuzes die Thierry Henrich heeft gemaakt met betrekking tot de vormgeving zijn gebaseerd op zijn ervaringen in de branche. Een zeer groot aantal bedrijven, die actief zijn in het schilder- en onderhoudswerk zijn immers alleen gericht op het maken van zoveel mogelijk winst waarbij er soms ten onrechte wordt voorbijgegaan aan de wensen en belangen van de klant.",

            "Dat deze gedachtegang wordt gedeeld door zeer veel klanten blijkt wel uit de resultaten van het bedrijf. Het bedrijf groeide al snel uit tot een netwerk van ervaren schilders, een structuur waarin nog steeds gewerkt wordt. De missie van T.H.A schilderwerk & vastgoedonderhoud is uiteraard tijdloos en zal niet veranderen: u kunt bij ons rekenen op uitstekend vakmanschap. Uiteraard zal onze prijsstelling u niet teleurstellen.",

            "T.H.A schilderwerk & vastgoedonderhoud is gevestigd in het Noord-Hollandse Zwaag. Deze plaats ligt in de directe omgeving van Hoorn. We nemen echter opdrachten van zowel particulieren als bedrijven in de gehele provincie aan.",

            "Heeft u interesse om nader met ons kennis te maken?",
            "Hiervoor maken we graag een vrijblijvende afspraak met u.",

            "Dit kan zowel telefonisch (via nummer: 06 - 300 750 13), via email (contact@tha-diensten.nl) of via het contactformulier op onze website. Mocht u ons niet direct te pakken krijgen, nemen we uiteraard zo spoedig mogelijk contact met u op.",
        ]
    }
}

export default function Third() {
    return (
        <MainLayout>
            <Header imageUrl={imageUrls.header} textObj={textObj.header} />
            <TextContent data={textObj.textContent} />
            <CallbackBrush />
            <ImageCards />
            <ContactComponent />
            <Footer_md />
        </MainLayout>
    )
}
