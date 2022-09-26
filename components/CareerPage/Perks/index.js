import React from 'react';
import Image from "next/image"; 
import Link from "next/link";
import { Accordion, Container, Row, Col, Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import * as s from "../../../styles/components/CareerPage/Perks.style"; 
import PassionIcon from "../../../public/images/f-passionate-icon.svg";  
import TeamPlayerIcon from "../../../public/images/f-team-player-icon.svg";  
import AuthenticityIcon from "../../../public/images/f-authenticity-icon.svg";  
import HonestIcon from "../../../public/images/f-honest-icon.svg";  
import wordpressDevIcon from '../../../public/images/f-wordpress-icon.svg';
import careerIcon from '../../../public/images/f-career-icon.svg';

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
            <Col md={6} controlid="formName" className='mb-3 mb-md-0'>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="John Doe" />
            </Col>
            <Col md={6} controlid="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="johnDoe@gmail.com" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6} controlid="formPhoneNumber" className='mb-3 mb-md-0'>
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control type="tel" placeholder="123 465 7890" />
            </Col>
            <Col md={6} controlid="formCompany">
              <Form.Label>Company:</Form.Label>
              <Form.Control placeholder="Lorem Ipsam" />
            </Col>
          </Row>

          <Col className="mb-3" controlid="formCompany">
            <Form.Label>Your message:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Your message hear"
            />
            
          </Col>
          <Row className="mb-3">
            <Col controlid="formGridCity">
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
                            <Image src={wordpressDevIcon} alt="Wordpress Developer Icon" className='img-fluid' layout="raw"/>
                          </div>
                          <div className='positionDesc'>
                            <div className='headTitle'>Wordpress Developer</div>
                            <ul className='btmBar'>
                              <li><span>Experience:</span> Minimum 1 year</li>
                              <li><span>No. of Openings:</span> 1</li>
                              <li><span>Qualifications:</span> B.E / B.Tech</li>
                            </ul>
                          </div>
                          <div className='buttonPart'>
                            <Link href="#">
                              <a onClick={() => setModalShow(true)} className='btn-default btn-arrow'>Apply Now</a>
                            </Link>
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                          <ul>
                            <li>Minimum 1 year of experience developing websites using WordPress.</li>
                            <li>WordPress plugin development / theme development.</li>
                            <li>Setup of WordPress options, plugin installation and configuration.</li>
                            <li>Good knowledge for database admin (MySQL) via PHPMyAdmin.</li>
                            <li>Strong knowledge and proficiency in core PHP programming, MySQL with OOPS concepts.</li>
                            <li>Experience working on AJAX, JavaScript & jQuery.</li>
                            <li>Scope, analyze, design, test, debug and implement complex applications.</li>
                            <li>Ability to work independently with minimal guidance.</li>
                            <li>Research and remain informed of new technology and development tools.</li>
                            <li>A great attitude.</li>
                            <li>Proficiency in English Language is MUST.</li>
                          </ul>
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className='cardHeader'>
                          <div className='headIcon'>
                            <Image src={careerIcon} alt="Business Development Executive Icon" className='img-fluid' layout="raw"/>
                          </div>
                          <div className='positionDesc'>
                            <div className='headTitle'>Business Development Executive</div>
                            <ul className='btmBar'>
                              <li><span>Experience:</span> 1 years</li>
                              <li><span>No. of Openings:</span> 2-3</li>
                              <li><span>Qualifications:</span> MBA, MCA, BE in IT/Computer</li>
                            </ul>
                          </div>
                          <div className='buttonPart'>
                            <Link href="#">
                              <a onClick={() => setModalShow(true)} className='btn-default btn-arrow'>Apply Now</a>
                            </Link>
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                          <p className='mb-3'>We are looking for an experienced individual for the post of Business Development Executive with experience in international sales in the IT company! As a Business Development Executive, you will be responsible for finding new clients and increasing sales.</p>
                          <ul>
                            <li>Effective communication(verbal and written) with English fluency.</li>
                            <li>Experience in the IT service sector for International sales. </li>
                            <li>Generate leads through Different channels like the internet, social media, bidding portals etc.</li>
                            <li>Experience working with different bidding portals.</li>
                            <li>Understand client requirements and could provide work estimation, Proposal, Cost Estimates, and Timeline Estimation accordingly.</li>
                            <li>Experience in creating project Scope/Proposal/RFP documents.</li>
                            <li>Can Individually coordinate with clients and help them solve problems.</li>
                            <li>Convert prospects into consumers and close the deals.</li>
                            <li>Build a good network with existing clients to generate repeat business.</li>
                            <li>Provide Monthly work report to the Management.</li>
                            <li>Remaining in tune with trends to ensure that our offerings remain relevant.</li>
                          </ul>
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
          </Container>
        </s.JobPart>
        <s.LeftRightPart className="leftRightPart">
          <Container>
              <Row className='mb-5 pb-3'>
                <Col md={12}>
                  <s.SectionTagline>
                    <span className='before-dash'>Take a look at</span>
                    <h2>Make the best out of your career days with Webenix</h2>
                  </s.SectionTagline>
                  <s.SectionHeader>
                    <p><strong>Webenix Technologies</strong> is the right business organization if you want to grow and acknowledge your efforts. No matter whether you are an experienced geek or an intern peer, we will be right here for you to shape your career in the best ways possible. </p>
                  </s.SectionHeader>
                </Col>
              </Row>
          </Container>
          <div className="right-slant">
            <div className="anmtn-element in-view">
              <div className="animated-cuts-right">
                <div className="right-bg"></div>
              </div>
            </div>
          </div>
          <Container>
              <Row className="align-items-center left-perk">
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
              <Row className="align-items-center right-perk">
                <Col md={5} lg={6} className="text-center order-last order-md-first">
                  <div className="rellimage neverstoplearning carrer2 ms-0"></div>
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
    <s.JobCTA>
      <Container>
        <Row>
          <Col md={12}>
            <s.Tagline>
              <span className='before-dash'>You are in the right hands</span>
              <h2>Cherish and embrace your career days by looking for better Jobs Opportunity in Webenix</h2>
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
                        <Link href='mailto:hr@webenix.net'>
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