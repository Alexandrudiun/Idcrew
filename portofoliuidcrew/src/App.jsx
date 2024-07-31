import HomePage from './components/HomePage'
import PreLoader from './components/preloader/PreLoader'
import '../src/style.css'
import Navbar from './components/navbar/Navbar'
<<<<<<< Updated upstream
import Services from './components/Services/Services'
=======
import Hero from './components/hero/Hero'
>>>>>>> Stashed changes

function App() {

  return (
    <div className="app">
      {/* Content */}
      <Navbar />
<<<<<<< Updated upstream
      <HomePage/>
      <Services/>
=======
      <Hero />
>>>>>>> Stashed changes
      {/* Preload */}
      <PreLoader />
    </div>
  )
}

export default App
