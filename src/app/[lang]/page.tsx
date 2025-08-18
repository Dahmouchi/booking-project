import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import Testimonials from '@/components/sections/Testimonials';
import HostCTA from '@/components/sections/HostCTA';
import Footer from '@/components/sections/Footer';
import { getDictionary } from './dictionaries';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'ar'| 'fr' }>;
}) {
  const { lang } = await params
  const dict = await getDictionary(lang) // en
  
  return (
    <main className="min-h-screen">
      <Header data={dict.header} currentLang={lang} />
      <Hero data={dict.hero}/>
      <HowItWorks data={dict.howItWorks}/>
      <FeaturedProperties />
      <Testimonials />
      <HostCTA data={dict.hostCTA}/>
      <Footer />
    </main>
  );
}
