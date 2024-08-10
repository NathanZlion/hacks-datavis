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

function App() {

  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
      <Analytics />
      {/* the navbar goes here */}
      {/* {children} */}
      <div className='relative bg-background text-primary flex flex-col'>

        {/* the whole things below will be an outlet */}
        <Navbar />
        <TabGroup className="px-5 flex-1 relative">
          <TabList className="mt-4 flex justify-center md:justify-start sticky top-20 from-primary-foreground bg-background z-10">
            <Tab>Overview</Tab>
            <Tab>Quarterfinals</Tab>
            <Tab>Semifinals</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Overview />
            </TabPanel>

            <TabPanel>
              <Quarterfinals />
            </TabPanel>

            <TabPanel>
              <Semifinals />
            </TabPanel>

          </TabPanels>
        </TabGroup>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  )
}

export default App;
