import './App.css'
import { Hero } from './components/Hero/hero.component'
import { Countries } from './components/Countries/countries.component'
import { HeardAboutUs } from './components/Hear-About-Us/hear.component'
import { Navbar } from './components/Navbar/navbar.component'
import { Footer } from './components/Footer/footer.component'
import { PrevHackathonPartcipation } from './components/PrevHackathonParticipation/prevHackathonParticipation.component'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from "@/services/themeProvider";

function App() {


  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* {children} */}
      <div className='relative bg-background text-primary'>
        <Navbar />
        <div className='body-wrapper'>
          <Hero />
          <Countries />
          <HeardAboutUs />
          <PrevHackathonPartcipation />
        </div>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  )
}

export default App;
