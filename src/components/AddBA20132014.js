import React, { useState, useEffect } from 'react'
import { Form, Alert, InputGroup, Button } from "react-bootstrap";

import { useFormik } from 'formik';
import { useBA20132014Store } from '../hooks/useBA20132014Store';

const AddBA20132014 = ({id, setFigureID}) => {
    const addFigure = useBA20132014Store((state) => state.addFigure)

    const initialValues = {
        number: '',
        name: '',
        version: '',
        dateStamp: '',
        releaseDate: '',
        jointCount: '',
        accessoryCount: '',
        accessoryDetails: ''
    }

    const handleSubmit = (values) => {
        console.log(values);
        addFigure({ 
            figure_number: values.number,
            figure_name: values.name,
            figure_version: values.version,
            figure_date_stamp: values.dateStamp,
            figure_release_date: values.releaseDate,
            figure_joint_count: values.jointCount,
            figure_accessory_count: values.accessoryCount,
            figure_accessory_details: values.accessoryDetails,
        });
        formik.resetForm();
    };

    const formik = useFormik({
        
        initialValues,
        onSubmit: handleSubmit
    });
    
    return (
        <>
            <div style={{marginTop:20}}>
                <h1 style={{color: '#F1D00A', fontWeight: 'bold'}}>Add a Figure</h1>
            </div>
            <div className="p-4 box">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formFigureNumber">
                        <InputGroup>
                            <InputGroup.Text id="formFigureNumber" style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                Figure Number: </InputGroup.Text>
                            <Form.Control
                                style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                type="text"
                                placeholder="Enter Figure Number:"
                                value={formik.values.number}
                                onChange = {formik.handleChange}
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
                                value={formik.values.name}
                                onChange = {formik.handleChange}
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
                                value={formik.values.version}
                                onChange = {formik.handleChange}
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
                                value={formik.values.dateStamp}
                                onChange = {formik.handleChange}
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
                                value={formik.values.releaseDate}
                                onChange = {formik.handleChange}
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
                                value={formik.values.jointCount}
                                onChange = {formik.handleChange}
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
                                value={formik.values.accessoryCount}
                                onChange = {formik.handleChange}
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
                                value={formik.values.accessoryDetails}
                                onChange = {formik.handleChange}
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
                        <Button 
                            type="Submit"
                            style={{backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}
                            onClick={formik.handleSubmit}>
                            Add
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default AddBA20132014