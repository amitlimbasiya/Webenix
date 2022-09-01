import React from 'react';
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import * as s from "../../styles/components/contact.style";
// import { Form, Button } from 'semantic-ui-react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';


const ContactForm = () => {

    const { control, register, setValue, handleSubmit, watch, errors, reset } = useForm();
    const [fname, setcontact_fname] = useState('');
    const [lastName, setcontact_lastName] = useState('');
    const [email, setcontact_email] = useState('');
    const [phone, setcontact_phone] = useState('');
    const [textarea, setcontact_textarea] = useState('');
    const handleChange = event => {
        setcontact_fname(event.target.value);
    };
    const handleChange1 = event => {
        setcontact_lastName(event.target.value);
    };
    const handleChange2 = event => {
        setcontact_email(event.target.value);
    };
    const handleChange3 = event => {
        setcontact_phone(event.target.value);
    };
    const handleChange4 = event => {
        setcontact_textarea(event.target.value);
    };
    // function onSubmit(e) {
    
    //     emailjs.sendForm('service_3ucsloc', 'template_z3stw7g', e.target, '3i8vNYueSpinK0hpA')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   }

      function sendEmail(e) {
        console.log('test');
        e.preventDefault();
        
        emailjs.sendForm('service_3ucsloc', 'template_z3stw7g', e.target, '3i8vNYueSpinK0hpA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });


          setTimeout(() => {
            setcontact_fname('');
            setcontact_lastName('');
            setcontact_email('');
            setcontact_phone('');
            setcontact_textarea('');
          }, 1000);


        //   setcontact_fname('');
      }
    // // form validation rules 

    // // get functions to build form with useForm() hook
    // const { register, handleSubmit, reset, formState } = useForm(formOptions);
    // const { errors } = formState;

    // function onSubmit(data) {
    //     // display form data on success
    //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    //     return false;
    // }


  return (
    <>
        <s.ContactFormWrapper className='noiseBg'>
            <Container>
                <form className='contact-form' onSubmit={sendEmail}>
                    <Row>
                        <Form.Group as={Col} md="6 mb-3"  controlId="ContactFirstName">
                            <Form.Label>First Name</Form.Label>
                            <input type="text" value={fname} onChange={handleChange} name="contact_fname" required className={`form-control `} placeholder="John" />
                        </Form.Group>  
                        <Form.Group as={Col} md="6 mb-3" controlId="ContactLastName">
                            <Form.Label>Last Name</Form.Label>
                            <input type="text" value={lastName} onChange={handleChange1} name="contact_lastName" required className={`form-control `} placeholder="Eg.Deo"/>
                        </Form.Group>
                        <Form.Group as={Col} md="6 mb-3" controlId="ContactEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={handleChange2} name="contact_email" required className={`form-control `} placeholder="lorem@ipsum.com" />
                        </Form.Group>
                        <Form.Group as={Col} md="6 mb-3" controlId="ContactPhone">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="tel" value={phone} onChange={handleChange3} name="contact_phone" required className={`form-control`}  placeholder="123-456-789"/>
                        </Form.Group>
                    </Row>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>Services</Form.Label>
                        <Row>
                            <Form.Group as={Col} md="4 mb-2"  controlId="ContactFirstName">
                                <Form.Check type="checkbox" name="contact_services[]" label="Mobile Development"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4 mb-2"  controlId="ContactFirstName">
                                <Form.Check type="checkbox" name="contact_services[]" label="Web Development"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4 mb-2"  controlId="ContactFirstName">
                                <Form.Check type="checkbox" name="contact_services[]" label="Hire Developer"/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="4 mb-2"  controlId="ContactFirstName">
                                <Form.Check type="checkbox" name="contact_services[]" label="Maintenance & Support"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4 mb-2"  controlId="ContactFirstName">
                                <Form.Check type="checkbox"  name="contact_services[]" label="Technical Consultancy"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4 mb-2"  controlId="ContactFirstName">
                            <Form.Check type="checkbox" name="contact_services[]" label="Other Services"/>
                            </Form.Group>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mt-2 mb-3" controlId="ContactPhone">
                        <Form.Label>About Project</Form.Label>
                        <Form.Control as="textarea" value={textarea} onChange={handleChange4} name="message" placeholder="Discription" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="ContactPhone">
                        <Form.Label>Document (if any):</Form.Label>
                        <Form.Control type="file" placeholder="Choose File" />
                    </Form.Group> */}
                    
                    <Button variant="primary" type="submit" className='btn-default mt-2'>Submit</Button>
                    
                    {/* <div className="text-left">
                        {showSuccessMessage && (
                            <p className="text-green-500 font-semibold text-sm my-2">
                                Thankyou! Your Message has been delivered.
                            </p>
                        )}
                        {showFailureMessage && (
                            <p className="text-red-500">
                                Oops! Something went wrong, please try again.
                            </p>
                        )}
                    </div> */}
                    
                </form>
            </Container>        
        </s.ContactFormWrapper>
    </>
  )
}
// const renderAlert = () => (
//     <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
//       <p>your message submitted successfully</p>
//     </div>
//   )
export default ContactForm