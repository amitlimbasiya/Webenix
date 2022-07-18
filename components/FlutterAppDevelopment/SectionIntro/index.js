import React from 'react';
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/FlutterAppDevelopment/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    <>
      <s.SectionIntroWrapper className="introuction-section separatorPart">
          <Container>
              <s.SectionTagline>
                <span className='before-dash'>Flutter App Development Expertise</span>
                <h2>Choose the best cross-platform app development-Flutter</h2>
              </s.SectionTagline>
              <s.SectionHeader>
              <p>We are here to make your business look unique and sustainable, that will never go out of style which is only possible with the help of Flutter Cross-Platform where our developers have the best hands on. With the Flutter Development Services, we help to maintain the balance between market and business requirements. </p>
              <p>In the mobile application, it is important to execute the right and needful features which your users will want to stay with your app. We make sure that we keep up with the on-going trends that will not make your business fall apart. </p>
              </s.SectionHeader>
          </Container>
      </s.SectionIntroWrapper>
    </>
  );
};

export default SectionIntro