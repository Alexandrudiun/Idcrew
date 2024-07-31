import HomePage from './components/HomePage'
import PreLoader from './components/preloader/PreLoader'
import '../src/style.css'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className="app">
      {/* Content */}
      <Navbar />
      <HomePage/>
      {/* Preload */}
      <PreLoader />
    </div>
  )
}

export default App
