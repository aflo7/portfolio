import React from "react"
import Badge from "react-bootstrap/Badge"
import ListGroup from "react-bootstrap/ListGroup"

function Coursework() {
    return (
        <div className="coursework-wrapper">
            <ListGroup className="course-list">
              
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto li-text">
                        Web Application Development
                    </div>
                    <Badge bg="primary" pill>
                        A
                    </Badge>
                </ListGroup.Item>

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto li-text">Programming Languages</div>
                    <Badge bg="primary" pill>
                        A
                    </Badge>
                </ListGroup.Item>

              

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto li-text">Programming Fundamentals</div>
                    <Badge bg="primary" pill>
                        A
                    </Badge>
                </ListGroup.Item>

                

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto li-text">Software Engineering</div>
                    <Badge bg="primary" pill>
                        A
                    </Badge>
                </ListGroup.Item>

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto li-text">Data Structures</div>
                    <Badge bg="primary" pill>
                        A
                    </Badge>
                </ListGroup.Item>

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto li-text">Intermediate Programming</div>
                    <Badge bg="primary" pill>
                        B
                    </Badge>
                </ListGroup.Item>

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto li-text">Operating Systems</div>
                    <Badge bg="primary" pill>
                        B
                    </Badge>
                </ListGroup.Item>

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto li-text">
                        Design and Analysis Of Algorithms
                    </div>
                    <Badge bg="primary" pill>
                        B
                    </Badge>
                </ListGroup.Item>

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto li-text">Computer Organization</div>
                    <Badge bg="primary" pill>
                        B
                    </Badge>
                </ListGroup.Item>

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto li-text">Software Testing</div>
                    <Badge bg="primary" pill>
                        In progress
                    </Badge>
                </ListGroup.Item>

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto li-text">
                        Python for Computational Data Science
                    </div>
                    <Badge bg="primary" pill>
                        In progress
                    </Badge>
                </ListGroup.Item>

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto li-text">Computer Networking</div>
                    <Badge bg="primary" pill>
                        In progress
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Coursework
