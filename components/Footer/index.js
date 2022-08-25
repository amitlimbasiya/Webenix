import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import * as s from "../../styles/components/footer.style";
import skypeLogo from '../../public/images/skype-blue-icon.svg';
import gmailLogo from '../../public/images/gmail-icon.svg';
import phoneIcon from '../../public/images/phone-icon.svg';

const Footer = () => {
  return (
    <>
      <s.footer>
          <s.footerShape className='ftShape'></s.footerShape>
          <Container>
              <s.topRow className="topRow">
                  <s.heading className="ftHeading">WEBENIX Technologies Pvt. Ltd.</s.heading>
                  <s.heading className="ftAddress">
                      1308, The Spire 2, <br />Shital Park BRTS, 150ft Ring Road,
                      <br />Rajkot, Gujarat, India.
                  </s.heading>
              </s.topRow>
              <s.middelRow>
                  <s.midHeading>Get in touch</s.midHeading>
                  <s.contactInfo className="contactInfo">
                      <s.infoBox className="infoBox">
                          <s.iconBox className="iconBox">
                              <Image src={skypeLogo} alt="skype" layout='raw' />
                          </s.iconBox>
                          <s.infoDesc className='infoDesc'>
                              <s.spanPart>Skype</s.spanPart>
                              <Link href="skype:anand.patadiya?chat">
                                <a className='linked'>anand.patadiya</a>
                              </Link>
                          </s.infoDesc>
                      </s.infoBox>
                      <s.infoBox className="infoBox">
                          <s.iconBox className="icon-box">
                            <Image src={gmailLogo} alt="Gmail" layout='raw' />
                          </s.iconBox>
                          <s.infoDesc className='infoDesc'>
                              <s.spanPart>Email us</s.spanPart>
                              <Link href="mailto:info@webenix.net">
                                <a className='linked'>info@webenix.net</a>
                              </Link>
                          </s.infoDesc>
                      </s.infoBox>
                      <s.infoBox className="infoBox">
                          <s.iconBox className="icon-box">
                            <Image src={phoneIcon} alt="Phone" layout='raw' />
                          </s.iconBox>
                          <s.infoDesc className='infoDesc'>
                              <s.spanPart>Phone</s.spanPart>
                              <Link href="tel:+91 9773009954">
                                <a className='linked'>+91 9773009954</a>
                              </Link>
                          </s.infoDesc>
                      </s.infoBox>
                  </s.contactInfo>
              </s.middelRow>
              <s.endRow className="end-row">             
                <Link href="https://in.linkedin.com/company/webenixtechnologies">
                  <a target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>                  
                </Link>
                <Link href="https://www.facebook.com/webenixtechnologies/">
                  <a target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                </Link>
                <Link href="https://twitter.com/webenixpvtltd">
                  <a target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                </Link>
                <Link href="https://www.instagram.com/webenix_technologies/">
                  <a target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                </Link>
              </s.endRow>
          </Container>
        </s.footer>
        <s.copyRight>
            <Container>
                <s.copyText>&copy; Webenix Technologies Pvt. Ltd. - All rights reserved</s.copyText>
            </Container>
        </s.copyRight>
    </>
  );
};

export default Footer