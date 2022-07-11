import React from 'react';
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/SEOPage/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    <>
      <s.SectionIntroWrapper className="introuction-section separatorPart">
          <Container>
              <s.SectionTagline>
                <span className='before-dash'>SEO services</span>
                <h2>Create strong visibility of your business without expertise in Search Engine Optimisation. </h2>
              </s.SectionTagline>
              <s.SectionHeader>
              <p>We help you gain the top-centric reach by executing a strong knowledge of SEO. The strategic planning of the SEO and content will drive the right business to your business. We work on the detailed and trendy SEO keywords, with detailed research on them according to your business. Let us build your brand with result-centric solutions. </p>
              </s.SectionHeader>
          </Container>
      </s.SectionIntroWrapper>
    </>
  );
};

export default SectionIntro