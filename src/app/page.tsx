import Navbar from '@/components/layout/navbar'
import Header from '@/components/sections/header'
import About from '@/components/sections/about'
import Services from '@/components/sections/services'
import ClientSegments from '@/components/sections/client-segments'
import Advantages from '@/components/sections/advantages'
import Partners from '@/components/sections/partners'
import Testimonials from '@/components/sections/testimonials'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import WhatsAppButton from '@/components/layout/whatsapp-button'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Header />
      <About />
      <Services />
      <ClientSegments />
      <Advantages />
      <Partners />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
