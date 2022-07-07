import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/AboutPage/MoreResource.style"; 

const MoreResource = () => {
  return (
    <s.MoreResourceWrapper className='more-resource-section'>
        <Container>
            <s.MoreResourceBlock>
                <s.DobuleSizeTitle>
                    <h3>MORE</h3>
                </s.DobuleSizeTitle>
                <s.MoreResourceContent>
                    <h4 className='light-green'>RESOURCES.</h4>
                    <h4 className='dark-green'>SKILLSETS.</h4>
                    <h4 className='regular-green'>PROFIT.</h4>
                </s.MoreResourceContent>
            </s.MoreResourceBlock>
        </Container> 

    </s.MoreResourceWrapper>
  );
};

export default MoreResource