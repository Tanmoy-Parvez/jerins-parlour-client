import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../../Images/Icon/Group 1373.png'

const Services = () => {
    return (
        <div className='container my-5'>
            <h2 className="fw-bold text-center text-uppercase">Our Awesome <span className='pink-text'>Services</span> </h2>
            <Row xs={1} md={3} className="g-5 my-3">
                <Col>
                    <Card className="border-0 py-3 card-hover">
                        <Card.Img variant="top" src={img1} className="w-25 mx-auto" />
                        <Card.Body className="text-center">
                            <Card.Title>Anti Age Face Treatment</Card.Title>
                            <Card.Text>
                                <h4 className="pink-text">$199</h4>
                            </Card.Text>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 py-3 card-hover">
                        <Card.Img variant="top" src={img1} className="w-25 mx-auto" />
                        <Card.Body className="text-center">
                            <Card.Title>Anti Age Face Treatment</Card.Title>
                            <Card.Text>
                                <h4 className="pink-text">$199</h4>
                            </Card.Text>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 py-3 card-hover">
                        <Card.Img variant="top" src={img1} className="w-25 mx-auto" />
                        <Card.Body className="text-center">
                            <Card.Title>Anti Age Face Treatment</Card.Title>
                            <Card.Text>
                                <h4 className="pink-text">$199</h4>
                            </Card.Text>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Services;