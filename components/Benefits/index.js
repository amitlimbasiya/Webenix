import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import * as s from "../../styles/components/Benefits.style";
import CostEffective from "../../public/images/cost-icon.svg";
import ExperiencedProfessionals from "../../public/images/experienced-professionals-icon.svg";
import ProjectCommunication from "../../public/images/project-communication-icon.svg";
import NonDisclosure from "../../public/images/Non-Disclosure-Agreement-icon.svg";
import HandpickTeam from "../../public/images/handpick-your-team-member-icon.svg";
import WeeklyBillingModel from "../../public/images/weekly-billing-model-icon.svg";
import ZeroRecruitmentCost from "../../public/images/zero-recruitment-cost-icon.svg";
import NoMoreCostsProject from "../../public/images/no-more-costs-per-project-icon.svg";
import NoLockInPeriod from "../../public/images/no-lock-In-period-icon.svg";

const Benefits = () => {
  return (
    <s.BenefitWrapper className='noiseBg'>
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Take a look at</span>
              <h2>Why <span className='textGreen'>Webenix</span></h2>
            </s.SectionTagline>
            <Row>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Cost Effective</s.BenefitTitle>
                        <Image src={CostEffective} alt="Logo" layout="raw"/>
                        <p>Choosing Webenix and hiring dedicated resource(s) will be helping you to reduce the employee payroll budget, infrastructure cost as well as offers a very reasonable hourly cost.</p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Experienced Professionals</s.BenefitTitle>
                        <Image src={ExperiencedProfessionals} alt="Logo" layout="raw"/>
                        <p>At Webenix, you will get experienced professional with 2 to 5 plus years of experience in their respective field.</p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Project Communication</s.BenefitTitle>
                        <Image src={ProjectCommunication} alt="Logo" layout="raw"/>
                        <p>You will be directly interacting with team member and will be able to check each small and big progress in the work. So you will have complete update on the work every day and will be able to manage/assign the work accordingly.</p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Non-Disclosure Agreement</s.BenefitTitle>
                        <Image src={NonDisclosure} alt="Logo" layout="raw"/>
                        <p>Choosing Webenix and hiring dedicated resource(s) will be helping you to reduce the employee payroll budget, infrastructure cost as well as offers a very reasonable hourly cost.</p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Handpick Your Team Member</s.BenefitTitle>
                        <Image src={HandpickTeam} alt="Logo" layout="raw"/>
                        <p>At Webenix, you will get experienced professional with 2 to 5 plus years of experience in their respective field.</p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Weekly Billing Model</s.BenefitTitle>
                        <Image src={WeeklyBillingModel} alt="Logo" layout="raw"/>
                        <p>You will be directly interacting with team member and will be able to check each small and big progress in the work. So you will have complete update on the work every day and will be able to manage/assign the work accordingly.</p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Zero Recruitment Cost</s.BenefitTitle>
                        <Image src={ZeroRecruitmentCost} alt="Logo" layout="raw"/>
                        <p>Using Webenix, Your initial recruitment cost and efforts will become zero.</p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>No More Costs Per Project</s.BenefitTitle>
                        <Image src={NoMoreCostsProject} alt="Logo" layout="raw"/>
                        <p>Hiring a dedicated resource, you will no longer be required to pay per project as your team member(s) will be working on the entire project you have.</p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>No Lock-In Period</s.BenefitTitle>
                        <Image src={NoLockInPeriod} alt="Logo" layout="raw"/>
                        <p>We offer resources with no lock in period. So you can use the services as and when required.</p>
                    </s.BenefibtBox>
                </Col>
            </Row>
        </Container>
    </s.BenefitWrapper>

  );
};

export default Benefits;