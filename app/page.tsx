import Header from './components/Header';
import SiteFooter from './components/SiteFooter';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

