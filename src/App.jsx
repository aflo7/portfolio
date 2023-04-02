import { useState } from "react"
import reactBlogImg from "./images/react-blog.png"
import todoListImg from "./images/todo-list.png"
import odinBookImg from "./images/odinbook.png"
import netJetsImg from "./images/netjets.png"
import bgImg from "./images/bg.png"
import odinImg from "./images/odin.gif"
import redRaiderImg from "./images/redraider.png"

import {
    IoLogoNodejs,
    IoLogoHtml5,
    IoLogoJavascript,
    IoLogoCss3
} from "react-icons/io"
import { SiPhp, SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si"
import { CgCPlusPlus } from "react-icons/cg"
import { DiLinux } from "react-icons/di"
import { GrGraphQl } from "react-icons/gr"
import { FaReact, FaJava, FaAws, FaExternalLinkAlt } from "react-icons/fa"
import { TbBrandVscode } from "react-icons/tb"

function App() {
    const [hovering1, setHovering1] = useState(false)
    const [hovering2, setHovering2] = useState(false)
    const [hovering3, setHovering3] = useState(false)
    const [hovering4, setHovering4] = useState(false)

    const handleMouseOver1 = () => {
        setHovering1(true)
    }

    const handleMouseOut1 = () => {
        setHovering1(false)
    }

    const handleMouseOver2 = () => {
        setHovering2(true)
    }

    const handleMouseOut2 = () => {
        setHovering2(false)
    }

    const handleMouseOver3 = () => {
        setHovering3(true)
    }

    const handleMouseOut3 = () => {
        setHovering3(false)
    }

    const handleMouseOver4 = () => {
        setHovering4(true)
    }

    const handleMouseOut4 = () => {
        setHovering4(false)
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
                        <div className="bottom-wrapper">
                            <div className="project-wrapper">
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "5px"
                                    }}
                                >
                                    PROJECTS
                                </div>

                                <div
                                    className="card-wrapper"
                                    style={{ position: "relative" }}
                                >
                                    <div
                                        style={{
                                            textAlign: "center",
                                            padding: "5px"
                                        }}
                                    >
                                        NetJets Key Registry
                                    </div>
                                    <div
                                        className="card-img-wrapper"
                                        onMouseOver={handleMouseOver1}
                                        onMouseOut={handleMouseOut1}
                                    >
                                        <a
                                            href="https://dly30ew67s37r.cloudfront.net/"
                                            target="_blank"
                                        >
                                            <img
                                                width={"100%"}
                                                src={netJetsImg}
                                            />

                                            {hovering1 && (
                                                <FaExternalLinkAlt
                                                    size={"3rem"}
                                                    style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform:
                                                            "translate(-50%, -50%)",
                                                        color: "white"
                                                    }}
                                                />
                                            )}
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="card-wrapper"
                                    style={{ position: "relative" }}
                                >
                                    <div
                                        style={{
                                            textAlign: "center",
                                            padding: "5px"
                                        }}
                                    >
                                        Odinbook
                                    </div>

                                    <div
                                        className="card-img-wrapper"
                                        onMouseOver={handleMouseOver2}
                                        onMouseOut={handleMouseOut2}
                                    >
                                        <a
                                            href="https://app1.memberssonly.xyz/"
                                            target="_blank"
                                        >
                                            <img
                                                width={"100%"}
                                                src={odinBookImg}
                                            />
                                            {hovering2 && (
                                                <FaExternalLinkAlt
                                                    size={"3rem"}
                                                    style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform:
                                                            "translate(-50%, -50%)"
                                                    }}
                                                />
                                            )}
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="card-wrapper"
                                    style={{ position: "relative" }}
                                >
                                    <div
                                        style={{
                                            textAlign: "center",
                                            padding: "5px"
                                        }}
                                    >
                                        Todo List
                                    </div>

                                    <div
                                        className="card-img-wrapper"
                                        onMouseOver={handleMouseOver3}
                                        onMouseOut={handleMouseOut3}
                                        style={{ position: "relative" }}
                                    >
                                        <a
                                            href="https://aflo7.github.io/todo-app/"
                                            target="_blank"
                                        >
                                            <img
                                                width={"100%"}
                                                src={todoListImg}
                                            />

                                            {hovering3 && (
                                                <FaExternalLinkAlt
                                                    size={"3rem"}
                                                    style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform:
                                                            "translate(-50%, -50%)"
                                                    }}
                                                />
                                            )}
                                        </a>
                                    </div>
                                </div>
                                <div className="card-wrapper">
                                    <div
                                        style={{
                                            textAlign: "center",
                                            padding: "5px"
                                        }}
                                    >
                                        React Blog
                                    </div>

                                    <div
                                        className="card-img-wrapper"
                                        onMouseOver={handleMouseOver4}
                                        onMouseOut={handleMouseOut4}
                                        style={{ position: "relative" }}
                                    >
                                        <a
                                            href="https://aflo7.github.io/blog_frontend_dec_17/"
                                            target="_blank"
                                        >
                                            <img
                                                width={"100%"}
                                                src={reactBlogImg}
                                            />
                                        </a>

                                        {hovering4 && (
                                            <FaExternalLinkAlt
                                                size={"3rem"}
                                                style={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: "50%",
                                                    transform:
                                                        "translate(-50%, -50%)"
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="skills-wrapper">
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "5px"
                                    }}
                                >
                                    SKILLS
                                </div>

                                <div className="skill-wrapper">
                                    <p>JavaScript</p>
                                    <IoLogoJavascript size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>HTML</p>
                                    <IoLogoHtml5 size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>CSS</p>
                                    <IoLogoCss3 size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>React</p>
                                    <FaReact size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>Node.js</p>
                                    <IoLogoNodejs size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>C++</p>
                                    <CgCPlusPlus size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>PHP</p>
                                    <SiPhp size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>MongoDB</p>
                                    <SiMongodb size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>Next.js</p>
                                    <SiNextdotjs size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>AWS</p>
                                    <FaAws size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>AppSync</p>
                                    <GrGraphQl size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>Linux</p>
                                    <DiLinux size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>Java</p>
                                    <FaJava size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>MySQL</p>
                                    <SiMysql size={"3rem"} />
                                </div>

                                <div className="skill-wrapper">
                                    <p>VS Code</p>
                                    <TbBrandVscode size={"3rem"} />
                                </div>
                            </div>

                            <div className="education-wrapper">
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "5px"
                                    }}
                                >
                                    EDUCATION
                                </div>

                                <div className="edu-wrapper">
                                    <p
                                        style={{
                                            textAlign: "center",
                                            padding: "5px"
                                        }}
                                    >
                                        Bowling Green State University
                                    </p>
                                    <div className="school-card-img-wrapper">
                                        <img width={"100%"} src={bgImg} />
                                    </div>
                                </div>

                                <div className="edu-wrapper">
                                    <p
                                        style={{
                                            textAlign: "center",
                                            padding: "5px"
                                        }}
                                    >
                                        Harvey High School
                                    </p>
                                    <div className="school-card-img-wrapper">
                                        <img
                                            width={"100%"}
                                            src={redRaiderImg}
                                        />
                                    </div>
                                </div>

                                <div className="edu-wrapper">
                                    <p
                                        style={{
                                            textAlign: "center",
                                            padding: "5px"
                                        }}
                                    >
                                        Odin Project
                                    </p>
                                    <div className="school-card-img-wrapper">
                                        <img width={"100%"} src={odinImg} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
