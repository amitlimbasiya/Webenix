import React from 'react';
import { Container } from "react-bootstrap";
import * as s from "../../styles/components/SectionIntro/SectionIntro.style"; 
import parse from 'html-react-parser';

const SectionIntro = (props) => {
  return (
    
    <s.SectionIntroWrapper className={props.SectionIntroclassName}>
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>{props.IntroSubTitle}</span>
              <h2>{props.IntroMainTitle}</h2>
            </s.SectionTagline>
            <s.SectionHeader>{parse(props.IntroContent)}</s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro