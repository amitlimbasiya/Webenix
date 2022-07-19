import React from 'react';
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/ResponsiveWebDesign/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    <>
      <s.SectionIntroWrapper className="introuction-section separatorPart">
          <Container>
              <s.SectionTagline>
                <span className='before-dash'>Responsive Web Design </span>
                <h2>Make your business approach clearer by designing the best responsive web designs.</h2>
              </s.SectionTagline>
              <s.SectionHeader>
              <p>Considering the user&#39;s demand and expectation, we make sure to develop the best responsive web designs. Get the maximum customer approach and market reach and earn the unexpected ROI. With the clear affordability we help you cut down on unwanted expenses.</p>
              <p>Webenix is one of the most experienced companies that have impacted the maximum businesses globally and yet keeping up with the design trends and customer&#39;s expectations.</p>
              </s.SectionHeader>
          </Container>
      </s.SectionIntroWrapper>
    </>
  );
};

export default SectionIntro