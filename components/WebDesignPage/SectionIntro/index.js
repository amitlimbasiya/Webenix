import React from 'react';
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/WebDesignPage/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    <>
      <s.SectionIntroWrapper className="introuction-section separatorPart">
          <Container>
              <s.SectionTagline>
                <span className='before-dash'>Lorem Ipsum</span>
                <h2>Best Web-Design company for your business</h2>
              </s.SectionTagline>
              <s.SectionHeader>
              <h3>Webenix serves and fulfils the digital requirement for your business</h3>
              <p>Webenix has truly impacted the experience in the sector of web designing with the extravagant team of web designers who practised the best development process. We leverage the design considering the specific optimized web content for marking up the target audience with suitable visualization. </p>
              <p>For handling high-profile projects, we have the best team that can help in developing the projects under expertise. From quality analysis to bringing the best functional needs, we stand for all to meet our customer’s expectations. </p>
              </s.SectionHeader>
          </Container>
      </s.SectionIntroWrapper>
    </>
  );
};

export default SectionIntro