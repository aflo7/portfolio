import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"
import reactBlogImg from "../images/react-blog.png"
import todoListImg from "../images/todo-list.png"
import odinBookImg from "../images/odinbook.png"
import netJetsImg from "../images/netjets.png"
import dashImg from "../images/dash.png"
import contactApp from "../images/contact.png"
import starbuzzPhoto from "../images/starbuzz.png"
import "../styles/Projects.css"

function Projects() {
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

            <div className="card-wrapper">
                <div
                    style={{
                        textAlign: "center",
                        padding: "10px"
                    }}
                >
                    NetJets Key Registry
                </div>
                <div className="card-img-wrapper">
                    <img width={"100%"} src={netJetsImg} />
                </div>
            </div>

            <div className="card-wrapper">
                <div
                    style={{
                        textAlign: "center",
                        padding: "10px"
                    }}
                >
                    Odinbook
                </div>

                <div className="card-img-wrapper">
                    <img width={"100%"} src={odinBookImg} />
                </div>

                <div className="project-link-wrapper">
                    <a
                        href="https://app1.memberssonly.xyz/"
                        target="_blank"
                        className="a-link"
                    >
                        <div>Live&nbsp;</div>
                        <FaExternalLinkAlt style={{color: 'white'}} />
                    </a>

                    <a
                        href="https://github.com/aflo7/facebook_clone"
                        target="_blank"
                        className="a-link"
                    >
                        <div>Source&nbsp;</div>
                        <FaExternalLinkAlt style={{color: 'white'}} />
                    </a>
                </div>
            </div>
            <div className="card-wrapper">
                <div
                    style={{
                        textAlign: "center",
                        padding: "10px"
                    }}
                >
                    Todo List
                </div>

                <div className="card-img-wrapper">
                    <img width={"100%"} src={todoListImg} />
                </div>

                <div className="project-link-wrapper">
                    <a
                        href="https://aflo7.github.io/todo-app/"
                        target="_blank"
                        className="a-link"
                    >
                        <div>Live&nbsp;</div>
                        <FaExternalLinkAlt style={{color: 'white'}} />
                    </a>

                    <a
                        href="https://github.com/aflo7/todo-app"
                        target="_blank"
                        className="a-link"
                    >
                        <div>Source&nbsp;</div>
                        <FaExternalLinkAlt style={{color: 'white'}} />
                    </a>
                </div>
            </div>

            <div className="card-wrapper">
                <div
                    style={{
                        textAlign: "center",
                        padding: "10px"
                    }}
                >
                    React Blog
                </div>

                <div className="card-img-wrapper">
                    <img width={"100%"} src={reactBlogImg} />
                </div>

                <div className="project-link-wrapper">
                    <a
                        href="https://aflo7.github.io/blog_frontend_dec_17/"
                        target="_blank"
                        className="a-link"
                    >
                        <div>Live&nbsp;</div>
                        <FaExternalLinkAlt style={{color: 'white'}} />
                    </a>

                    <a
                        href="https://github.com/aflo7/blog_frontend_dec_17"
                        target="_blank"
                        className="a-link"
                    >
                        <div>Source&nbsp;</div>
                        <FaExternalLinkAlt style={{color: 'white'}} />
                    </a>
                </div>
            </div>

            <div className="card-wrapper">
                <div
                    style={{
                        textAlign: "center",
                        padding: "10px"
                    }}
                >
                    Dashboard
                </div>

                <div className="card-img-wrapper">
                    <img width={"100%"} src={dashImg} />
                </div>

                <div className="project-link-wrapper">
                    <a
                        href="https://aflo7.github.io/dashboard/"
                        target="_blank"
                        className="a-link"
                    >
                        <div>Live&nbsp;</div>
                        <FaExternalLinkAlt style={{color: 'white'}} />
                    </a>
                </div>
            </div>

            <div className="card-wrapper">
                <div
                    style={{
                        textAlign: "center",
                        padding: "10px"
                    }}
                >
                    Java Contact App
                </div>

                <div className="card-img-wrapper">
                    <img width={"100%"} src={contactApp} />
                </div>

                <div className="project-link-wrapper">
                    <a
                        href="https://github.com/aflo7/my-java-projects/tree/main/Final_Flores"
                        target="_blank"
                        className="a-link"
                    >
                        <div>Source&nbsp;</div>
                        <FaExternalLinkAlt style={{color: 'white'}} />
                    </a>
                </div>
            </div>

            <div className="card-wrapper">
                <div
                    style={{
                        textAlign: "center",
                        padding: "10px"
                    }}
                >
                    Starbuzz
                </div>

                <div className="card-img-wrapper">
                    <img width={"100%"} src={starbuzzPhoto} />
                </div>

                <div className="project-link-wrapper">
                    <a
                        href="https://github.com/aflo7/react_projects/tree/main/starbuzz"
                        target="_blank"
                        className="a-link"
                    >
                        <div>Source&nbsp;</div>
                        <FaExternalLinkAlt style={{color: 'white'}}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects
