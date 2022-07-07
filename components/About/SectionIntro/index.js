import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/page/about/SectionIntro.style"; 



const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Grow With Us</span>
              <h2>An agency just like you!</h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>With the strength of right people, experience and desire, any business is destined for growth.</h3>
            <p>If you want to build the IT sources but cannot find the right team for it? Well, do not just worry about it as we at WEBENIX are here with a highly skilled and qualified developing team. Having the best command and expertise in the various developing languages, platforms, and frameworks we have got it all covered for you.</p>
            <p>We believe in saving your time, and yet staying consistent in delivering the best product is what we aim for at WEBENIX. It is the web development outsourcing company that you have always desired in the business to have.</p>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro