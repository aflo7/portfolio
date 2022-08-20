import React from "react"

function About() {
  return (
    <div className="aboutwrapper">
      <div className="desc">
        I am an aspiring web developer. I have knowledge of both frontend and
        backend web technologies. In my free time, I like to learn programming.
        I am hispanic and a first generation college student
      </div>
      <div className="skillswrapper">
        <div className="skillstitle">Skills</div>
        <div className="programminglanguagestitle">Programming Languages</div>
        <div className="programminglaninner">Javascript</div>
        <div className="programminglaninner">HTML/CSS</div>
        <div className="programminglaninner">Python</div>
        <div className="frameworkstitle">Preferred Tech Stack</div>
        <div className="frameworksinner">MongoDB, Express, React, Node</div>

        <div className="databaseexperience">
          <div className="databaseexperiencetitle">Database Experience</div>
        </div>

        <div className="databaseinner">MongoDB</div>
        <div  className="databaseinner">Firebase</div>
        <div className="softskillstitle">Soft Skills</div>
        <div className="softskillinner">Good communication/writing</div>
        <div className="softskillinner">Organization</div>
        <div className="softskillinner">Bilingual (English and Spanish)</div>
      </div>

      <div className="educationwrapper">
        <div className="educationtitle">Education</div>
        
          <div className="educationinner">Bowling Green State University (In Progress Degree)</div>
       
        <div className="educationinner">Lakeland Community College</div>
        <div className="educationinner">Harvey High School</div>
      </div>

      <div className="courseworkwrapper">
        <div className="courseworktitle">Notable Coursework</div>
        <div>Intermediate Programming (C++)</div>
        <div>Discrete Math</div>
        <div>Data Structures and Algorithms</div>
      </div>

      {/* <div className="workexperience">
        <div className="workexperiencetitle">Work Experience</div>
        <div>Laundromat Attendant (2017-2019)</div>
        <div>- Customer Service</div>
      </div> */}
    </div>
  )
}

export default About
