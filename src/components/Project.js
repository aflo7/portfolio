import React from "react"

function Project({ project }) {
  return (
    <div className="projectwrapper">
      <div className="projectname">{project.name}</div>

      <div className="imgwrapper"> <img src={project.imgSrc} alt={project.name} className="projectimg" /></div>
     
      <div className="atagprojectwrapper">
        <a
          className="atagproject"
          href={project.ghlink}
          target="_blank"
          rel="noreferrer"
        >
          Github Link
        </a>
      </div>

      {project.livelink ? (
        <div className="livelink">
          <a className="atagproject" href={project.livelink}>
            Live Link
          </a>
        </div>
      ) : null}
      <div className="projectdesc">- {project.description}</div>
    </div>
  )
}

export default Project
