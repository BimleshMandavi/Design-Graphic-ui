
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import {FeaturesSection} from '../components/FeaturesSection';
import Services from '../components/Services';
import ExpertToolsSection from '../components/ExpertToolsSection';
import Statistics from '../components/Statistics';
import CaseStudySection from '../components/CaseStudySection';
import ZeptoCard from '../components/ZeptoCard';
import Testimonials from '../components/Testimonials';
import CreativeTalentSection from '../components/CreativeTalentSection';
import BusinessUI from '../components/BusinessUI';
import FAQ from '../components/FAQ';
import LandingPage from '../components/LandingPage';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Services />
      <ExpertToolsSection />
      <Statistics />
      <ZeptoCard />
      <CaseStudySection />
      <Testimonials />
      <CreativeTalentSection />
      <BusinessUI />
      <FAQ />
      <LandingPage />
      <Footer />
    </>
  );
}
