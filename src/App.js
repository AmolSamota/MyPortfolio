import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Experience from "./pages/experience/experience.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import FooterPanel from "./components/footer/footer.component";
import Bgimage from "./assets/img/parallex/background.webp"

import "./App.css";

// const countEl = document.getElementById('count');

// function updateVisitCount() {
//   fetch('https://api.countapi.xyz/update/amol/kanha/?amount=1')
//   .then(res => res.json())
//   .then(res => {
//     countEl.innerHTML = res.value;
//   })
// } 

const App = () => {
  return (

    

    





    <div className="App" style={{ position: "relative" }}>
      <MyCarousal />
      <MyTitleMessage />
      <MyNavbar />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={Bgimage}
          
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      {/* <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div> */}
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>


      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />

      
    </div>

    // ,updateVisitCount()
    
  );
};

export default App;