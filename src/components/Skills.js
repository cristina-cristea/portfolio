import { React, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';
import gradient from '../assets/gradient-shade.png';
import saturn from '../assets/saturn.png';

export const Skills = () => {
  const skillsSectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when the "Skills" section enters the viewport
            imageRef.current.classList.add("planet-popping-in");
          }
          else{
            imageRef.current.classList.remove("planet-popping-in");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    // Cleanup observer when component unmounts
    return () => {
      if (skillsSectionRef.current) {
        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skillsList = [
    { title: "HTML", percentage: 95 },
    { title: "CSS", percentage: 85 },
    { title: "React", percentage: 95 },
    { title: "Angular", percentage: 60 },
  ];

// Helper function to calculate the stroke-dashoffset based on percentage
const calculateStrokeOffset = (percentage, radius) => {
  const circumference = 2 * Math.PI * radius; // Full circumference of the circle
  const progressPercentage = parseInt(percentage, 10); // Convert percentage string to number
  return circumference - (progressPercentage / 100) * circumference; // Calculate the dashoffset
};

const Skill = ({ title, percentage }) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Full circumference
  const strokeOffset = calculateStrokeOffset(percentage, radius); // Calculate stroke offset based on percentage

  return (
    <div className="skill-item">
      <svg className="progress-circle" width="120" height="120">
        <defs>
          <linearGradient id={`gradient-${title}`}>
            <stop offset="0%" stopColor="#5730b4" />
            <stop offset="100%" stopColor="#9f3583" />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle
          className="bg"
          cx="60"
          cy="60"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={0}
        ></circle>

        {/* Progress Circle */}
        <circle
          className="progress"
          cx="60"
          cy="60"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeOffset} // Apply calculated dashoffset here
          style={{ stroke: `url(#gradient-${title})` }}
        ></circle>
      </svg>
      <p className="skill-title">{title}</p>
    </div>
  );
};
  
  
  return (
    <section className="skill" id="skills" ref={skillsSectionRef}>
      <Container>
        <Row>
          <Col>
            <div className='skill-box'>
              <h2>
                Skills
              </h2>
              <p>
                My skills showcase my expertise in front-end development, with a strong focus on HTML, CSS, and JavaScript frameworks like React. I continuously strive to enhance my proficiency in Angular and other modern technologies, delivering dynamic and responsive web applications. Each skill is visually represented with progress indicators, highlighting my mastery in key areas.
              </p>
            </div>

            <div className="skills-list">
              {skillsList.map((skill) => (
                <Skill key={skill.title} title={skill.title} percentage={skill.percentage} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={gradient} alt='img-left' />
      <img className='planet-default' src={saturn} alt='planet' ref={imageRef} />
    </section>
  )
}
