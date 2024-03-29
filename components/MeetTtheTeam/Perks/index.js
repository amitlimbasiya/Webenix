import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSkype, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import * as s from "../../../styles/components/MeetTheTeam/Perks.style";
import PassionIcon from "../../../public/images/f-passionate-icon.svg";
import TeamPlayerIcon from "../../../public/images/f-team-player-icon.svg";
import AuthenticityIcon from "../../../public/images/f-authenticity-icon.svg";
import HonestIcon from "../../../public/images/f-honest-icon.svg";
import TeamImg1 from "../../../public/images/meetTheTeam/anand-patadiya.png";
import TeamImg2 from "../../../public/images/meetTheTeam/rahul-bhalsod.png";
import Blog from "../../Blog";

const SectionIntro = () => {
  return (
    <>
      <s.Pillar className="noiseBg">
        <Container>
          <Row>
            <Col md={12}>
              <div className="topHeading mb-3 mb-lg-5">
                <h2>Real People Create Real Results</h2>
              </div>
              <div className="realPeopleContent">
                <p>
                  We are technocrats who live, eat, sleep and breathe EXCELLENCE
                  in technology – whether it is pixel-perfect design,
                  performance centric web or mobile app development, quality
                  assurance,cloud infrastructure or digital marketing services.
                </p>
                <p>
                  A solid team of organized strategic thinkers, brave creatives,
                  trailblazing web and mobile experts, unflappable trendsetters,
                  and good humored bold partners have joined together to form a
                  delightful network of intrapreneur empowering entrepreneurs.
                  We are here to create <strong>VALUE</strong> for you.
                </p>
                <p>
                  When we share <strong>“Your Business Need”</strong> with our
                  highly motivated team, their attitude is always the same –
                  “Bring it on”. We are trend setters in the technology service
                  industry and use the latest technology stack as well as rich
                  experience to deliver enterprise grade softwares to global
                  customers.
                </p>
                <h4>
                  We are Powered by <strong>Engineers.</strong> Empowered by{" "}
                  <strong>Technology.</strong>
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12}>
              <div className="topHeading">
                <span className="before-dash">Quick Look</span>
                <h2>Our Pillar</h2>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="team-section">
          <Container>
            <Row>
              <Col lg={6} md={12}>
                <div className="team-img me-lg-5 mb-5 mb-lg-0">
                  <Image src={TeamImg1} alt="Anand Patadiya" layout="raw" />
                </div>
              </Col>
              <Col lg={6} md={12}>
                <h2>Anand Patadiya</h2>
                <div className="position">
                  Director & Technical Head
                  <Link href="https://www.linkedin.com/in/anandpatadiya/">
                    <a target={"_blank"}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </Link>
                  <Link href="mailto:anand@webenix.net">
                    <a>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </Link>
                  <Link href="skype:anand.patadiya?chat">
                    <a>
                      <FontAwesomeIcon icon={faSkype} />
                    </a>
                  </Link>
                </div>
                <p>
                  Anand Patadiya started his career as a web developer and soon
                  his interest forced him to explore new avenues in the field
                  like sales. After actively working in the international sales
                  for three years, he joined a growing organization as a project
                  manager and made many structural level changes in the sales
                  and project management process, which helped the company to
                  grow to the next level. With seven years of experience in the
                  field at various positions, he founded Webenix technologies
                  private limited.
                </p>
                <p>
                  His experience in the development, sales and project
                  management helps to understand the client business requirement
                  and complex technical issues in the project management.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={12}>
                <h2>Rahul Bhalsod</h2>
                <div className="position">
                  Director & Creative Head
                  <Link href="https://www.linkedin.com/in/rahul-bhalsod-164b8a20/">
                    <a target={"_blank"}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </Link>
                  <Link href="mailto:rahul@webenix.net">
                    <a>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </Link>
                  <Link href="skype:rahulbhalsod?chat">
                    <a>
                      <FontAwesomeIcon icon={faSkype} />
                    </a>
                  </Link>
                </div>
                <p>
                  Rahul Bhalsod has great eye for details for branding and
                  design. He started his career in an organization as designer
                  and soon promoted to various positions ended up being VP of
                  design. During this tenure, he has worked with various clients
                  for the brand design and 3D architectural designs. After
                  spending seven successful years in the field, he founded
                  Webenix technologies private limited. He is the main force
                  behind the creative branding and web design for the client.
                </p>
                <p>
                  He sets the bar high with each project with his approach to
                  not compromising a bit with the quality of design. It also
                  helps clients to stand out from their competition.
                </p>
              </Col>
              <Col lg={6} md={12} className="order-first order-lg-last">
                <div className="team-img ms-lg-5 mb-5 ms-lg-0">
                  <Image src={TeamImg2} alt="Rahul Bhalsod" layout="raw" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </s.Pillar>
      <s.WeLookFor>
        <Container>
          <Row>
            <Col md={12}>
              <s.Tagline>
                <span className="before-dash">What do we look for?</span>
                <h2>What we thrive for in our Teammates</h2>
              </s.Tagline>
            </Col>
          </Row>
          <Row>
            <Col xl={3} lg={3} sm={6} className="text-center mb-5 mb-sm-5">
              <div className="px-xl-2 px-lg-2 px-md-3">
                <Image
                  src={PassionIcon}
                  alt="Passion Icon"
                  className="img-fluid"
                  layout="raw"
                />
                <h5>Passionate</h5>
                <p>
                  The work reflects differently when it is poured out of
                  passion. We are always up for candidates who are passionate
                  about their work, and career and who are always hungry to gain
                  the maximum knowledge.
                </p>
              </div>
            </Col>
            <Col xl={3} lg={3} sm={6} className="text-center mb-5 mb-sm-5">
              <div className="px-xl-2 px-lg-2 px-md-3">
                <Image
                  src={TeamPlayerIcon}
                  alt="Team Player Icon"
                  className="img-fluid"
                  layout="raw"
                />
                <h5>A real team player</h5>
                <p>
                  Working with the organization does not only mean fulfilling
                  the required hours but always looking up to the tasks that
                  have been assigned and contributing to the quality work. A
                  right team player can build up an easy work culture amongst
                  the employees.{" "}
                </p>
              </div>
            </Col>
            <Col xl={3} lg={3} sm={6} className="text-center mb-5 mb-sm-0">
              <div className="px-xl-2 px-lg-2 px-md-3">
                <Image
                  src={AuthenticityIcon}
                  alt="Authenticity Icon"
                  className="img-fluid"
                  layout="raw"
                />
                <h5>Maintains the authenticity</h5>
                <p>
                  The one who builds and accepts the varied culture to cultivate
                  the best out of it. Bringing out the best in what we do is the
                  authenticity that we urge to maintain throughout.
                </p>
              </div>
            </Col>
            <Col xl={3} lg={3} sm={6} className="text-center">
              <div className="px-xl-2 px-lg-2 px-md-3">
                <Image
                  src={HonestIcon}
                  alt="Honest Icon"
                  className="img-fluid"
                  layout="raw"
                />
                <h5>Honesty and Loyalty </h5>
                <p>
                  Transparency amongst the employees and the management is the
                  key factor to consider while building a successful
                  organization. To maintain self-integrity by being honest and
                  loyal to the company is what we seek in an employee.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </s.WeLookFor>
      <Blog />
    </>
  );
};

export default SectionIntro;
