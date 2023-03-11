import React from 'react'
import { Button, Table, Container, Col, Row, Card} from "react-bootstrap";

const ActionFigureList = () => {
    const figures = [
        {
            id: 1,
            number: "1",
            name: "Jabba",
            version: "Return of the Jedi",
        },
        {
            id: 2,
            number: "2",
            name: "Anakin Skywalker",
            version: "Revenge of the Sith",
        },
        {
            id: 3,
            number: "3",
            name: "Darth Vader",
            version: "The Empire Strikes Back",
        }
    ];

    return (
        <>
            <div style={{marginTop: 20, marginBottom: 25}}>
                <h1 style={{color: '#F1D00A', fontWeight: 'bold'}}>Figure List</h1>
            </div>
            <Row>
                {figures.map((figures) => {
                    const {id, name, number, version} = figures;
                    return(
                        <Col className='d-flex'>
                        <Card className='flex-fill' key={id} 
                        style={{ backgroundColor: '#243447', color: '#F0F0F0'}}>
                            {/* <Card.Img variant='top' src='#' /> */}
                            <Card.Body>
                                <Card.Title>{number}</Card.Title>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>{version}</Card.Text>
                                <Button style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold', marginRight: 10}}>Edit</Button>
                                <Button variant='danger' 
                                style={{ color: '#243447', fontWeight: 'bold'}}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    );
                })}
            </Row>
        </>
    )
}

export default ActionFigureList