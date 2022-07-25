import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HireReactJSDeveloper/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section separatorPart">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Explore the super-sleek frontend development</span>
              <h2>Want the fastest functioning apps, ReactJS is super perfect.</h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>Scale up your business super fast, providing the best functionality in the frontend development by ReactJS. </h3>
            <p>ReactJS is considered to be the open-source Javascript Framework that helps in creating dynamic projects. The ReactJS technology is mostly preferred by business owners who want to develop a mobile application totally user-centric. Get yourself one, without worrying about the code quality because we have got it all covered for you.</p>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro