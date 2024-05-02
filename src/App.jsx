import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Portfolio from './components/Portfolio'
import Welcome from './components/Welcome'

function App() {

  return (
    <div className='bg-gray-800 font-sans text-white'>
      <Menu />
      <div>
        <Welcome />
        <AboutMe />
        <Portfolio />
      </div>
      <Contact />

    </div>
  )
}

export default App
