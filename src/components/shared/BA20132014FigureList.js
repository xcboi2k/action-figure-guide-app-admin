import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Table, Container, Col, Row, Card} from "react-bootstrap";

const BA20132014FigureList = ({figureList}) => {
    return (
        <>
            <Row style={{marginTop: 20}}>
                {figureList.map((figures) => {
                    const {id, figure_name, figure_number, figure_version, photoUrl} = figures;
                    return(
                        <Col className='d-flex' xs={6} md={3}>
                        <Card className='flex-fill' key={id} 
                        style={{ backgroundColor: '#243447', color: '#F0F0F0', marginBottom: 20}}>
                            <Card.Img variant='top' src={photoUrl} style={{ objectFit: 'scale-down' }}/>
                            <Card.Body>
                                <Card.Text>{figure_number}</Card.Text>
                                <Card.Title>{figure_name}</Card.Title>
                                <Card.Text style={{ fontStyle: 'italic'}}>{figure_version}</Card.Text>
                                <Link to={`/editBA20132014/${id}`}>
                                    <Button style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold', marginRight: 10}}
                                    >Edit</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    );
                })}
            </Row>
        </>
    )
}

export default BA20132014FigureList