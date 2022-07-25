import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HireWordPressDeveloperPage/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section separatorPart">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Work with the best CMS platform</span>
              <h2>Manage your business with the most wanted CMS platform.</h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>Embed your business on the best CMS platform for the easy management of the business content. </h3>
            <p>We believe in easy content management, and thus WordPress plays the most efficient role in it. Make your business easier with an efficient content management platform that we develop and contribute globally from one WordPress VIP Agency.</p>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro