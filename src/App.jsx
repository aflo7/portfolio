import Skills from "./components/Skills"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import doc from "./images/doc.png"

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

                        <div className="doc-wrapper">
                            <img src={doc} width={'100%'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
