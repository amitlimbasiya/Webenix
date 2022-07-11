import React from 'react';
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/WordpressDevelopment/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    <>
      <s.SectionIntroWrapper className="introuction-section separatorPart">
          <Container>
              <s.SectionTagline>
                <span className='before-dash'>WordPress Development Expertise</span>
                <h2>WordPress Development Services.</h2>
              </s.SectionTagline>
              <s.SectionHeader>
              <p>Invite your customers as friends, look after their needs and provide them with the best content management solutions. We at Webenix make sure that the WordPress Websites are developed that are warming enough to bring more customers to your business.</p>
              <p>Do not worry about frequent changes, let us provide you with the WordPress customisation services for your WordPress website for a better customer experience. Take your business to the next level by developing the best WordPress Sites with Webenix making sure of a better customer reach. </p>
              </s.SectionHeader>
          </Container>
      </s.SectionIntroWrapper>
    </>
  );
};

export default SectionIntro