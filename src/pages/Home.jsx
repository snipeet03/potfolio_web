import Navbar          from '../components/Navbar'
import HeroSection     from '../components/HeroSection'
import AboutSection    from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import Footer          from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}
