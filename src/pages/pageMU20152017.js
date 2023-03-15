import React, { useState } from 'react'
import { Button, Container, Navbar, Row, Col, Image } from "react-bootstrap";
import { Link, useNavigate} from 'react-router-dom';

import AddMU20152017Head from '../components/AddMU20152017Head';
import MU20152017FigureList from '../components/shared/MU20152017FigureList';

import { useMU20152017Store } from '../hooks/useMU20152017Store';
import useGetMU20152017List from '../hooks/useGetMU20152017List';

import homePageLogo from '../assets/img/welcomePageLogo.png'
import homeIcon from '../assets/img/homeIcon.png'

const PageMU20152017 = () => {
  const navigate = useNavigate();

  const figureList = useMU20152017Store((state) => state.figures)

  useGetMU20152017List();
  
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
            <AddMU20152017Head />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <MU20152017FigureList figureList={figureList}></MU20152017FigureList>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageMU20152017