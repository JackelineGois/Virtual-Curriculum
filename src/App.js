import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faLaptopCode,
  faMapLocation,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import profileImg from "./assets/image/profile.jpeg";
import Navbar from "./components/navbar";
import Skill from "./components/skill-item";
import Contact from "./components/contacts-item";
import ResponsiveMenu from "./components/responsive-navbar";

function App() {
  return (
    <>
      <div className="container">
        <ResponsiveMenu />
        <Navbar />
        <div class="container-section">
          <section id="aboutMe" class="section-main">
            <a>
              <header>About me</header>
            </a>
            <div class="content-page">
              <div class="content-img">
                <img src={profileImg} />
              </div>
              <div class="content-itens">
                <h1>Jackeline Gois</h1>
                <div className="location-map">
                  <FontAwesomeIcon
                    className="blue-color"
                    icon={faMapLocation}
                  />
                  <p className="blue-color"> Dublin Ireland</p>
                </div>
                <p>
                  Hi! My name is Jakeline Gois am I am a developer, I have
                  experience with projects in which I made using Frontend(HTML,
                  CSS, JavaScript, ReactJs) and Backend(Node, Express, Knex) and
                  with the database(MySQL)
                </p>
              </div>
            </div>
          </section>
          <section class="section-main">
            <header>Services</header>
            <div class="display-flex">
              <div class="content-services">
                <FontAwesomeIcon
                  className="blue-color general-icon"
                  icon={faDesktop}
                />
                <div className="content-text">
                  <h2> FrontEnd Developer</h2>
                  <h4>HTML, JavaScript(JQuery, React), CSS...</h4>
                </div>
              </div>
              <div class="content-services">
                <FontAwesomeIcon
                  className="blue-color general-icon"
                  icon={faLaptopCode}
                />
                <div>
                  <h2> Backend Developer</h2>
                  <h4> Node, Express, Knex, MySQL</h4>
                </div>
              </div>
            </div>
          </section>
          <section id="services" class="section-main">
            <header>Experience</header>
            <div className="content-resume ">
              <h2 className="blue-color"> Resume </h2>
              <p className="content-itens">
                At the beginning of 2022, I started an online FullStack
                Developer course, which allowed me to acquire knowledge and
                skills to develop some projects, such as this online curriculum.
                Among these projects, I highlight one in which I created an
                application from scratch in which the objective was to register,
                delete, search and edit students based on the database table. In
                this project I used Frontend(ReactJs), Backend(NodeJS) and all
                the database part using MySQL.
              </p>
            </div>
          </section>
          <section className="section-main">
            <header> Skills </header>
            <div className="display-flex">
              <div className="content-skills">
                <h1> FrontEnd</h1>
                <Skill text={"HTML"} />
                <Skill text={"CSS"} />
                <Skill text={"JQuery"} />
                <Skill text={"JavaScript"} />
              </div>
              <div className="content-skills">
                <h1> Backend</h1>
                <Skill text={"NodeJS"} />
                <Skill text={"Express"} />
                <Skill text={"knex"} />
              </div>
              <div className="content-skills">
                <h1> Database</h1>
                <Skill text={"MySQL"} />
              </div>
            </div>
          </section>
          <section id="contact" className="section-main">
            <header>Contacts</header>
            <div className="display-flex contact-itens">
              <Contact
                icon={faPaperPlane}
                text={"jackelinedemoraisgois@gmail.com"}
              />
              <Contact icon={faPhone} text={"(+353)083 0837845"} />
            </div>
          </section>
        </div>
      </div>

    </>
  );
}

export default App;
