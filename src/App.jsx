import Skills from "./components/Skills"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Coursework from "./components/Coursework"
import Downloadables from "./components/Downloadables"
import { AiFillGithub } from "react-icons/ai"
import Contact from "./components/Contact"
import { useState } from "react"
import plane from "./images/plane.png"

function App() {
    const [showBottomWrapper, setShowBottomWrapper] = useState(true)

    function toggleBottomWrapper() {
        setShowBottomWrapper((prev) => !prev)
    }

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

                        {showBottomWrapper && (
                            <div className="bottom-wrapper">
                                <Projects
                                    toggleBottomWrapper={toggleBottomWrapper}
                                />
                                <Skills />
                                <Education />
                            </div>
                        )}

                        {!showBottomWrapper && (
                            <div className="project-info-wrapper">
                                <button
                                    onClick={toggleBottomWrapper}
                                    className="back-btn"
                                >
                                    Back
                                </button>
                                <div
                                    style={{
                                        color: "white",
                                        paddingTop: "20px",
                                        textAlign: "justify"
                                    }}
                                >
                                    Group capstone project that was overseen by
                                    NetJets. Created a serverless application
                                    utilizing AWS technologies and Next.js for
                                    the front end. The application keeps track
                                    of NetJets entities such as owners, crew
                                    members, etc. Additionally, add new entities
                                    and modify existing ones.
                                </div>
                                <br></br>

                                <div
                                    style={{
                                        color: "white",
                                        textAlign: "justify"
                                    }}
                                >
                                    Technologies used: AWS Appsync, DynamoDB,
                                    Javascript, Next.js, HTML, CSS
                                </div>
                                <br></br>

                                <div
                                    style={{
                                        color: "white",
                                        textAlign: "justify"
                                    }}
                                >
                                    <div>
                                        My accomplishments for this group
                                        project included:
                                    </div>
                                    <br></br>

                                    <ul>
                                        <li>
                                            - used bootstrap to make the forms
                                            and buttons more appealing
                                        </li>
                                        <li>- styled the homepage using CSS</li>
                                        <li>
                                            - used appsync to create queries to
                                            the backend database
                                        </li>
                                        <li>
                                            - integrated appsync API with the
                                            frontend
                                        </li>
                                        <li>
                                            - uploaded static site files to an
                                            s3 bucket
                                        </li>
                                        <li>
                                            - deployed the website using AWS
                                            cloudfront
                                        </li>
                                        <li>
                                            - created weekly demos showing off
                                            our product
                                        </li>
                                    </ul>
                                </div>
                                <br></br>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}
                                >
                                    <img src={plane}></img>
                                </div>
                            </div>
                        )}

                        <Coursework />

                        <Contact />

                        <footer>
                            <div className="github-link">
                                <a
                                    href="https://github.com/aflo7"
                                    target="_blank"
                                >
                                    <AiFillGithub
                                        size={"2rem"}
                                        style={{ color: "white" }}
                                    />
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
