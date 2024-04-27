import './App.css'
import { Hero } from './components/Hero/hero.component'
import { Countries } from './components/countries/countries.component'
import { HeardAboutUs } from './components/Hear-About-Us/hear.component'
import { Navbar } from './components/Navbar/navbar.component'
import { Footer } from './components/footer/footer.component'
import { Table } from './components/table/table.component'

function App() {


  return (
    <div className='relative bg-black text-white'>
      <Navbar />
      <div className='body-wrapper'>
        <Hero />
        <Countries />
        <Table />
        <HeardAboutUs />
      </div>
      <Footer />
    </div>
  )
}

export default App;
