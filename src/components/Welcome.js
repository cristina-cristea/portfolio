import { React, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import './Welcome.css';
import astroImage from '../assets/astrokat.png';


export const Welcome = () => {
  const traitsList = [ "Web Developer", "Gamer", "Curiosity-driven Learner"];
  const [loopNum, setLoopNum] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300-Math.random() * 100)
  const time = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker)
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % traitsList.length;
    let fullText = traitsList[i];
    let updatedText = isErasing ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isErasing) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if(!isErasing && updatedText === fullText) {
      setIsErasing(true);
      setDelta(time);
    } else if(isErasing && updatedText === '') {
      setIsErasing(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className='welcome' id="welcome">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} xl={8}>
            <span className='intro'>Welcome to my Portofolio</span>
            <h1>{`I'm Kat, `}<span className='wrap'>{text}</span></h1>
            <p>
              I am a Front-End Developer with over 5 years of experience specializing in building dynamic and responsive web applications. Proficient in JavaScript and highly experienced with React, I create user-friendly interfaces. I also have a solid understanding of Angular and continuously strive to enhance my skills and keep up with the latest industry trends.
            </p>
            <button onClick={() => console.log('pressed')}>
              Let's connect <ArrowRightCircleFill size={25} />
            </button>
          </Col>

          <Col xs={12} md={4} xl={4}>
            <img src={astroImage} alt="astronaut" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
