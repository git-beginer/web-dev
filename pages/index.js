import Head from 'next/head'
import MainLayout from '../layout/mainLayout';
import Header from '../components/Header';
import Main1 from '../components/Main1';
import Main2 from '../components/Main2';
import ContactComponent_sm from '../components/ContactComponent_sm';
import Carousel from '../components/Carousel';
import ImageCards from '../components/ImageCards';
import GoogleMap from '../components/GoogleMap';
import Footer from '../components/Footer';

const imageUrls = {
  header: '/images/tevredenheid-hoorn.jpg',
};
const textObj = {
  header: {
    title: 'Introdute',
    content: 'T.H.A schilderwerk & vastgoedonderhoud is gespecialiseerd in binnen- en buitenschilderwerk. We onderscheiden ons door een uitstekende vakkennis en een klantgerichte aanpak op dit gebied.'
  },
  textContent: {
    title: 'THA schilderwerk & Vastgoedonderhoud heeft voor binnen- en buitenschilderwerk de juiste schilder.',
    content: [
      "Ons bedrijf is opgericht door Thierry Henrich en is in de loop van de jaren uitgegroeid tot een netwerk van ervaren vakmensen. De materialen waarmee wij werken en de technieken die wij toepassen zijn met zorg gekozen om u het perfecte resultaat te kunnen garanderen. Uiteraard beschikken wij over de meest moderne installaties om de mooiste uitstraling te kunnen realiseren. U zult jarenlang plezier hebben van ons werk.",

      "T.H.A schilderwerk & vastgoedonderhoud is gevestigd in het Noord-Hollandse Zwaag. Deze plaats ligt in de directe omgeving van Hoorn. We nemen echter opdrachten van zowel particulieren als bedrijven in de gehele provincie aan. U kunt ons benaderen voor binnen- en buitenschilderwerk maar ook voor een totaaloplossing in het geval van houtrot en andere schadegevallen. Tevens kunt u ons benaderen voor andere onderhoudswerkzaamheden in en om het huis of bedrijfspand.",
    ]
  }
}


export default function Home() {
  return (
    <MainLayout>
       <Header imageUrl={imageUrls.header} textObj={textObj.header} />
       <Main1 textData={textObj.textContent}/>
       <Main2 />
       <ImageCards />
       <ContactComponent_sm />
       <Carousel />
       <GoogleMap />
       <Footer />
    </MainLayout>
  )
}
