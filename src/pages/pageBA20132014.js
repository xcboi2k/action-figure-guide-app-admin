import React, { useState } from 'react'
import { Container, Navbar, Row, Col } from "react-bootstrap";

import AddBA20132014 from '../components/AddBA20132014';
import ListBA20132014 from '../components/ListBA20132014';

const PageBA20132014 = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" className="header">
      <Container>
        <Navbar.Brand>Action Figure Guide App Admin</Navbar.Brand>
      </Container>
    </Navbar>

    <Container>
      <Row>
        <Col>
          <AddBA20132014 />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          <ListBA20132014 />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default PageBA20132014