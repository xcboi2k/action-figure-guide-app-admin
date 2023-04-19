import React, { useState } from 'react'
import { Button, Container, Navbar, Row, Col, Image } from "react-bootstrap";
import { Link, useNavigate} from 'react-router-dom';

import AddBA20132014Head from '../components/AddBA20132014Head';
import BA20132014FigureList from '../components/shared/BA20132014FigureList';

import { useBA20132014Store } from '../hooks/useBA20132014Store';
import useGetBA20132014List from '../hooks/useGetBA20132014List';

import homePageLogo from '../assets/img/welcomePageLogo.png'
import homeIcon from '../assets/img/homeIcon.png'

const PageBA20132014 = () => {
  const navigate = useNavigate();

  const figureList = useBA20132014Store((state) => state.figures)

  useGetBA20132014List();
  
  return (
    <div style = {{height:"1000vh", backgroundColor: '#141D26'}}>
      <Navbar style={{backgroundColor: '#243447', borderColor: '#243447'}}>
        <Container>
          <Row>
            <Col>
              <Navbar.Brand style={{color: '#F0F0F0', fontWeight: 'bold'}}>Star Wars Collectibles Companion</Navbar.Brand>
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
            <AddBA20132014Head />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BA20132014FigureList figureList={figureList}></BA20132014FigureList>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageBA20132014