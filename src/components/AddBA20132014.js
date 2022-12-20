import React, { useState, useEffect } from 'react'
import { Form, Alert, InputGroup, Button } from "react-bootstrap";

import useBA20132014Store from '../hooks/useBA20132014Store';

const AddBA20132014 = ({id, setFigureID}) => {
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
            figure_accessory_details: accessoryDetails,
        };

        console.log(newFigure);

        try{
            if(id !== undefined && id !== ""){
                await useBA20132014Store.updateBA20132014(id, newFigure);
                setFigureID('');
                setMessage({error: false, msg: 'Figure updated successfully.'});
            }
            else{
                await useBA20132014Store.addBA20132014(newFigure);
                setMessage({error: false, msg: 'Figure added successfully.'});
            }
            
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

    const editHandler = async() => {
        setMessage("");
        try{
            const docRef = await useBA20132014Store.getBA20132014(id);
            setNumber(docRef.data().figure_number);
            setName(docRef.data().figure_name);
            setVersion(docRef.data().figure_version);
            setDateStamp(docRef.data().figure_date_stamp);
            setReleaseDate(docRef.data().figure_release_date);
            setJointCount(docRef.data().figure_joint_count);
            setAccessoryCount(docRef.data().figure_accessory_count);
            setAccessoryDetails(docRef.data().figure_accessory_details);
        }
        catch (err){
            setMessage({error: true, msg: 'err.Message'});
        }
    }

    useEffect(() => {
        if(id !== undefined && id !== ""){
            editHandler();
        }
    }, [id]);
    
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
                            <InputGroup.Text id="formFigureNumber" style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                Figure Number: </InputGroup.Text>
                            <Form.Control
                                style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                type="text"
                                placeholder="Enter Figure Number:"
                                value={number}
                                onChange = {(e) => setNumber(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureName">
                        <InputGroup>
                            <InputGroup.Text id="formFigureName" style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                Figure Name: </InputGroup.Text>
                            <Form.Control
                                style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                type="text"
                                placeholder="Enter Figure Name:"
                                value={name}
                                onChange = {(e) => setName(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureVersion">
                        <InputGroup>
                            <InputGroup.Text id="formFigureVersion" style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                Figure Version: </InputGroup.Text>
                            <Form.Control
                                style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                type="text"
                                placeholder="Enter Figure Version:"
                                value={version}
                                onChange = {(e) => setVersion(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureDateStamp">
                        <InputGroup>
                            <InputGroup.Text id="formFigureDateStamp" style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                Figure Date Stamp: </InputGroup.Text>
                            <Form.Control
                                style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                type="text"
                                placeholder="Enter Figure Date Stamp:"
                                value={dateStamp}
                                onChange = {(e) => setDateStamp(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureReleaseDate">
                        <InputGroup>
                            <InputGroup.Text id="formFigureReleaseDate" style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                Figure Release Date: </InputGroup.Text>
                            <Form.Control
                                style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                type="text"
                                placeholder="Enter Figure Release Date:"
                                value={releaseDate}
                                onChange = {(e) => setReleaseDate(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureJointCount">
                        <InputGroup>
                            <InputGroup.Text id="formFigureJointCount" style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                Figure Joint Count: </InputGroup.Text>
                            <Form.Control
                                style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                type="text"
                                placeholder="Enter Figure Joint Count:"
                                value={jointCount}
                                onChange = {(e) => setJointCount(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureAccessoryCount">
                        <InputGroup>
                            <InputGroup.Text id="formFigureAccessoryCount" style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                Figure Accessory Count: </InputGroup.Text>
                            <Form.Control
                                style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                type="text"
                                placeholder="Enter Figure Accessory Count:"
                                value={accessoryCount}
                                onChange = {(e) => setAccessoryCount(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFigureAccessoryDetails">
                        <InputGroup>
                            <InputGroup.Text id="formFigureAccessoryDetails" style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                Figure Accessory Details: </InputGroup.Text>
                            <Form.Control
                                style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                type="text"
                                placeholder="Enter Figure Accessory Details:"
                                value={accessoryDetails}
                                onChange = {(e) => setAccessoryDetails(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formFigureImage">
                        <InputGroup>
                            <InputGroup.Text id="formFigureImage" style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                Figure Accessory Image: </InputGroup.Text>
                            <Form.Control
                                style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                type="file"
                                onChange = {(e) => setAccessoryDetails(e.target.files[0])}
                            />
                        </InputGroup>
                    </Form.Group> */}

                    <div>
                        <Button type="Submit" style={{backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                            Add/Update
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default AddBA20132014