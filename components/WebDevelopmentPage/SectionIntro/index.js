import React from 'react';
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/WebDevelopmentPage/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    <>
      <s.SectionIntroWrapper className="introuction-section separatorPart">
          <Container>
              <s.SectionTagline>
                <span className='before-dash'>Web Development</span>
                <h2>Website developed for the better results in your business</h2>
              </s.SectionTagline>
              <s.SectionHeader>
              <h3>Customized and personalized website development is rightly made for your business.</h3>
              <p>We are the best website design company having a team of some skilful designers. We believe in showcasing your business by developing it with impactful designs and delivering the most creative projects at your doorstep</p>
              <p>We make sure to use the right tools and sources that come from in-depth research and expertise in using it. Web designing is always about understanding the client’s need and delivering the best piece out of it by asking for the pre-approval by preparing wireframe outline design. </p>
              </s.SectionHeader>
          </Container>
      </s.SectionIntroWrapper>
    </>
  );
};

export default SectionIntro