import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../styles/components/InfrastructureOffice/InfrastructureOffice.style";
import parse from 'html-react-parser';
 
const InfrastructureOffice = (props) => {
  return (
    <> 
     <s.SectionIntroWrapper className="introuction-section pb-0">
          <s.LeftRightPart className="leftRightPart">
            <div className="right-slant">
              <div className="anmtn-element in-view">
                <div className="animated-cuts-right">
                  <div className="right-bg"></div>
                </div>
              </div>
            </div>
            <Container>
                <Row className='align-items-center'>
                  <Col md={7} lg={6}>
                    <s.SectionTagline className='mb-4 mb-lg-5'>
                      <span className='before-dash'>{props.sectionSubTitle}</span>
                      <h2>{props.sectionTitle}</h2>
                    </s.SectionTagline>
                    <div className='boxesPart'>
                    {props.InfoBoxTitle01 &&
                      <div className="multiple-infraplates colsTwoPart">
                        {props.InfoBoxTitle01 && 
                          <div className="infraplates ROSIEBG mt-0">
                            <div>
                              <p>{props.InfoBoxTitle01}</p>
                              <h6>{props.InfoBoxValue01}</h6>
                            </div>
                          </div>
                        }
                          {props.InfoBoxTitle02 && 
                            <div className="infraplates LAVENDERTONICBG mt-0">
                              <div>
                                <p>{props.InfoBoxTitle02}</p>
                                <h6>{props.InfoBoxValue02}</h6>
                              </div>
                            </div>
                          }
                          {props.InfoBoxTitle03 && 
                            <div className="infraplates NORTHRENDBG mt-0">
                            <div>
                              <p>{props.InfoBoxTitle03}</p>
                              <h6>{props.InfoBoxValue03}</h6>
                            </div>
                          </div>
                          }
                        </div>
                      }
                        <div className='infraplates MINIONYELLOWBG'>
                          <ul>{parse(props.Listpoints)}</ul>
                        </div>
                    </div>
                  </Col>
                  <Col md={5} lg={6} className="text-center">
                    <div className={props.ImageClassName}></div>
                  </Col>
                </Row>
            </Container>
          </s.LeftRightPart>

          <s.LeftRightPart className="leftRightPart">
            <div className="left-slant">
              <div className="anmtn-element in-view">
                <div className="animated-cuts-right">
                  <div className="right-bg"></div>
                </div>
              </div>
            </div>
            <Container>
                <Row className='align-items-center'>
                  <Col md={5} lg={6} className="text-center">
                    <div className={props.RightImageClassName}></div>
                  </Col>
                  <Col md={7} lg={6}>
                    <s.SectionTagline>
                      <span className='before-dash'>{props.RightsectionSubTitle}</span>
                      <h2>{props.RightsectionTitle}</h2>
                    </s.SectionTagline>
                    <div className='boxesPart'>
                      <div className="multiple-infraplates">
                          <div className="infraplates MINIONYELLOWBG">
                            <div>
                            <ul>{parse(props.RightListpoints)}</ul>
                            </div>
                          </div>
                        </div>
                    </div>
                  </Col>
                </Row>
            </Container>
          </s.LeftRightPart>
      </s.SectionIntroWrapper>
    </>
  );
};

export default InfrastructureOffice