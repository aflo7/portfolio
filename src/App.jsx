import Skills from "./components/Skills"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Coursework from "./components/Coursework"
import Downloadables from "./components/Downloadables"
import { AiFillGithub } from "react-icons/ai"

function App() {
    return (
        <div className="main">
            <div className="app-wrapper">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="info-wrapper">
                            <div className="info-text">
                                My name is Andres Flores. I'm a student and a
                                programmer. Welcome to my portfolio!
                            </div>
                        </div>
                        <div className="bottom-wrapper">
                            <Projects />
                            <Skills />

                            <Education />
                        </div>
                        <Coursework />
                        <footer>
                            <div className="github-link">
                                <a
                                    href="https://github.com/aflo7"
                                    target="_blank"
                                >

                                    <AiFillGithub size={"2rem"} className="github-logo"/>
                                </a>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
