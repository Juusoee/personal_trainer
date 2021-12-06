import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../Img/mainpage.jpg';


const HomePage = () => {

    return (
        <Container className="mt-2 d-flex justify-content-center">
          <Row>
              <Col className="mt-5">
              <h3>Welcome to your dashboard</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <h3></h3>
              </Col>
              <Col>
              <img src={Image} alt="welcome page" width="100%"/>
              </Col>
          </Row>
        </Container>
    )
}
export default HomePage;