import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../styles/components/ServiceFeatureBox/ServiceFeatureBox.style";
import parse from 'html-react-parser';

const ServiceFeatureBox = (props) => {
  return (
    <s.ServiceFeatureBox>
        <Container>
            <s.SectionTagline>
                <span className="before-dash">{props.sectionTagLine}</span>
                <h2>{props.sectionMainTitle}</h2>
            </s.SectionTagline>

            <s.ServiceBox className="serviceBoxes">
                <Row>
                    {props.ServiceValue?.map((value) => {
                        return(
                            <Col lg={3} sm={6} className="itemBoxes" key={value}>
                                <s.boxPart className={value?.ServiceBoxClass}>
                                    <s.partItem className="imgPart">
                                        <Image src={value?.ServiceIcon} alt="Frontend Development Icon" height={value?.ServiceIconHeight} width={value?.ServiceIconWidth}/>
                                        <s.iconOverlay className="overlayImg">
                                            {parse(value?.ServiceSvgShape)}
                                        </s.iconOverlay>
                                    </s.partItem>
                                    <s.partItem className="textPart"><s.boxHeading>{value?.ServiceName}</s.boxHeading></s.partItem>
                                </s.boxPart>
                            </Col>
                        )
                    })}
                </Row>
             </s.ServiceBox>
        </Container>
    </s.ServiceFeatureBox>
  );
};

export default ServiceFeatureBox