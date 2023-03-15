import React, { useRef, useState, useEffect } from 'react'
import { Form, Alert, InputGroup, Button, Container } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

import { useFormik } from 'formik';
import { useMU20152017Store } from '../../hooks/useMU20152017Store';

export default function AddMU20152017FormModal({show, setShow}){
    //STATES
    const [selectedFile, setSelectedFile] = useState('');

    //INITIALIZE STORES
    const addFigure = useMU20152017Store((state) => state.addFigure)

    // INITIALIZE CONSTANTS
    const inputRef = useRef(null);
    const hasSelectedFile = useRef(null);

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

    const handleClose = () => setShow(false)

    // FILES
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
    
        if (e.target.files?.length) {
            hasSelectedFile.current = true;
            const fileSrc = URL.createObjectURL(file);
            setSelectedFile({ source: fileSrc, file });
            // console.log(e.target.files);
        }
    
        focusBack();
    };
    
    const handleFileClick = () => {
        hasSelectedFile.current = false;
        window.addEventListener('focus', focusBack);
    };
    
    const focusBack = () => {
        if (!hasSelectedFile.current) {
            setSelectedFile(null);
            if (inputRef.current) {
                inputRef.current.value = null;
            }
        }
    
        window.removeEventListener('focus', focusBack);
    };

    // FORMS
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
        }, selectedFile.file);
        formik.resetForm();
        setSelectedFile('');
    };

    const formik = useFormik({    
        initialValues,
        onSubmit: handleSubmit
    });

    return (
        <>
            <Modal aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Figure</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Figure Number:</Form.Label>
                            <Form.Control
                                id="number"
                                name="number"
                                type="text"
                                placeholder="Enter Figure Number:"
                                value={formik.values.number}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Figure Name:</Form.Label>
                                <Form.Control
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter Figure Name:"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Figure Version:</Form.Label>
                                <Form.Control
                                    id="version"
                                    name="version"
                                    type="text"
                                    placeholder="Enter Figure Version:"
                                    value={formik.values.version}
                                    onChange = {formik.handleChange}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Figure Date Stamp:</Form.Label>
                                <Form.Control
                                    id="dateStamp"
                                    name="dateStamp"
                                    type="text"
                                    placeholder="Enter Figure Date Stamp:"
                                    value={formik.values.dateStamp}
                                    onChange = {formik.handleChange}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Figure Release Date:</Form.Label>
                                <Form.Control
                                    id="releaseDate"
                                    name="releaseDate"
                                    type="text"
                                    placeholder="Enter Figure Release Date:"
                                    value={formik.values.releaseDate}
                                    onChange = {formik.handleChange}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Figure Joint Count:</Form.Label>
                                <Form.Control
                                    id="jointCount"
                                    name="jointCount"
                                    type="text"
                                    placeholder="Enter Figure Joint Count:"
                                    value={formik.values.jointCount}
                                    onChange = {formik.handleChange}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Figure Accessory Count:</Form.Label>
                                <Form.Control
                                    id="accessoryCount"
                                    name="accessoryCount"
                                    type="text"
                                    placeholder="Enter Figure Accessory Count:"
                                    value={formik.values.accessoryCount}
                                    onChange = {formik.handleChange}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Figure Accessory Details:</Form.Label>
                                <Form.Control
                                    id="accessoryDetails"
                                    name="accessoryDetails"
                                    type="text"
                                    placeholder="Enter Figure Accessory Details:"
                                    value={formik.values.accessoryDetails}
                                    onChange = {formik.handleChange}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3" style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Button style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold', marginRight: 10}}>
                                <input
                                    type='file'
                                    onChange={handleFileSelect}
                                    onClick={handleFileClick}
                                    accept='image/*'
                                    ref={inputRef}
                                />
                            </Button>
                            <Container>
                                <img
                                src={selectedFile}
                                alt=''
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'fill'
                                }}
                                />
                            </Container>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        type="Submit"
                        style={{backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}
                        onClick={formik.handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
