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
                <span className='before-dash'>CMS Development Services</span>
                <h2>Control your website content like never before with the organized functionality </h2>
              </s.SectionTagline>
              <s.SectionHeader>
              <h3>Customized and personalized website development is rightly made for your business.</h3>
              <p>Webenix offers the CMS customized services for every business sector, letting you choose the selective feature for the custom development. Edit your website content from anywhere without using any other software like webmaster. CMS development is the ultimate solution for frequent changes in the content for your website. </p>
              </s.SectionHeader>
          </Container>
      </s.SectionIntroWrapper>
    </>
  );
};

export default SectionIntro