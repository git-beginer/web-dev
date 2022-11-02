import MainLayout from '../layout/mainLayout';
import Header from '../components/Header';
import TextContent from '../components/TextContent';
import { CallbackBrush } from '../components/CallbackBrush';
import TabComponent from '../components/TabComponent';
import ImageCards from '../components/ImageCards';
import ContactComponent from '../components/ContactComponent';
import Footer_md from '../components/Footer_md';

const imageUrls = {
    header: '/images/2nd_header.jpg',
};

const textObj = {
    header: {
        title: 'Waarom ons',
        content: 'Bent u op zoek naar een bedrijf dat gespecialiseerd is in binnen- en buitenschilderwerk? Dan is T.H.A schilderwerk & vastgoedonderhoud een uitstekende optie. Wij staan bekend als een zeer vakkundig bedrijf op dit gebied, dat nét even een stap verder zet voor de klant.'
      },
    textContent1: {
      title: 'Waarom T.H.A schilderwerk & vastgoedonderhoud inhuren?',
      content: [
        "T.H.A schilderwerk & vastgoedonderhoud is een netwerk van ervaren en vakkundige vakmensen die een overeenkomstige werkwijze hebben. Wij onderscheiden ons door onze zeer klantgerichte aanpak waarbij kwaliteit een hogere prioriteit heeft dan kwantiteit. We doen er alles voor om een resultaat te leveren dat volledig aansluit op uw wensen en doelstellingen. We vinden het belangrijk dat u écht tevreden bent met het resultaat en hier jarenlang plezier van heeft.",
  
        "Het is voor ons dan ook géén probleem om bij u op locatie te komen kijken om u te adviseren en u te voorzien van een maatwerk offerte. Dit is in sommige gevallen erg belangrijk om te kijken wat de ondergrond is en welke voorbereidende werkzaamheden moeten worden uitgevoerd. Denk hierbij aan totaaloplossingen in de bestrijding van houtrot of andere herstelwerkzaamheden. Tevens is een juiste handelswijze belangrijk bij specialistische opdrachten zoals het verwijderen van nicotine aanslag, waterschade, roetschade of rookschade. Dit is vaak niet zomaar over te schilderen, rollen of spuiten.",
        
        "U kunt bij ons rekenen op een eerlijk maatwerkadvies. Hierbij nemen we graag de tijd om alle aspecten met u door te nemen zodat u de juiste keuze kunt maken. De materialen waarmee wij werken en de technieken die wij toepassen zijn met zorg gekozen om u het perfecte resultaat te kunnen garanderen. Uiteraard beschikken wij over de meest moderne installaties om de mooiste uitstraling te kunnen realiseren.",  
        
        "Schilder Hoorn voor professionele en particuliere opdrachten",
  
        "T.H.A schilderwerk & vastgoedonderhoud is gevestigd in het Noord-Hollandse Zwaag, een plaats in de gemeente Hoorn. We nemen echter opdrachten van zowel particulieren als bedrijven in de gehele provincie aan. U kunt ons benaderen voor onderhoud, renovatie of nieuwbouwprojecten.",
      ]
    },
    textContent2: {
        title: 'T.H.A. Vastgoedschilderwerk voor betrouwbare schilders uit Hoorn en omgeving.',
        content: [
            'Ons bedrijf is opgericht door Thierry Henrich en is in de loop van de jaren uitgegroeid tot een netwerk van ervaren vakmensen. U kunt bij T.H.A. schilderwerk & vastgoedonderhoud terecht voor betrouwbare schilders uit Hoorn en omgeving. De schilders met wie wij samenwerken hebben hun kwaliteit al lang bewezen en voldoen volledig aan onze strenge normen en criteria.',
            'Laat uw schilderwerk dus uitvoeren door vakmensen die weten welk resultaat er verlangd wordt. Met onze maatwerk aanpak zorgen we ervoor dat u de komende tijd geen omkijken heeft naar uw schilderwerk. Neem contact met ons op om u te laten informeren over onze mogelijkheden. Uiteraard kunt u ons ook benaderen voor een vrijblijvend advies of offerte.'
        ]
    }
  }

export default function Second() {
    return (
        <MainLayout>
            <Header imageUrl={imageUrls.header} textObj={textObj.header}/>
            <TextContent data={textObj.textContent1}/>
            <CallbackBrush />
            <TabComponent />
            <TextContent data={textObj.textContent2}/>
            <ImageCards />
            <ContactComponent />
            <Footer_md />
        </MainLayout>
    )
}