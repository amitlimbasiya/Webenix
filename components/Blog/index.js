import React from 'react';
import { useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image';
import router from "../../utils/router";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import * as s from "../../styles/components/blog.style";
import WaysUEISABSER  from '../../public/images/blogs/The-ways-to-utilize-an-effective-outsourcing-strategy-and-achieve-business-success-by-eliminating-the-risks.jpg';
import TopResonsOffshireDevelopment  from '../../public/images/blogs/Top-Reasons-to-consider-offshore-development.jpg'; 
import ComparisonBetweenFixedPrice  from '../../public/images/blogs/A-comparison-between-fixed-price-and-time-and-material-contract.jpg';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import validator from 'validator';
import Recaptcha from 'react-google-recaptcha';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
const RECAPTCHA_KEY = '6LfNM8shAAAAAGQP99s9wq-xAhNjOCVTZxKCfYLa';

const Blog = () => {
    const { control, register, setValue, handleSubmit, watch, errors, reset } = useForm();
    const recaptchaRef = React.createRef();

    const [fname, setcontact_fname] = useState('');
    const [url, setcontact_url] = useState('');
    const [email, setcontact_email] = useState('');
    const [phone, setcontact_phone] = useState('');
    const [textarea, setcontact_textarea] = useState('');
    const [statusMessage, setStatusMessage] = useState("");
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [recaptcha, setcontact_recaptcha] = useState('');
    const [recaptchaError, recaptchaerrorFunction] = useState('display:none;');
    const handleChange = event => {
        setcontact_fname(event.target.value);
    };
    const handleChange1 = event => {
        setcontact_url(event.target.value);
    };
    const handleChange2 = event => {
        setcontact_email(event.target.value);
    };
    const handleChange3 = event => {
        // setcontact_phone(event.target.value);
    };
    const handleChange4 = event => {
        setcontact_textarea(event.target.value);
    };

    const handleChange5 = event => {
        setcontact_recaptcha(event.target.value);
    };

    // state
    const [isCaptch, setIsCaptch] = useState(false);

    // Method
    const handleChangeCaptcha = (value) => {
        console.log("Captcha value:", value);
        // this.setState({ value });
        // if value is null recaptcha expired
        setIsCaptch(value || false);
        recaptchaerrorFunction('display:none');
    };

    const validate = (value) => {

        if (validator.isURL(value)) {
          setErrorMessage('Is Valid URL')
        } else {
          setErrorMessage('Is Not Valid URL')
        }
      }

    function sendEmail(e) {
        console.log('test');
        e.preventDefault();
        if (!isCaptch) {
            recaptchaerrorFunction('display:block');
            return false;
          }

        emailjs.sendForm('service_3ucsloc', 'template_z3stw7g', e.target, '3i8vNYueSpinK0hpA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setTimeout(() => {
            setcontact_fname('');
            setcontact_url('');
            setcontact_email('');
            setcontact_phone('');
            setcontact_textarea('');
            setcontact_recaptcha('');
            setIsCaptch(false);
            setStatusMessage('Form submitted successfully.');
        }, 1000);
    }
    function ContactFormModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Get a Quote
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='contact-form' onSubmit={sendEmail}>
                    <Row>
                        <Form.Group as={Col} md="6 mb-3" controlId="ContactFirstName">
                            <Form.Label>Name</Form.Label>
                            <input type="text" value={fname} onChange={handleChange} name="contact_fname" required className={`form-control `} placeholder="John" />
                        </Form.Group>
                        <Form.Group as={Col} md="6 mb-3" controlId="ContactEmial">
                        <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={handleChange2} name="contact_email" required className={`form-control `} placeholder="lorem@ipsum.com" />
                        </Form.Group>
                        <Form.Group as={Col} md="6 mb-3" controlId="ContactWeb">
                        <Form.Label>Website</Form.Label>
                        <Form.Control type="url" value={url} onChange={handleChange1} name="contact_url" required className={`form-control `} placeholder="https://www.exaple.com" />
                        </Form.Group>
                        <Form.Group as={Col} md="6 mb-3" controlId="ContactPhone">
                            <Form.Label>Contact</Form.Label>
                            <PhoneInput type="tel" value={phone} onChange={handleChange3} name="contact_phone" required className={`form-control`} placeholder="123-456-789" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mt-2 mb-3" controlId="ContactPhone">
                        <Form.Label>About Project</Form.Label>
                        <Form.Control as="textarea" value={textarea} onChange={handleChange4} name="message" placeholder="Discription" />
                    </Form.Group>
                    <Recaptcha
                        value={recaptcha} 
                        onChange={handleChangeCaptcha}
                        required
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_KEY}
                        size="normal"
                        id="recaptcha-google"
                    />
                    <span className='new-errormessage' Style={recaptchaError}>Recaptcha is required.</span>
                    <Button variant="primary" type="submit"  className='btn-default mt-2'>Submit</Button>
                </Form>
                {statusMessage && 
                    <div className='alert alert-success mt-3'>
                        {statusMessage}
                    </div>
                }
            </Modal.Body>
          </Modal>
        );
      }
      
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
        <ContactFormModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <s.blogSection className='blogSection'>
            <Container>
                <s.ctaSection className='ctaBox'>
                    <s.ctaInner className='ctaBoxInner'>
                        <s.leftPart>
                            <s.bigHeading>Hello.</s.bigHeading>
                            <s.midHeading>Would love you to be our clientele...</s.midHeading>
                            <s.smHeading>Lets get in touch</s.smHeading>
                        </s.leftPart>
                        <s.rightPart>
                            <s.ctaBtn className='ctaBtn'>
                                <Link href='/' scroll={false}>
                                    <a onClick={() => setModalShow(true)} className='btn-default'>Get a Quote</a>
                                </Link>
                            </s.ctaBtn>
                        </s.rightPart>
                    </s.ctaInner>
                </s.ctaSection>
                <s.blogTop className='topHeading'>Our Blogs</s.blogTop>
                <s.blogListing className='blogListing'>
                    <Row>
                        <Col md={4} sm={6}>
                            <s.blogItem className='blogItem mb-sm-5 mb-4 mb-md-0'>
                                <Link href={router.SINGLEBLOG25}>
                                    <a>
                                        <s.blogImage>
                                            <Image layout='responsive' src={WaysUEISABSER} placeholder="blur"  alt="Eliminate the risks and utilize an effective Business Outsourcing Process in Business"  />
                                        </s.blogImage>
                                    </a>
                                </Link>
                                <s.blogCategory>outsourcing</s.blogCategory>
                                <s.blogTitle className='postHeading'>
                                    <Link href={router.SINGLEBLOG25}>
                                        <a>Eliminate the risks and utilize an effective Business Outsourcing Process in Business</a>
                                    </Link>
                                </s.blogTitle>
                                <Link href={router.SINGLEBLOG25}>
                                    <a className='blogLink'>Read more</a>
                                </Link>
                            </s.blogItem>
                        </Col>
                        <Col md={4} sm={6}>
                            <s.blogItem className='blogItem mb-sm-5 mb-4 mb-md-0'>
                                <Link href={router.SINGLEBLOG21}>
                                    <a>
                                        <s.blogImage>
                                            <Image layout='responsive' src={TopResonsOffshireDevelopment} placeholder="blur"  alt="Top-5 reasons to look for Offshore Development in the Business"  />
                                        </s.blogImage>
                                    </a>
                                </Link>
                                <s.blogCategory>outsourcing</s.blogCategory>
                                <s.blogTitle className='postHeading'>
                                    <Link href={router.SINGLEBLOG21}><a>Top-5 reasons to look for Offshore Development in the Business</a></Link>
                                </s.blogTitle>
                                <Link href={router.SINGLEBLOG21}>
                                    <a className='blogLink'>Read more</a>
                                </Link>
                            </s.blogItem>
                        </Col>
                        <Col md={4} sm={6}>
                            <s.blogItem className='blogItem'>
                                <Link href={router.SINGLEBLOG19}>
                                    <a>
                                        <s.blogImage>
                                            <Image layout='responsive' src={ComparisonBetweenFixedPrice} placeholder="blur"  alt="A comparison between fixed price and time and material contract" />
                                        </s.blogImage>
                                    </a>
                                </Link>
                                <s.blogCategory>outsourcing</s.blogCategory>
                                <s.blogTitle className='postHeading'>
                                    <Link href={router.SINGLEBLOG19}><a>A comparison between fixed price and time and material contract</a></Link>
                                </s.blogTitle>
                                <Link href={router.SINGLEBLOG19}>
                                    <a className='blogLink'>Read more</a>
                                </Link>
                            </s.blogItem>
                        </Col>
                    </Row>
                </s.blogListing>
            </Container>
        </s.blogSection>
        </>
    );
};
const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
        <p>your message submitted successfully</p>
    </div>
);
export default Blog