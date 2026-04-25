import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Programas from '@/components/sections/Programas';
import Stats from '@/components/sections/Stats';
import Metodologia from '@/components/sections/Metodologia';
import DiferencialTestimonios from '@/components/sections/DiferencialTestimonios';
import CtaFinal from '@/components/sections/CtaFinal';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Programas />
      <Stats />
      <Metodologia />
      <DiferencialTestimonios />
      <CtaFinal />
    </main>
  );
}
