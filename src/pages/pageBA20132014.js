import React, { useState } from 'react'
import { Button, Container, Navbar, Row, Col, Image } from "react-bootstrap";
import { Link, useNavigate} from 'react-router-dom';

import AddBA20132014 from '../components/AddBA20132014';
import ListBA20132014 from '../components/ListBA20132014';

import homePageLogo from '../assets/img/welcomePageLogo.png'
import homeIcon from '../assets/img/homeIcon.png'

const PageBA20132014 = () => {
  const navigate = useNavigate();
  const [figureID, setFigureID] = useState("");

  const getFigureIDHandler = (id) => {
    setFigureID(id);
  }
  return (
    <div style = {{height:"1000vh", backgroundColor: '#141D26'}}>
      <Navbar style={{backgroundColor: '#243447', borderColor: '#243447'}}>
        <Container>
          <Row>
            <Col>
              <Navbar.Brand style={{color: '#F0F0F0', fontWeight: 'bold'}}>Action Figure Guide App Admin</Navbar.Brand>
              <Link to="/" style={{marginLeft: 10, color: '#F1D00A'}}>
                Home
              </Link>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <AddBA20132014 id={figureID} setFigureID={setFigureID}/>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <ListBA20132014 getFigureID={getFigureIDHandler}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageBA20132014