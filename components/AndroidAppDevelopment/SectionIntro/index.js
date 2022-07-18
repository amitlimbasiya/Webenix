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
                <span className='before-dash'>Android App Development expertise</span>
                <h2>Develop the most demanding android app for your business</h2>
              </s.SectionTagline>
              <s.SectionHeader>
              <p>As stated, with the 2.5 million+ apps already present, it is now time to develop that sets apart the user’s attention, needs and requirements with the best functionality, clean and sleek UI/UX interface and most flexible to use it. </p>
              <p>From Kotlin to Dart, we have the expert hands on developing the best android mobile apps that will surely hit the market with the full fledge. This will help your business with the highly escalated success in the business. </p>
              </s.SectionHeader>
          </Container>
      </s.SectionIntroWrapper>
    </>
  );
};

export default SectionIntro