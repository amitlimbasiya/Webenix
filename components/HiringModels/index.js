import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as s from "../../styles/components/HiringModels.style";
import Image from "next/image"; 
import hourlyIcon from "../../public/images/f-Hourly.svg";  
import partTime from "../../public/images/f-Part-Time.svg";  
import fullTimeIcon from "../../public/images/f-Full-Time.svg";  

const HiringModels = () => {
  return (
    <s.HiringModelsWrapper className='noiseBg'>
        <Container className='pb-0'>
            <s.SectionTagline>
              <span className='before-dash'>Take a look at</span>
              <h2>Our Hiring Models</h2>
            </s.SectionTagline>
        </Container>
        <s.HiringBoxWrapper>
            <Container>
                <Row>
                    <Col md={4} sm={12} className="hiringbox">
                        <s.HiremodelBox>
                            <s.HiremodelBoxTitle>Full Time</s.HiremodelBoxTitle>
                            <s.HiremodelInnerBox>
                                <s.HiremodelContentBox>
                                    <p>Hours Per Day</p>
                                    <span className="green-text">8</span> hrs/day
                                </s.HiremodelContentBox>
                                <s.HiremodelIconBox>
                                    <Image src={fullTimeIcon} alt="Full Time Icon" className='img-fluid' layout="raw"/>
                                </s.HiremodelIconBox>
                            </s.HiremodelInnerBox>
                        </s.HiremodelBox>
                    </Col>
                    <Col md={4} sm={12} className="hiringbox">
                        <s.HiremodelBox>
                            <s.HiremodelBoxTitle>Part Time</s.HiremodelBoxTitle>
                            <s.HiremodelInnerBox>
                                <s.HiremodelContentBox>
                                    <p>Hours Per Day</p>
                                    <span className="green-text">4</span> hrs/day
                                </s.HiremodelContentBox>
                                <s.HiremodelIconBox>
                                    <Image src={partTime} alt="Part Time Icon" className='img-fluid' layout="raw"/>
                                </s.HiremodelIconBox>
                            </s.HiremodelInnerBox>
                        </s.HiremodelBox>
                    </Col>
                    <Col md={4} sm={12} className="hiringbox">
                        <s.HiremodelBox>
                        <s.HiremodelBoxTitle>Hourly</s.HiremodelBoxTitle>
                            <s.HiremodelInnerBox>
                                <s.HiremodelContentBox>
                                    <p>Hours Per Day</p>
                                    <span className="green-text">Flexible </span> hrs/day
                                </s.HiremodelContentBox>
                                <s.HiremodelIconBox>
                                    <Image src={hourlyIcon} alt="Hourly Icon" className='img-fluid' layout="raw"/>
                                </s.HiremodelIconBox>
                            </s.HiremodelInnerBox>
                        </s.HiremodelBox>
                    </Col>
                </Row>
            </Container>
        </s.HiringBoxWrapper>
    </s.HiringModelsWrapper>
  );
};

export default HiringModels;