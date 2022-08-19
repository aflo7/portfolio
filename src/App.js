// import logo from './logo.svg';
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import Projects from "./Projects"
import Contact from "./Contact"
import About from "./About"
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navwrapper">
          <div className="navname">
            <Link to="/">Andres Flores</Link>
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


      <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>

        
      </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
