import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import reactBlogImg from '../images/react-blog.png';
import todoListImg from '../images/todo-list.png';
import odinBookImg from '../images/odinbook.png';
import netJetsImg from '../images/netjets.png';
import dashImg from '../images/dash.png';
import contactApp from '../images/contact.png';
import '../styles/Projects.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import landingPage from '../images/handshake.png';
import dogHomePage from '../images/dog1.jpeg';
import multiStepForm from '../images/multi.png';
import appleLogo from '../images/apple.png';

function Projects({ toggleBottomWrapper }) {
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
        <div className="card-img-wrapper netjets-img">
          {/* <img width={'100%'} src={netJetsImg} /> */}
        </div>

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

        <div className="card-img-wrapper odinbook-img">
          {/* <img width={'100%'} src={odinBookImg} /> */}
        </div>

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
        <div className="card-img-wrapper apple-img">
          {/* <img width={'100%'} src={appleLogo} /> */}
        </div>
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
          Todo List
        </div>

        <div className="card-img-wrapper todolist-img">
          {/* <img width={'100%'} src={todoListImg} /> */}
        </div>

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

        <div className="card-img-wrapper reactblog-img">
          {/* <img width={'100%'} src={reactBlogImg} /> */}
        </div>

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

        <div className="card-img-wrapper dashboard-img">
          {/* <img width={'100%'} src={dashImg} /> */}
        </div>

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
          Java Contact App
        </div>

        <div className="card-img-wrapper java-img">
          {/* <img width={'100%'} src={contactApp} /> */}
        </div>

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

        <div className="card-img-wrapper landingpage-img">
          {/* <img width={'100%'} src={landingPage} /> */}
        </div>

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
        <div className="card-img-wrapper homepage-img">
          {/* <img width={'100%'} src={dogHomePage} /> */}
        </div>
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
        <div className="card-img-wrapper multistepform-img">
          {/* <img width={'100%'} src={multiStepForm} /> */}
        </div>
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
    </div>
  );
}

export default Projects;
