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
                <span className='before-dash'>Node JS expertise</span>
                <h2>High speed and the best efficiency with the expertised Node JS Development</h2>
              </s.SectionTagline>
              <s.SectionHeader>
              <p>Get the best by developing websites and web apps with top Node JS Development company. NodeJS is the right choice for availing the maximum flexibility and adaptability. We develop mobile applications with the great adaptability that will function with zero buffering load time.</p>
              <p>If you want to develop the fast-paced working system of the application, Node JS is the best and right choice. With a pool of quality developers, we will ensure the best quality development maintaining the top-notch performance right for your business.</p>
              </s.SectionHeader>
          </Container>
      </s.SectionIntroWrapper>
    </>
  );
};

export default SectionIntro