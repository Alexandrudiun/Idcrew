import HomePage from './components/HomePage'
import PreLoader from './components/preloader/PreLoader'
import '../src/style.css'
import Navbar from './components/navbar/Navbar'
import Services from './components/Services/Services'
import Hero from './components/hero/Hero'

function App() {

  return (
    <div className="app">
      {/* Content */}
      <Navbar />
      <Hero />
      {/* <HomePage/> */}
      <Services/>
      {/* Preload */}
      <PreLoader />
    </div>
  )
}

export default App
