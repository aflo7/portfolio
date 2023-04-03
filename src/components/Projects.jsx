import React, { useState } from "react"
import { FaExternalLinkAlt } from "react-icons/fa"
import reactBlogImg from "../images/react-blog.png"
import todoListImg from "../images/todo-list.png"
import odinBookImg from "../images/odinbook.png"
import netJetsImg from "../images/netjets.png"

function Projects() {
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
        <div className="project-wrapper">
            <div
                style={{
                    textAlign: "center",
                    padding: "5px"
                }}
            >
                PROJECTS
            </div>

            <div className="card-wrapper" style={{ position: "relative" }}>
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
                        <img width={"100%"} src={netJetsImg} />

                        {hovering1 && (
                            <FaExternalLinkAlt
                                size={"3rem"}
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white"
                                }}
                            />
                        )}
                    </a>
                </div>
            </div>
            <div className="card-wrapper" style={{ position: "relative" }}>
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
                    <a href="https://app1.memberssonly.xyz/" target="_blank">
                        <img width={"100%"} src={odinBookImg} />
                        {hovering2 && (
                            <FaExternalLinkAlt
                                size={"3rem"}
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)"
                                }}
                            />
                        )}
                    </a>
                </div>
            </div>
            <div className="card-wrapper" style={{ position: "relative" }}>
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
                    <a href="https://aflo7.github.io/todo-app/" target="_blank">
                        <img width={"100%"} src={todoListImg} />

                        {hovering3 && (
                            <FaExternalLinkAlt
                                size={"3rem"}
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)"
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
                        <img width={"100%"} src={reactBlogImg} />
                    </a>

                    {hovering4 && (
                        <FaExternalLinkAlt
                            size={"3rem"}
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects
