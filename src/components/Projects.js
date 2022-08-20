import React, { useState } from "react"
import Project from "./Project"
var warehouse = require('../images/warehouse.png')
var twt = require('../images/twt-signed-in.png')
var lib = require('../images/local_library.png')
var py = require('../images/python-bank.png')

var myProjects = [
  {
    name: "Local Library",
    ghlink: "https://github.com/aflo7/local_library",
    description: "Used Node.js as the backend and MongoDB as the database",
    livelink: "https://limitless-brushlands-88497.herokuapp.com/catalog",
    imgSrc: lib
  },
  {
    name: "Twitter Clone",
    ghlink: "https://github.com/aflo7/twitter-clone-react-frontend",
    livelink: "https://aflo7.github.io/twitter-clone-react-frontend/",
    description: "React frontend, and a REST API backend using Node.js",
    imgSrc: twt
  },
  {
    name: "Warehouse Inventory",
    ghlink: "https://github.com/aflo7/warehouse_inventory_node",
    livelink: "https://secret-dawn-19829.herokuapp.com/",
    description:
      "Inspired to create by my job. Node.js backend and React frontend",
      imgSrc: warehouse
  },
  {
    name: "Python Bank GUI App",
    ghlink: "https://github.com/aflo7/python_exercises/tree/main/bank_project",
    description: "Used PyQT GUI Framework, and Firebase as the backend",
    imgSrc: py
  }
]

function Projects() {
  const [projectArr, setProjectArr] = useState(myProjects)
  return (
    <div className="projectallwrapper">
      {projectArr.map(function (project, i) {
        return (
          <div key={i}>
            <Project project={project}/>
          </div>
        )
      })} 
    </div>
  )
}


export default Projects
