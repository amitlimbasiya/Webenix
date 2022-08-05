import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../styles/components/WhyUs.style"; 

const WhyUs = () => {
  return (
    <s.WhyUsWrapper>
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Take a look at</span>
              <h2>See why Webenix is different</h2>
            </s.SectionTagline>
            <s.WhyusBoxWrapper>
                <s.WhyusBox className="whyusbox why_motivate">
                    <h3>MOTIVATED</h3>
                    <s.WhyusBoxContent className="whyuscontent-box">
                        <p>The right and positive motivation are hard to acquire, but when working with Webenix, it is one of the core things that is given importance because the right motivation brings great ideas to the projects by avoiding dull space.</p>
                    </s.WhyusBoxContent> 
                </s.WhyusBox>
                <s.WhyusBox className="whyusbox why_disciplined">
                    <h3>DISCIPLINED</h3>
                    <s.WhyusBoxContent className="whyuscontent-box">
                        <p>From the disciplinary working system and holding consistency as the armour power, we bring the best in your business. The successful project is learned by utter self-discipline and consistency that you can expect from Webenix.</p>
                    </s.WhyusBoxContent>
                </s.WhyusBox>
                <s.WhyusBox className="whyusbox why_consistent">
                    <h3>CONSISTENT</h3>
                    <s.WhyusBoxContent className="whyuscontent-box">
                        <p>We have been successfully qualified to collaborate with tremendous companies to make sustainable decisions against the quality long-term maintainability work.</p>
                    </s.WhyusBoxContent>
                </s.WhyusBox>
                <s.WhyusBox className="whyusbox why_battletested">
                    <h3>BATTLE-TESTED</h3>
                    <s.WhyusBoxContent className="whyuscontent-box">
                        <p>The company has worked for the years and collaborated with top-notch agencies taking some difficult decisions and achieving what is best and sustainable.</p>
                    </s.WhyusBoxContent>
                </s.WhyusBox>
                <s.WhyusBox className="whyusbox why_responsible">
                    <h3>RESPONSIBLE</h3>
                     <s.WhyusBoxContent className="whyuscontent-box">
                        <p>Raising the bar of quality work, our team takes full responsibility for what they serve the companies. The project is led with the ownership and leadership.</p>
                    </s.WhyusBoxContent>
                </s.WhyusBox>
            </s.WhyusBoxWrapper>
            
        </Container>
    </s.WhyUsWrapper>
  );
};

export default WhyUs