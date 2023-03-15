import React, { useState } from 'react'
import { Button, Container, Navbar, Row, Col, Image } from "react-bootstrap";
import { Link, useNavigate} from 'react-router-dom';

import AddBA20152017Head from '../components/AddBA20152017Head';
import BA20152017FigureList from '../components/shared/BA20152017FigureList';

import { useBA20152017Store } from '../hooks/useBA20152017Store';
import useGetBA20152017List from '../hooks/useGetBA20152017List';

import homePageLogo from '../assets/img/welcomePageLogo.png'
import homeIcon from '../assets/img/homeIcon.png'

const PageBA20152017 = () => {
  const navigate = useNavigate();

  const figureList = useBA20152017Store((state) => state.figures)

  useGetBA20152017List();
  
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
            <AddBA20152017Head />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BA20152017FigureList figureList={figureList}></BA20152017FigureList>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageBA20152017