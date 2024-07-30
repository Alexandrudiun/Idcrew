import HomePage from './components/HomePage'
import PreLoader from './components/preloader/PreLoader'
import '../src/style.css'

function App() {

  return (
    <div className="app">
      {/* Content */}
      <HomePage/>

      {/* Preload */}
      <PreLoader />
    </div>
  )
}

export default App
