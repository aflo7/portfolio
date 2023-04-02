import Skills from "./components/Skills"
import Education from "./components/Education"
import Projects from "./components/Projects"

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
