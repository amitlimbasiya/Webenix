import React from 'react';
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/NodeJsDevelopment/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    <>
      <s.SectionIntroWrapper className="introuction-section separatorPart">
          <Container>
              <s.SectionTagline>
                <span className='before-dash'>React JS Development Services</span>
                <h2>Elevate your business with the real-time robust application</h2>
              </s.SectionTagline>
              <s.SectionHeader>
              <p>Curate your business with the best strategic application where you need a pool of talented and experienced developers. Well, you are at the right place where we help you provide your business with some extravagant user experience web applications with quick updates in real-time, swift loading, and surely high performance.</p>
              <p>Experience the high quality and strong development robust features developed by the highly experienced ReactJS Developers. </p>
              </s.SectionHeader>
          </Container>
      </s.SectionIntroWrapper>
    </>
  );
};

export default SectionIntro