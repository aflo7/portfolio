import React from "react"

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
import { FaReact, FaJava, FaAws } from "react-icons/fa"
import { TbBrandVscode } from "react-icons/tb"

function Skills() {
    return (
        <div className="skills-wrapper">
            <div
                style={{
                    textAlign: "center",
                    padding: "0px"
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
    )
}

export default Skills
