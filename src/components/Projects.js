import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import './Projects.css';
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";
import gradient from '../assets/gradient-shade2.png';

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export const Projects = () => {
  const projectsToluna = [
    {
      title: "Toluna Start",
      description: "Contributed through creating reusable components, creating and styling UI elements from scratch following guidelines (with Figma), small functionalities, debugging and fixing conflicts. Also involved in mentoring new team members to the project and pull requests reviews. ",
      imgUrl: projImg1,
    },
    {
      title: "Toluna React Components ",
      description: " Took part in the feature development and refactoring of the portal using React, adding new components as well as improving existing ones, bug fixing and animating components if needed. ",
      imgUrl: projImg2,
    },
    {
      title: "Harris Portal",
      description: " In charge of writing certain features using HTML, CSS and jQuery, responsive for both mobile and desktop. Worked close with the backend team to provide data on the dashboards, minor features functionality and bug fixing. ",
      imgUrl: projImg3,
    }
  ];

  const projectsLateral = [
    {
      title: "One",
      description: "A travel application designed for hotel booking and wine shopping. Contributed on home page appearance, added search filters and functionality for wine section, as well as mobile responsiveness for several pages. ",
      imgUrl: projImg1
    }
  ];

  const projectsNagarro = [
    {
      title: "Learning Angular",
      description: "Throughout this learning project, I became proficient in Angular’s data binding, routing, and dependency injection. I also worked with Angular services to manage data, and learned how to utilize directives and pipes. This experience helped me broaden my skill set and apply it effectively in front-end development.",
      imgUrl: projImg3
    }
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>

            <h2>Projects</h2>
            <p>
            Here, you'll find a collection of projects I've been involved in throughout my career at various companies. These projects highlight my experience in building engaging and efficient web applications, each tailored to the unique goals of the business. From crafting custom components libraries to optimizing performance, these works reflect my dedication to solving real-world challenges with innovative front-end solutions.
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Toluna</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Lateral</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Nagarro</Nav.Link>
                </Nav.Item>        
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projectsToluna.map((project, index) => {
                        return(
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                    {
                      projectsLateral.map((project, index) => {
                        return(
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                    {
                      projectsNagarro.map((project, index) => {
                        return(
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>

          </Col>
        </Row>
      </Container>
      <img src={gradient} className='background-image-right' alt='Img-right' />
    </section>
  )
}
