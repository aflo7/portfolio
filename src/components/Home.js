import React, { useEffect } from "react"

function Home() {
  useEffect(() => {
    var counter = 0
    const words = ["student", "programmer", "web developer"]
    const homepagetext = document.getElementById("homepagetitle")

    setInterval(function() {
      changeWord()
    }, 2000)

    function changeWord() {
      if (counter === 2) {
        counter = 0
        homepagetext.innerText = words[counter]
      } else {
        counter += 1
        homepagetext.innerText = words[counter]
      }
    }
  }, [])

  return (
    <div>
      <div class="context">
        <h1 id="homepagetitle">student</h1>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Home
