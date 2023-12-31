import Topbar from "./components/Topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
// import Contact from "./components/contact/Contact"
import './app.scss'
import { useState } from "react"
import Menu from "./components/menu/Menu"
import Bio from "./components/bio/Bio"

function App () {
  const [ menuOpen, setMenuOpen ] = useState( false ) // menu initially not opened


  return (
    <div className="app">
      <Topbar menuOpen={ menuOpen } setMenuOpen={ setMenuOpen } />
      <Menu menuOpen={ menuOpen } setMenuOpen={ setMenuOpen } />
      <div className="sections">
        <Intro />
        <Bio />
        <Portfolio />
        <Works />
        {/* <Contact /> */ }
      </div>
    </div>
  )
}

export default App
