import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../Img/mainpage.jpg';
import BarChart from './Bar';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';

const HomePage = () => {
    return (
        <Container className="mt-2 d-flex justify-content-center">
            <Row>
                <Col className="mt-5">
                    <Card border="0">
                        <Card.Body>
                            <Card.Text>
                                <h3>Welcome to your dashboard</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="0">
                        <Card.Body>
                            <Card.Text>
                                <h3>Training summary</h3>
                                <p> Here is your training statistic where you can see total amount of minutes by different activities.</p>
                            </Card.Text>
                        </Card.Body>
                        <BarChart />
                    </Card>
                </Col>
                <Col className="mt-5">
                    <img src={Image} alt="welcome page" width="100%" />
                </Col>
                <Footer />
            </Row>
        </Container>
    )
}
export default HomePage;