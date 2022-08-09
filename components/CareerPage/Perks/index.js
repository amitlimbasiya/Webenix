import React from 'react';
import Image from "next/image"; 
import Link from "next/link";
import { Accordion, Container, Row, Col, Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import * as s from "../../../styles/components/CareerPage/Perks.style"; 
import PassionIcon from "../../../public/images/career/passion-icon.svg";  
import TeamPlayerIcon from "../../../public/images/career/team-player-icon.svg";  
import AuthenticityIcon from "../../../public/images/career/authenticity-icon.svg";  
import HonestIcon from "../../../public/images/career/honest-icon.svg";  
import PHPIcon from "../../../public/images/php-icon.svg";  
import FEDIcon from "../../../public/images/front-end-development-icon.svg";
import NodejsIcon from "../../../public/images/node-JS-icon.svg";
import ReactjsIcon from "../../../public/images/react-js-logo.svg";  

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Apply Now (QA)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
          <Row className="mb-3">
            <Col md={6} controlId="formName" className='mb-3 mb-md-0'>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="John Doe" />
            </Col>
            <Col md={6} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="johnDoe@gmail.com" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6} controlId="formPhoneNumber" className='mb-3 mb-md-0'>
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control type="tel" placeholder="123 465 7890" />
            </Col>
            <Col md={6} controlId="formCompany">
              <Form.Label>Company:</Form.Label>
              <Form.Control placeholder="Lorem Ipsam" />
            </Col>
          </Row>

          <Col className="mb-3" controlId="formCompany">
            <Form.Label>Your message:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Your message hear"
            />
            
          </Col>
          <Row className="mb-3">
            <Col controlId="formGridCity">
              <Form.Label htmlFor="inlineFormInputGroupUsername">
                Resume:
              </Form.Label>
              <Form.Control type="file" />
            </Col>
          </Row>

          <Button className="btn-default btn-arrow mt-2" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const SectionIntro = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <s.SectionIntroWrapper className="introuction-section">
        <Container>
            <Row className="mb-3 mb-sm-5">
              <Col md={12}>
                <s.SectionTagline>
                  <span className='before-dash'>Take a look at</span>
                  <h2>Make the best out of your career days with Webenix</h2>
                </s.SectionTagline>
                <s.SectionHeader>
                  <p>You are at the right business organization if you want to grow and acknowledge your efforts. No matter whether you are an experienced geek or an intern peer, we will be right here for you to shape your career in the best ways possible. </p>
                </s.SectionHeader>
              </Col>
            </Row>
        </Container>
        <s.LeftRightPart className="leftRightPart">
          <div className="right-slant">
            <div className="anmtn-element in-view">
              <div className="animated-cuts-right">
                <div className="right-bg"></div>
              </div>
            </div>
          </div>
          <Container>
              <Row className="align-items-center">
                <Col md={7} lg={6}>
                  <div className="perk-plate">
                    <div className="perk-title">
                      <div className="perk-num perk-one">
                        <h6>01.</h6>
                      </div>
                      <div className="perk-tit">End tasks, not learning</div>
                    </div>
                    <div className="perk-desc">Learning and seeking is the main motto for our organization, where we ensure to provide the best resources and support at 3x speed with an open environment of always seeking knowledge.</div>
                  </div>

                  <div className="perk-plate">
                    <div className="perk-title">
                      <div className="perk-num perk-two">
                        <h6>02.</h6>
                      </div>
                      <div className="perk-tit">Work for the enterprise organizations</div>
                    </div>
                    <div className="perk-desc">We help you to build the best portfolio by taking up high-value projects along with gaining knowledge.</div>
                  </div>
                </Col>
                <Col md={5} lg={6} className="text-center">
                  <div className="rellimage neverstoplearning"></div>
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
              <Row className="align-items-center">
                <Col md={5} lg={6} className="text-center order-last order-md-first">
                  <div className="rellimage neverstoplearning ms-0"></div>
                </Col>
                <Col md={7} lg={6} className="order-first order-md-last">
                  <div className="perk-plate">
                    <div className="perk-title">
                      <div className="perk-num perk-one">
                        <h6>03.</h6>
                      </div>
                      <div className="perk-tit">Standard flexibility </div>
                    </div>
                    <div className="perk-desc">We believe in the flexibility mode of working to emboss the best efforts out from the team where you get to work with zero pressure allowance.</div>
                  </div>

                  <div className="perk-plate">
                    <div className="perk-title">
                      <div className="perk-num perk-three">
                        <h6>04.</h6>
                      </div>
                      <div className="perk-tit">Seek, gain and outgrow your knowledge with us </div>
                    </div>
                    <div className="perk-desc">We want our teammates to outgrow their journey with us by relishing the business trips globally and knowing the power of diversity and work culture.</div>
                  </div>
                </Col>
              </Row>
          </Container>
        </s.LeftRightPart>
    </s.SectionIntroWrapper>
    <s.WeLookFor>
      <Container>
          <Row>
            <Col md={12}>
              <s.Tagline>
                <span className='before-dash'>What do we look for?</span>
                <h2>What we thrive for in our Teammates</h2>
              </s.Tagline>
            </Col>
          </Row>
          <Row>
            <Col xl={3} lg={3} sm={6} className="text-center mb-5 mb-sm-5">
              <div className='px-xl-2 px-lg-2 px-md-3'>
                <Image src={PassionIcon} alt="Passion Icon" className='img-fluid' layout="raw"/>
                <h5>Passionate</h5>
                <p>The work reflects differently when it is poured out of passion. We are always up for candidates who are passionate about their work, and career and who are always hungry to gain the maximum knowledge.</p>
              </div>
            </Col>
            <Col xl={3} lg={3} sm={6} className="text-center mb-5 mb-sm-5">
              <div className='px-xl-2 px-lg-2 px-md-3'>
                <Image src={TeamPlayerIcon} alt="Team Player Icon" className='img-fluid' layout="raw"/>
                <h5>A real team player</h5>
                <p>Working with the organization does not only mean fulfilling the required hours but always looking up to the tasks that have been assigned and contributing to the quality work. A right team player can build up an easy work culture amongst the employees. </p>
              </div>
            </Col>
            <Col xl={3} lg={3} sm={6} className="text-center mb-5 mb-sm-0">
              <div className='px-xl-2 px-lg-2 px-md-3'>
                <Image src={AuthenticityIcon} alt="Authenticity Icon" className='img-fluid' layout="raw"/>
                <h5>Maintains the authenticity</h5>
                <p>The one who builds and accepts the varied culture to cultivate the best out of it. Bringing out the best in what we do is the authenticity that we urge to maintain throughout.</p>
              </div>
            </Col>
            <Col xl={3} lg={3} sm={6} className="text-center">
              <div className='px-xl-2 px-lg-2 px-md-3'>
                <Image src={HonestIcon} alt="Honest Icon" className='img-fluid' layout="raw"/>
                <h5>Honesty and Loyalty </h5>
                <p>Transparency amongst the employees and the management is the key factor to consider while building a successful organization. To maintain self-integrity by being honest and loyal to the company is what we seek in an employee.</p>
              </div>
            </Col>
          </Row>
      </Container>
    </s.WeLookFor>
    <s.JobPart>
        <Container>
            <Row>
              <Col md={12}>
                <s.Tagline>
                  <span className='before-dash'>Take a look at</span>
                  <h2>Current Openings...</h2>
                </s.Tagline>
              </Col>
            </Row>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className='cardHeader'>
                        <div className='headIcon'>
                          <Image src={PHPIcon} alt="PHP Icon" className='img-fluid' layout="raw"/>
                        </div>
                        <div className='positionDesc'>
                          <div className='headTitle'>PHP Developers</div>
                          <ul className='btmBar'>
                            <li><span>Experience:</span> 1-4 years</li>
                            <li><span>No. of Openings:</span> 2-3</li>
                            <li><span>Qualifications:</span> B.E / B.Tech</li>
                          </ul>
                        </div>
                        <div className='buttonPart'>
                          <Link href="javascript:;">
                            <a onClick={() => setModalShow(true)} className='btn-default btn-arrow'>Apply Now</a>
                          </Link>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                          <li>Strong knowledge of PHP Web Frameworks (Yii/Yii2, Zend, Laravel, CI)</li>
                          <li>Integrated payment gateways and good with APIs</li>
                          <li>Demonstrable knowledge of web technologies (HTML, CSS, Javascript, Ajax)</li>
                          <li>Experience in common third party APIs (Google, Facebook, eBay etc.)</li>
                          <li>Passion for best design and coding practices</li>
                          <li>Ability to take up R&#38;D activities and resolve issues</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div className='cardHeader'>
                        <div className='headIcon'>
                          <Image src={FEDIcon} alt="Front End Developer Icon" className='img-fluid' layout="raw"/>
                        </div>
                        <div className='positionDesc'>
                          <div className='headTitle'>Front End Developer</div>
                          <ul className='btmBar'>
                            <li><span>Experience:</span> 1-4 years</li>
                            <li><span>No. of Openings:</span> 2-3</li>
                            <li><span>Qualifications:</span> B.E / B.Tech</li>
                          </ul>
                        </div>
                        <div className='buttonPart'>
                          <Link href="javascript:;">
                            <a onClick={() => setModalShow(true)} className='btn-default btn-arrow'>Apply Now</a>
                          </Link>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                          <li>Strong knowledge of PHP Web Frameworks (Yii/Yii2, Zend, Laravel, CI)</li>
                          <li>Integrated payment gateways and good with APIs</li>
                          <li>Demonstrable knowledge of web technologies (HTML, CSS, Javascript, Ajax)</li>
                          <li>Experience in common third party APIs (Google, Facebook, eBay etc.)</li>
                          <li>Passion for best design and coding practices</li>
                          <li>Ability to take up R&#38;D activities and resolve issues</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <div className='cardHeader'>
                        <div className='headIcon'>
                          <Image src={ReactjsIcon} alt="React js Developer Icon" className='img-fluid' layout="raw"/>
                        </div>
                        <div className='positionDesc'>
                          <div className='headTitle'>React js Developer</div>
                          <ul className='btmBar'>
                            <li><span>Experience:</span> 1-4 years</li>
                            <li><span>No. of Openings:</span> 2-3</li>
                            <li><span>Qualifications:</span> B.E / B.Tech</li>
                          </ul>
                        </div>
                        <div className='buttonPart'>
                          <Link href="javascript:;">
                            <a onClick={() => setModalShow(true)} className='btn-default btn-arrow'>Apply Now</a>
                          </Link>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                          <li>Strong knowledge of PHP Web Frameworks (Yii/Yii2, Zend, Laravel, CI)</li>
                          <li>Integrated payment gateways and good with APIs</li>
                          <li>Demonstrable knowledge of web technologies (HTML, CSS, Javascript, Ajax)</li>
                          <li>Experience in common third party APIs (Google, Facebook, eBay etc.)</li>
                          <li>Passion for best design and coding practices</li>
                          <li>Ability to take up R&#38;D activities and resolve issues</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <div className='cardHeader'>
                        <div className='headIcon'>
                          <Image src={NodejsIcon} alt="Node Js Icon" className='img-fluid' layout="raw"/>
                        </div>
                        <div className='positionDesc'>
                          <div className='headTitle'>Node Js Developer</div>
                          <ul className='btmBar'>
                            <li><span>Experience:</span> 1-4 years</li>
                            <li><span>No. of Openings:</span> 2-3</li>
                            <li><span>Qualifications:</span> B.E / B.Tech</li>
                          </ul>
                        </div>
                        <div className='buttonPart'>
                          <Link href="javascript:;">
                            <a onClick={() => setModalShow(true)} className='btn-default btn-arrow'>Apply Now</a>
                          </Link>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                          <li>Strong knowledge of PHP Web Frameworks (Yii/Yii2, Zend, Laravel, CI)</li>
                          <li>Integrated payment gateways and good with APIs</li>
                          <li>Demonstrable knowledge of web technologies (HTML, CSS, Javascript, Ajax)</li>
                          <li>Experience in common third party APIs (Google, Facebook, eBay etc.)</li>
                          <li>Passion for best design and coding practices</li>
                          <li>Ability to take up R&#38;D activities and resolve issues</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    </s.JobPart>
    <s.JobCTA>
      <Container>
        <Row>
          <Col md={12}>
            <s.Tagline>
              <span className='before-dash'>You are in the right hands</span>
              <h2>Cherish and embrace your career days by working with Webenix for better opportunities and higher achievements.</h2>
            </s.Tagline>
          </Col>
        </Row>
        <s.ctaSection className='ctaBox'>
            <s.ctaInner className='ctaBoxInner'>
                <s.leftPart>
                    <s.bigHeading>Get in touch with</s.bigHeading>
                    <s.midHeading>Talent Acquisition</s.midHeading>
                    <s.smHeading>Team</s.smHeading>
                </s.leftPart>
                <s.rightPart>
                    <s.ctaBtn className='ctaBtn'>
                        <Link href='/'>
                            <a className='btn-default'>hr@webenix.net</a>
                        </Link>
                    </s.ctaBtn>
                </s.rightPart>
            </s.ctaInner>
        </s.ctaSection>
      </Container>
    </s.JobCTA>
    </>
  );
};

export default SectionIntro