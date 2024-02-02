import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Projects = ({ toggleBottomWrapper }) => {
  return (
    <div className="project-wrapper">
      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          NetJets Key Registry
        </div>
        <div className="card-img-wrapper netjets-img"></div>

        <div className="project-link-wrapper">
          <div className="a-link" onClick={toggleBottomWrapper}>
            <div>Info&nbsp;</div>
            <AiOutlineInfoCircle style={{ color: 'white' }} />
          </div>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Odinbook
        </div>

        <div className="card-img-wrapper odinbook-img"></div>

        <div className="project-link-wrapper">
          <a
            href="http://54.88.215.42:4000/"
            target="_blank"
            className="a-link"
          >
            <div>Live&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>

          <a
            href="https://github.com/aflo7/facebook_clone"
            target="_blank"
            className="a-link"
          >
            <div>Source&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Shopping Cart
        </div>
        <div className="card-img-wrapper apple-img"></div>
        <div className="project-link-wrapper">
          <a
            href="https://aflo7.github.io/shopping-cart/"
            target="_blank"
            className="a-link"
          >
            <div>Live&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>

          <a
            href="https://github.com/aflo7/shopping-cart"
            target="_blank"
            className="a-link"
          >
            <div>Source&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Todo App
        </div>

        <div className="card-img-wrapper todolist-img"></div>

        <div className="project-link-wrapper">
          <a
            href="https://aflo7.github.io/todo_app/"
            target="_blank"
            className="a-link"
          >
            <div>Live&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>

          <a
            href="https://github.com/aflo7/todo-app"
            target="_blank"
            className="a-link"
          >
            <div>Source&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          React Blog
        </div>

        <div className="card-img-wrapper reactblog-img"></div>

        <div className="project-link-wrapper">
          <a
            href="https://aflo7.github.io/react_blog/"
            target="_blank"
            className="a-link"
          >
            <div>Live&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>

          <a
            href="https://github.com/aflo7/react_blog"
            target="_blank"
            className="a-link"
          >
            <div>Source&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Dashboard
        </div>

        <div className="card-img-wrapper dashboard-img"></div>

        <div className="project-link-wrapper">
          <a
            href="https://aflo7.github.io/dashboard/"
            target="_blank"
            className="a-link"
          >
            <div>Live&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>

          <a
            href="https://github.com/aflo7/dashboard"
            target="_blank"
            className="a-link"
          >
            <div>Source&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Contact App
        </div>

        <div className="card-img-wrapper java-img"></div>

        <div className="project-link-wrapper">
          <a
            href="https://github.com/aflo7/my-java-projects/tree/main/Final_Flores"
            target="_blank"
            className="a-link"
          >
            <div>Source&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Landing Page
        </div>

        <div className="card-img-wrapper landingpage-img"></div>

        <div className="project-link-wrapper">
          <a
            href="https://aflo7.github.io/landing-page/"
            target="_blank"
            className="a-link"
          >
            <div>Live&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>

          <a
            href="https://github.com/aflo7/landing-page"
            target="_blank"
            className="a-link"
          >
            <div>Source&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Home Page
        </div>
        <div className="card-img-wrapper homepage-img"></div>
        <div className="project-link-wrapper">
          <a
            href="https://aflo7.github.io/dog-homepage/"
            target="_blank"
            className="a-link"
          >
            <div>Live&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>

          <a
            href="https://github.com/aflo7/dog-homepage"
            target="_blank"
            className="a-link"
          >
            <div>Source&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Multi Step Form
        </div>
        <div className="card-img-wrapper multistepform-img"></div>
        <div className="project-link-wrapper">
          <a
            href="https://aflo7.github.io/multi-step-form/"
            target="_blank"
            className="a-link"
          >
            <div>Live&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>

          <a
            href="https://github.com/aflo7/multi-step-form"
            target="_blank"
            className="a-link"
          >
            <div>Source&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Resume Builder
        </div>
        <div className="card-img-wrapper resume-img"></div>
        <div className="project-link-wrapper">
          <a
            href="https://aflo7.github.io/cv-builder/"
            target="_blank"
            className="a-link"
          >
            <div>Live&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>

          <a
            href="https://github.com/aflo7/cv-builder"
            target="_blank"
            className="a-link"
          >
            <div>Docs&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Cloud Resume
        </div>
        <div className="card-img-wrapper aws-img"></div>
        <div className="project-link-wrapper">
          <a
            href="https://01.andres-flores-cloud-resume.com/"
            target="_blank"
            className="a-link"
          >
            <div>Live&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>

          <a
            href="https://github.com/aflo7/cloud-resume"
            target="_blank"
            className="a-link"
          >
            <div>Docs&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Library
        </div>
        <div className="card-img-wrapper angular-img"></div>
        <div className="project-link-wrapper">
          <a
            href="https://aflo7.github.io/local-library/"
            target="_blank"
            className="a-link"
          >
            <div>Live&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>

          <a
            href="https://github.com/aflo7/local-library"
            target="_blank"
            className="a-link"
          >
            <div>Docs&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>

      <div className="card-wrapper">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Yahtzee
        </div>
        <div className="card-img-wrapper yahtzee-img"></div>
        <div className="project-link-wrapper">
          <a
            href="https://github.com/aflo7/cloud-resume"
            target="_blank"
            className="a-link"
          >
            <div>Docs&nbsp;</div>
            <FaExternalLinkAlt style={{ color: 'white' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
