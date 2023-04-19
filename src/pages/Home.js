import React from 'react';
import { Navbar, Container, Row, Image } from "react-bootstrap";
import NavButtons from '../components/NavButtons';

import homePageLogo from '../assets/img/welcomePageLogo.png'

const Home = () => {
    return (
        <div style = {{height:"100vh", backgroundColor: '#141D26'}}>
            <Navbar style={{backgroundColor: '#243447', borderColor: '#243447'}}>
                <Container>
                    <Row>
                        <Navbar.Brand style={{color: '#F0F0F0', fontWeight: 'bold'}}>Star Wars Collectibles Companion</Navbar.Brand>
                    </Row>
                </Container>
            </Navbar>
            <Image src={homePageLogo} style={{marginTop: 30, width: 350, height: 225}}/>
            <Container>
                <NavButtons />
            </Container>
        </div>
    )
}

export default Home