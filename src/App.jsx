
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Portfolio from './components/Portfolio'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
      <Menu />
      <div className="content">
        <Welcome />
        <AboutMe />
        <Portfolio />
      </div>
      <Contact />

    </>
  )
}

export default App
