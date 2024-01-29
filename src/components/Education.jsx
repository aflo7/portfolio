import React from "react"
import bgImg from "../images/bg.png"
import odinImg from "../images/odin.gif"
import redRaiderImg from "../images/redraider.png"

function Education() {
    return (
        <div className="education-wrapper">
            {/* <div
                style={{
                    textAlign: "center",
                    fontFamily: 'cyrMedium'
                }}
            >
                Education
            </div> */}

            <div className="edu-wrapper">
                <p
                    style={{
                        textAlign: "center",
                        padding: "5px"
                    }}
                >
                    Bowling Green
                </p>
                <div style={{paddingTop: '10px'}}>
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
                <div>
                    <img width={"100%"} src={redRaiderImg} />
                </div>
            </div>

            <div className="edu-wrapper">
                <p
                    style={{
                        textAlign: "center",
                        padding: "5px"
                    }}
                >
                    The Odin Project
                </p>
                <div>
                    <img width={"100%"} src={odinImg} />
                </div>
            </div>
        </div>
    )
}

export default Education
