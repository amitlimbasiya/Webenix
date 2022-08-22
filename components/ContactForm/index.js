import React from 'react';
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import * as s from "../../styles/components/contact.style";


const ContactForm = () => {
  return (
    <>
        <s.ContactFormWrapper className='noiseBg'>
            <Container>
                <Form className='contact-form'>
                    <Row>
                        <Form.Group as={Col} md="6 mb-3"  controlId="ContactFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="John"/>
                        </Form.Group>
                        <Form.Group as={Col} md="6 mb-3" controlId="ContactLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Eg.Deo"/>
                        </Form.Group>
                        <Form.Group as={Col} md="6 mb-3" controlId="ContactEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="lorem@ipsum.com" />
                        </Form.Group>
                        <Form.Group as={Col} md="6 mb-3" controlId="ContactPhone">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="tel" placeholder="123-456-789" />
                        </Form.Group>
                    </Row>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>Services</Form.Label>
                        <Row>
                            <Form.Group as={Col} md="4 mb-2"  controlId="ContactFirstName">
                                <Form.Check type="checkbox" label="Mobile Development"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4 mb-2"  controlId="ContactFirstName">
                                <Form.Check type="checkbox" label="Web Development"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4 mb-2"  controlId="ContactFirstName">
                                <Form.Check type="checkbox" label="Hire Developer"/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="4 mb-2"  controlId="ContactFirstName">
                                <Form.Check type="checkbox" label="Maintenance & Support"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4 mb-2"  controlId="ContactFirstName">
                                <Form.Check type="checkbox" label="Technical Consultancy"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4 mb-2"  controlId="ContactFirstName">
                            <Form.Check type="checkbox" label="Other Services"/>
                            </Form.Group>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mt-2 mb-3" controlId="ContactPhone">
                        <Form.Label>About Project</Form.Label>
                        <Form.Control as="textarea" placeholder="Discription" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ContactPhone">
                        <Form.Label>Document (if any):</Form.Label>
                        <Form.Control type="file" placeholder="Choose File" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='btn-default mt-2'>Submit</Button>
                </Form>
            </Container>        
            
        </s.ContactFormWrapper>
    </>
  )
}

export default ContactForm