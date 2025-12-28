import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import AboutSection from '@/components/home/AboutSection'
import EcosystemSection from '@/components/home/EcosystemSection'
import FocusAreasSection from '@/components/home/FocusAreasSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <EcosystemSection />
        <FocusAreasSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
