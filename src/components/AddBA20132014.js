import React, { useState } from 'react'
import { Form, Alert, InputGroup, Button } from "react-bootstrap";

import useBA20132014Store from '../hooks/useBA20132014Store';

const AddBA20132014 = () => {
    const [status, setStatus] = useState('Available');
    const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState({error: false, msg: ''});

    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [version, setVersion] = useState("");
    const [dateStamp, setDateStamp] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [jointCount, setJointCount] = useState("");
    const [accessoryCount, setAccessoryCount] = useState("");
    const [accessoryDetails, setAccessoryDetails] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        setMessage('');

        if(name === '' || version === ''){
            setMessage({error: true, msg: 'All fields are required.'});
            return;
        }

        const newFigure = {
            figure_number: number,
            figure_name: name,
            figure_version: version,
            figure_date_stamp: dateStamp,
            figure_release_date: releaseDate,
            figure_joint_count: jointCount,
            figure_accessory_count: accessoryCount,
            figure_accessory_details: accessoryDetails
        };

        console.log(newFigure);

        try{
            await useBA20132014Store.addBA20132014(newFigure);
            setMessage({error: false, msg: 'Figure added successfully.'});
        }catch(err){
            setMessage({error: true, msg: 'err.Message'});
        }

        setNumber('');
        setName('');
        setVersion('');
        setDateStamp('');
        setReleaseDate('');
        setJointCount('');
        setAccessoryCount('');
        setAccessoryDetails('');
    };
    return (
        <>
            <div className="p-4 box">
                {message?.msg && (<Alert variant={message?.error ? "danger" : "success"} dismissable onClose={() => setMessage('')}>
                    {message?.msg}
                    </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formFigureNumber">
                        <InputGroup>
                            <InputGroup.Text id="formFigureNumber">Figure Number: </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Enter Figure Number:"
                                value={number}
                                onChange = {(e) => setNumber(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureName">
                        <InputGroup>
                            <InputGroup.Text id="formFigureName">Figure Name: </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Enter Figure Name:"
                                value={name}
                                onChange = {(e) => setName(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureVersion">
                        <InputGroup>
                            <InputGroup.Text id="formFigureVersion">Figure Version: </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Enter Figure Version:"
                                value={version}
                                onChange = {(e) => setVersion(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureDateStamp">
                        <InputGroup>
                            <InputGroup.Text id="formFigureDateStamp">Figure Date Stamp: </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Enter Figure Date Stamp:"
                                value={dateStamp}
                                onChange = {(e) => setDateStamp(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureReleaseDate">
                        <InputGroup>
                            <InputGroup.Text id="formFigureReleaseDate">Figure Release Date: </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Enter Figure Release Date:"
                                value={releaseDate}
                                onChange = {(e) => setReleaseDate(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureJointCount">
                        <InputGroup>
                            <InputGroup.Text id="formFigureJointCount">Figure Joint Count: </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Enter Figure Joint Count:"
                                value={jointCount}
                                onChange = {(e) => setJointCount(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureAccessoryCount">
                        <InputGroup>
                            <InputGroup.Text id="formFigureAccessoryCount">Figure Accessory Count: </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Enter Figure Accessory Count:"
                                value={accessoryCount}
                                onChange = {(e) => setAccessoryCount(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureAccessoryDetails">
                        <InputGroup>
                            <InputGroup.Text id="formFigureAccessoryDetails">Figure Accessory Details: </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Enter Figure Accessory Details:"
                                value={accessoryDetails}
                                onChange = {(e) => setAccessoryDetails(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                        Add/Update
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default AddBA20132014