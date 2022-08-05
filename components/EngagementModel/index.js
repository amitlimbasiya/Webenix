import React from 'react';
import { Container } from "react-bootstrap";
import Image from 'next/image';
import * as s from "../../styles/components/EngagementModel/EngagementModel.style";
import parse from 'html-react-parser';
const EngagementModel = (props) => {
  return (
    <>
      <s.EngagementModelWrapper>        
        <s.EngagementModelSection> 
          <Container>
            <s.EngagementModelRow className={props.EngagementClass}>
                <s.EngagementModelImgBox className='engagementmodel-imgbox'>
                  <Image src={props.EngagementModelImage} alt="Engagement Model" height={props.EngagementModelImageHeight} width={props.EngagementModelImageWidth}/>
                </s.EngagementModelImgBox>
                <s.EngagementModelContentBox className='engagementmodel-contentbox'>
                  <s.EngagementModelContentMainTitle>
                    <h4>{props.EngagementMainTitle}</h4>
                    <Image src={props.EngagementModelIcon} alt="Engagement Model" height={props.EngagementModelIconHeight} width={props.EngagementModelIconWidth}/>
                  </s.EngagementModelContentMainTitle>
                  <s.EngagementModelContentInnerBox>
                    <h3>{props.EngagementModelName}</h3>
                    {parse(props.EngagementContent)}
                  </s.EngagementModelContentInnerBox>
              </s.EngagementModelContentBox>
            </s.EngagementModelRow>
        </Container>
        </s.EngagementModelSection>
      </s.EngagementModelWrapper>
    </>
  )
}

export default EngagementModel