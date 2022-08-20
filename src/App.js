// import logo from './logo.svg';
import "./styles/App.css"
import './styles/bg.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import About from "./About"

function App() {
  return (
    <BrowserRouter>
      <div className="appwrapper">


        <nav className="navwrapper">
          <div className="navname">
            <Link to="/portfolio">Andres Flores</Link>
          </div>

          <div className="navlinks">
            <div className="navlink">
              <Link to="/about">About</Link>
            </div>
            <div className="navlink">
              <Link to="/projects">Projects</Link>
            </div>

            <div className="navlink">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </nav>

        
    

        <footer>
          <a href="https://github.com/aflo7" target='_blank' rel="noreferrer">
            <img
              src={require("./images/gh.png")}
              alt="github-logo"
              className="ghlogo"
            />
          </a>
        </footer>

        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
