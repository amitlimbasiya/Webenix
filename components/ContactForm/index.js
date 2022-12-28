import React from 'react';
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import * as s from "../../styles/components/contact.style";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import validator from 'validator';
import Recaptcha from 'react-google-recaptcha';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
const RECAPTCHA_KEY = '6LfNM8shAAAAAGQP99s9wq-xAhNjOCVTZxKCfYLa';


const ContactForm = () => {

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
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "mitp@webenix.net",
            Password : "3B7A3D10543A6F3B956EC43D4AA7AF7BAE15",
            To : 'mitp@webenix.net',
            //From : "you@isp.com",
            Subject : "This is the test mail",
            Body : "test by developer"
        }).then(
          message => alert(message)
        );
        // e.preventDefault();
        // if (!isCaptch) {
        //     recaptchaerrorFunction('display:block');
        //     return false;
        //   }

        // emailjs.sendForm('service_3ucsloc', 'template_z3stw7g', e.target, '3i8vNYueSpinK0hpA')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });


        // setTimeout(() => {
        //     setcontact_fname('');
        //     setcontact_url('');
        //     setcontact_email('');
        //     setcontact_phone('');
        //     setcontact_textarea('');
        //     setcontact_recaptcha('');
        //     setIsCaptch(false);
        //     setStatusMessage('Form submitted successfully.');
        // }, 1000);
    }


    return (
        <>
            <s.ContactFormWrapper className='noiseBg'>
                <Container>
                    <form className='contact-form' onSubmit={sendEmail}>
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
                    </form>
                    {statusMessage && 
                        <div className='alert alert-success mt-3'>
                           {statusMessage}
                        </div>
                    }
                </Container>
            </s.ContactFormWrapper>
        </>
    )
}
const renderAlert = () => (
        <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
          <p>your message submitted successfully</p>
        </div>
      )
export default ContactForm