import Header from "../components/Header";
import Footer_md from "../components/Footer_md";
import TextContent from "../components/TextContent";
import { CallbackBrush } from "../components/CallbackBrush";
import ImageCards from "../components/ImageCards";
import ContactComponent from "../components/ContactComponent";
import MainLayout from "../layout/mainLayout";
import Accordion from "../components/Accordion";

const imageUrls = {
    header: '/images/header_4th.jpg',
    accordion: '/images/spoed-schilder-hoorn.jpg'
};

const textObj = {
    header: {
        title: 'Kleuradvies',
        content: 'T.H.A schilderwerk & vastgoedonderhoud levert zichtbaar vakmanschap in schilderwerken. Wij zorgen ervoor dat uw interieur of uw exterieur weer een mooie uitstraling krijgt waar u jarenlang van zult kunnen genieten. Uiteraard kunt u bij ons terecht met alle vragen hierover. We kunnen u niet alleen veel vertellen over de juiste verfkeuze, maar u kunt ons ook benaderen voor advies in de kleurkeuze van het schilderwerk. Dit is voor veel mensen de grootste uitdaging. '
    },
    textContent: {
        title: 'Persoonlijk advies bij het uitzoeken van de juiste kleuren voor schilderwerk',
        content: [
            "Het kiezen van de juiste kleuren en combinaties hierin, is erg persoonlijk. De kleur moet u niet alleen nu aanspreken, maar ook over een paar jaar. Daarnaast moet de kleur passen bij het interieur en het gebruik van de kamer.",

            "Het gevoel bij een kleur kan per persoon verschillen. Hoewel u zelf deze keuze moet maken, mag u uiteraard altijd gebruik maken van onze kennis en ervaring hierin. Wij werken immers dagelijks met kleuren(combinaties) en durven wel te stellen dat we hier kijk op hebben!",

            "Heeft u moeite met het kiezen van de juiste kleur verf? Laat het ons dan gerust weten. We helpen u graag met hierbij door een kleuradvies op maat te geven. Onze klantgerichte aanpak begint immers al bij de voorbereiding van het project en dat is de keuze voor de juiste verf.", 
        ]
    }
}

export default function Forth() {
    return (
        <MainLayout>
            <Header imageUrl={imageUrls.header} textObj={textObj.header} />
            <TextContent data={textObj.textContent} />
            <Accordion imgUrl={imageUrls.accordion}/>
            <CallbackBrush />
            <ImageCards />
            <ContactComponent />
            <Footer_md />
        </MainLayout>
    )
}
