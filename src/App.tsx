import { Hero } from './components/Hero/hero.component'
import { Countries } from './components/Countries/countries.component'
import { HeardAboutUs } from './components/Hear-About-Us/hear.component'
import { Navbar } from './components/Navbar/navbar.component'
import { Footer } from './components/Footer/footer.component'
import { PrevHackathonPartcipation } from './components/PrevHackathonParticipation/prevHackathonParticipation.component'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from "@/services/themeProvider";
// @ts-ignore This is an analytics package and it's
// usage is just to import it
import { Analytics } from "@vercel/analytics/react"

function App() {


  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
      <Analytics />
      {/* {children} */}
      <div className='relative bg-background text-primary'>
        <Navbar />
        <div className='flex flex-col gap-0'>
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
