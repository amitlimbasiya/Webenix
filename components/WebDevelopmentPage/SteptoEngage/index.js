import React from 'react';
import { Container, Tabs,Tab } from 'react-bootstrap';
import * as s from "../../../styles/components/WebDevelopmentPage/SteptoEngage.style";

const SteptoEngage = () => {
  return (
    <s.SteptoEngageWrapper>
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Take a look at</span>
              <h2>Steps to Engage</h2>       
            </s.SectionTagline>
        </Container>

        <s.SteptoEngageSection className="steptoengage-section">
            <Container>
                <s.SteptoEngageBlock className='steptoengageblock'>
                    <s.SteptoEngageBox className='steptoengagebox'>
                        <s.NumberShapeBox className="number-shapebox"><span>1</span></s.NumberShapeBox>
                        <p>Post your project requirement</p>
                    </s.SteptoEngageBox>
                    <s.SteptoEngageBox className='steptoengagebox'>
                        <s.NumberShapeBox className="number-shapebox"><span>2</span></s.NumberShapeBox>
                        <p>Discuss project details with our technical analysts</p>
                    </s.SteptoEngageBox>
                    <s.SteptoEngageBox className='steptoengagebox'>
                        <s.NumberShapeBox className="number-shapebox"><span>3</span></s.NumberShapeBox>
                        <p>Select engagement model and timeline</p>
                    </s.SteptoEngageBox>
                    <s.SteptoEngageBox className='steptoengagebox'>
                        <s.NumberShapeBox className="number-shapebox"><span>4</span></s.NumberShapeBox>
                        <p>And we start working</p>
                    </s.SteptoEngageBox>
                </s.SteptoEngageBlock>        
            </Container>        
        </s.SteptoEngageSection>
    </s.SteptoEngageWrapper>
  );
};

export default SteptoEngage