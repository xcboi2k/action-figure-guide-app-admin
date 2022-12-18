import React from 'react';
import { Button, Navbar, Container, Row, Col } from "react-bootstrap";
import { useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="header">
                <Container>
                    <Navbar.Brand>Action Figure Guide App Admin</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
            <Row>
                <Col>
                    <Button variant="secondary" onClick={() => navigate('/addBA20132014')}>Basic Assortment 2013-2014</Button>
                    <Button variant="secondary"onClick={() => navigate('/addBA20142015')}>Basic Assortment 2014-2015</Button>
                    <Button variant="secondary" onClick={() => navigate('/addBA20152017')}>Exclusives 2014-2015</Button>
                    <Button variant="secondary" onClick={() => navigate('/addEX20142015')}>Basic Assortment 2015-2017</Button>
                    <Button variant="secondary" onClick={() => navigate('/addMU20152017')}>Multipacks 2015-2017</Button>
                </Col>
            </Row>
            </Container>
            
        </div>
    )
}

export default Home