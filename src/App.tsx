import { Navbar } from './components/Navbar/navbar.component'
import { Footer } from './components/Footer/footer.component'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from "@/services/themeProvider";
import { Analytics } from "@vercel/analytics/react"
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@tremor/react';
import Overview from './pages/overview';
import Quarterfinals from './pages/quarterfinals';
import Semifinals from './pages/semifinals';
import GrandFinal from './pages/grandFinal';

function App() {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >

      <Analytics /> {/* To collect analytics */}
      <div className='relative bg-background text-primary flex flex-col'>

        <Navbar />
        <TabGroup className="flex-1 relative flex flex-col" defaultIndex={1} >

          <TabList variant={'line'} className="p-0 m-0 lg:container mt-3 flex justify-between md:justify-start fixed bottom-0 md:sticky md:top-16 from-primary-foreground z-10 backdrop-blur-md order-2 lg:order-1 w-full">
            <Tab className='px-2 mx-0 rounded-sm'> Overview </Tab>
            <Tab className='px-2 mx-0 rounded-sm'>Quarterfinals</Tab>
            <Tab className='px-2 mx-0 rounded-sm'>Semifinals</Tab>
            <Tab className='px-2 mx-0 rounded-sm'>Grandfinale</Tab>
          </TabList>

          <TabPanels className='order-1 px-5'>
            <TabPanel> <Overview /> </TabPanel>
            <TabPanel> <Quarterfinals /> </TabPanel>
            <TabPanel> <Semifinals /> </TabPanel>
            <TabPanel> <GrandFinal /> </TabPanel>
          </TabPanels>

        </TabGroup>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  )
}

export default App;
