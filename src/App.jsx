
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
      <Menu />
      <div className="content">
        <AboutMe />
        <Portfolio />
      </div>
      <Contact />

    </>
  )
}

export default App
