import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import Image from "react-bootstrap/Image";
import L_ISS from "../../assets/img/projects/iss.jfif";
import L_SFML from "../../assets/img/projects/sfml.jfif";
import L_TERR from "../../assets/img/projects/terr.png";
import L_CP from "../../assets/img/projects/cp.png";
import L_D from "../../assets/img/projects/ds.png";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_SVM from "../../assets/img/projects/svm.jpg";
import L_K from "../../assets/img/projects/k.jfif";
import L_OPENGL from "../../assets/img/projects/opengl.png";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Todo List With MUI */}
        <ImageEvent
            date="08/01/2020"
            className="text-center"
            text="Terrain Rendering using Advanced DSA"
            src={L_TERR}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Terrain means earth surface and rendering means generation of 2-D and 3-D
                        points, therefore Terrain Rendering is generation of earth surface using computer programs.  
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">


                          
                          <li>Implemented two rendering methods - Delaunay Triangulation and Real Time Optimally Adapting Meshes 
                            (ROAM) algorithm</li>
                          <li>Suggested optimizations in their Implementation</li>
                          <li>The Terrain rendered using the ROAM algorithm was similar to terrain generated in PUBG.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CP}
                                alt="HTML 5"
                                rounded
                                className="h image-style m-1"
                              ></Image>{" "}
                              C++
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_D}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Data Structures
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_OPENGL}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Open GL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SFML}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              SFML
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                

                <UrlButton
                  href="https://user-images.githubusercontent.com/66271249/103809983-742bde00-5080-11eb-9d9e-8afe8b9819bc.mp4"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/AmolSamota/Terrain-Rendering-using-DSA"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
                
              </div>
            </div>
          </ImageEvent>


          <ImageEvent
            date="22/11/2020"
            className="text-center"
            text="Clone of Issue page of GitHub"
            src={L_ISS}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Created clone of GitHub Issues Page using Node.js, Express, React, HTML, CSS, JS. Uploaded Web App on Heroku.  

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User can create and delete an issue and also decide to close or open it.</li>
                          <li>Added pagination.</li>
                    
                        </ul>

                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="HTML 5"
                                rounded
                                className="h image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                

                <UrlButton
                  href="https://github-issuepage-webapp.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/AmolSamota/GitHub-IssuePage-Clone"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
                
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="16/12/2020"
            className="text-center"
            text="InstaBase(gallery web-app)"
            src={L_ISS}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description: Created online images gallery
                        </strong>
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Users can upload their pictures on online platform and also view others pictures also.</li>
                          <li>Added authentication feature using google and email.</li>
                    
                        </ul>

                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          {/* <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="HTML 5"
                                rounded
                                className="h image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li> */}
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          {/* <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li> */}
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>

                          {/* <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li> */}
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                

                <UrlButton
                  href="https://instabase.netlify.app/login.html"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/AmolSamota/InstaBase"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
                
              </div>
            </div>
          </ImageEvent>

          

          
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;