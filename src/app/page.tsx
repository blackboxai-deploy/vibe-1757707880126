import AnimatedBackground from '@/components/AnimatedBackground'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Community from '@/components/Community'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Page Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Community />
        <Testimonials />
        <Footer />
      </div>
    </main>
  )
}