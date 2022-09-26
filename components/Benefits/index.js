import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import * as s from "../../styles/components/Benefits.style";
import CostEffective from "../../public/images/f-Cost-Effective.svg";
import ExperiencedProfessionals from "../../public/images/f-Multiple-work-shifts.svg";
import ProjectCommunication from "../../public/images/f-support-maintanance-icon.svg";
import NonDisclosure from "../../public/images/f-Experienced Professionals.svg";
import HandpickTeam from "../../public/images/f-Non-Disclosure-Agreement.svg";
import WeeklyBillingModel from "../../public/images/f-Monthly billing product.svg";
import ZeroRecruitmentCost from "../../public/images/f-engagement-models-icon.svg";
import NoMoreCostsProject from "../../public/images/f-payment-gateway-integration-icon.svg";
import NoLockInPeriod from "../../public/images/f-No-Lock Period.svg";

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
                        <p>Outsourcing will save you from the liabilities like hiring the right resources and investing in the infrastructure. Cut down all the extra costs and simply <strong>Hire Graphic Designer</strong> on a budgeted hourly basis. </p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Multiple work shifts</s.BenefitTitle>
                        <Image src={ExperiencedProfessionals} alt="Logo" layout="raw"/>
                        <p>We work according to your timezone carrying three different shifts to match your timezone. Do not worry about the delay in the responses, we will always be here to assist. </p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Better communication</s.BenefitTitle>
                        <Image src={ProjectCommunication} alt="Logo" layout="raw"/>
                        <p>Directly talk to the expertise behind developing products for tracking the progress, getting in touch for product queries, easy assigning work and much more.</p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Experienced Professionals</s.BenefitTitle>
                        <Image src={NonDisclosure} alt="Logo" layout="raw"/>
                        <p>Do not worry about the quality of work, because Webenix provides <strong>Creative Graphic Designer</strong> who are experts in the field having 3+ years of experience. </p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Non-Disclosure Agreement</s.BenefitTitle>
                        <Image src={HandpickTeam} alt="Logo" layout="raw"/>
                        <p>The trust that you put in us will be bound by the legal NDA process with the assurance of security with your company. </p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Monthly billing product</s.BenefitTitle>
                        <Image src={WeeklyBillingModel} alt="Logo" layout="raw"/>
                        <p>We do not want complicated payment methods for our customers. Outsource our dedicated developers and pay monthly.</p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>Zero recruitment cost</s.BenefitTitle>
                        <Image src={ZeroRecruitmentCost} alt="Logo" layout="raw"/>
                        <p>Absolutely no recruitment or hidden charges while working with Webenix.</p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>No more costs per project</s.BenefitTitle>
                        <Image src={NoMoreCostsProject} alt="Logo" layout="raw"/>
                        <p>Hire us as your team members and leave the hustle of making payments per project.</p>
                    </s.BenefibtBox>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <s.BenefibtBox className="Benefitbox">
                        <s.BenefitTitle>No-Lock Period</s.BenefitTitle>
                        <Image src={NoLockInPeriod} alt="Logo" layout="raw"/>
                        <p>No limitations in the resources and services while working with Webenix. Use our services when required. </p>
                    </s.BenefibtBox>
                </Col>
            </Row>
        </Container>
    </s.BenefitWrapper>

  );
};

export default Benefits;