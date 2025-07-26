
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExchangeHero from '@/components/exchange/ExchangeHero';
import ExchangeGallery from '@/components/exchange/ExchangeGallery';
import AboutINTI from '@/components/exchange/AboutINTI';
import ProgrammeOverview from '@/components/exchange/ProgrammeOverview';
import AcademicBenefits from '@/components/exchange/AcademicBenefits';
import HostelSection from '@/components/exchange/HostelSection';
import WeekendExcursions from '@/components/exchange/WeekendExcursions';
import FarewellCelebration from '@/components/exchange/FarewellCelebration';
import EligibilitySection from '@/components/exchange/EligibilitySection';
import ExchangeBenefits from '@/components/exchange/ExchangeBenefits';
import ExchangeProgramForm from '@/components/exchange/ExchangeProgramForm';

const ExchangeProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ExchangeHero />
      <ExchangeGallery />
      <AboutINTI />
      <ProgrammeOverview />
      <AcademicBenefits />
      <HostelSection />
      <WeekendExcursions />
      <FarewellCelebration />
      <EligibilitySection />
      <ExchangeBenefits />
      <ExchangeProgramForm />
      <Footer />
    </div>
  );
};

export default ExchangeProgram;
