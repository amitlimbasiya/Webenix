import React from 'react';
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/PHPDevelopment/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    <>
      <s.SectionIntroWrapper className="introuction-section separatorPart">
          <Container>
              <s.SectionTagline>
                <span className='before-dash'>PHP  Expertise</span>
                <h2>With years of experience in  Development, we provide the right and strong solutions for your business. </h2>
              </s.SectionTagline>
              <s.SectionHeader>
              <p>The strong and guaranteed Development solutions help in showcasing the brand presence amongst the market with the rightfully integrated features for the web application projects. </p>
              <p>Along with mapping down the best design, we make sure to integrate the right tools that function, ensuring the performance of the web application. With the help of the best  developers, we have curated and brought some fantastic solutions to multiple businesses, so have been stated as the Best Development Company.</p>
              </s.SectionHeader>
          </Container>
      </s.SectionIntroWrapper>
    </>
  );
};

export default SectionIntro