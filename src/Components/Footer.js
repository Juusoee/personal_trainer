import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faGithub, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigation() {

    return (
        <Navbar className="100vw mt-3" bg="light" sticky="bottom">
            <Container >
                <small>Copyright © {new Date().getFullYear()}, Juuso Rautiainen</small>
                <div className="justify-content-end" >
                    <a href="#"><i><FontAwesomeIcon icon={faYoutube} size="lg"></FontAwesomeIcon></i></a>
                    <a href="#"><i><FontAwesomeIcon icon={faFacebook} size="lg"></FontAwesomeIcon></i></a>
                    <a href="#"><i><FontAwesomeIcon icon={faInstagram} size="lg"></FontAwesomeIcon></i></a>
                    <a href="#"><i><FontAwesomeIcon icon={faSnapchat} size="lg"></FontAwesomeIcon></i></a>
                    <a href="#"><i><FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon></i></a>
                </div >
            </Container >
        </Navbar >
    )
}