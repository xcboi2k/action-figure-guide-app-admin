import React, { useState } from 'react'
import { Button, Container, Navbar, Row, Col, Image } from "react-bootstrap";
import { Link, useNavigate} from 'react-router-dom';

import AddEX20142015Head from '../components/AddEX20142015Head';
import EX20142015FigureList from '../components/shared/EX20142015FigureList';

import { useEX20142015Store } from '../hooks/useEX20142015Store';
import useGetEX20142015List from '../hooks/useGetEX20142015List';

import homePageLogo from '../assets/img/welcomePageLogo.png'
import homeIcon from '../assets/img/homeIcon.png'

const PageEX20142015 = () => {
  const navigate = useNavigate();

  const figureList = useEX20142015Store((state) => state.figures)

  useGetEX20142015List();
  
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
            <AddEX20142015Head />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <EX20142015FigureList figureList={figureList}></EX20142015FigureList>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageEX20142015