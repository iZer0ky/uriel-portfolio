
import './App.css'
import AboutMe from './components/AboutMe'
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
    </>
  )
}

export default App
