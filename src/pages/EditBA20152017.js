import React, { useRef, useState, useEffect } from 'react'
import { Button, Container, Navbar, Row, Col, Image, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate, useParams} from 'react-router-dom';

import { useFormik } from 'formik';

import { useBA20152017Store } from '../hooks/useBA20152017Store';
import useGetBA20152017List from '../hooks/useGetBA20152017List';

const EditBA20152017 = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const inputRef = useRef(null);
    const hasSelectedFile = useRef(null);

    //FORM STATES
    const [selectedFile, setSelectedFile] = useState('');

    const [isEditing, setIsEditing] = useState(false);
    const [currentFigure, setCurrentFigure] = useState('');

     //INITIALIZE STORES
    const updateFigure = useBA20152017Store((state) => state.updateFigure)
    const deleteFigure = useBA20152017Store((state) => state.deleteFigure)
    const figures = useBA20152017Store((state) => state.figures)

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
        updateFigure(id, { 
            figure_number: values.number,
            figure_name: values.name,
            figure_version: values.version,
            figure_date_stamp: values.dateStamp,
            figure_release_date: values.releaseDate,
            figure_joint_count: values.jointCount,
            figure_accessory_count: values.accessoryCount,
            figure_accessory_details: values.accessoryDetails,
        }, selectedFile).then((success) =>{
            if (success) {
                navigate('/');
            }
        });
        formik.resetForm();
        setSelectedFile('');
    };

    const formik = useFormik({    
        initialValues,
        onSubmit: handleSubmit
    });

    const handleDelete = () => {
        deleteFigure(id , currentFigure?.photoRef || '').then((success) => {
            if (success) {
                navigate('/');
            }
        });
    };

    useEffect(() => {
        // GET THEN VALUES OF THE FIGURE
        const current = figures.find((item) => item.id === id);

        // SET THE VALUE OF THE FIELDS
        setSelectedFile(current.photoUrl);

        setCurrentFigure(current);

        formik.setFieldValue('number', current.figure_number);
        formik.setFieldValue('name', current.figure_name);
        formik.setFieldValue('version', current.figure_version);
        formik.setFieldValue('dateStamp', current.figure_date_stamp);
        formik.setFieldValue('releaseDate', current.figure_release_date);
        formik.setFieldValue('jointCount', current.figure_joint_count);
        formik.setFieldValue('accessoryCount', current.figure_accessory_count);
        formik.setFieldValue('accessoryDetails', current.figure_accessory_details);

    }, [id]);
    
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
                    <h1 style={{color: '#F1D00A', fontWeight: 'bold', marginTop: 20, marginBottom: 20}}>Update Figure</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                    Figure Number: </InputGroup.Text>
                                <Form.Control
                                    style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                    id="number"
                                    name="number"
                                    type="text"
                                    placeholder="Enter Figure Number:"
                                    value={formik.values.number}
                                    onChange={formik.handleChange}
                                    disabled={!isEditing}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                    Figure Name: </InputGroup.Text>
                                <Form.Control
                                    style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter Figure Name:"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    disabled={!isEditing}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                    Figure Version: </InputGroup.Text>
                                <Form.Control
                                    style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                    id="version"
                                    name="version"
                                    type="text"
                                    placeholder="Enter Figure Version:"
                                    value={formik.values.version}
                                    onChange = {formik.handleChange}
                                    disabled={!isEditing}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                    Figure Date Stamp: </InputGroup.Text>
                                <Form.Control
                                    style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                    id="dateStamp"
                                    name="dateStamp"
                                    type="text"
                                    placeholder="Enter Figure Date Stamp:"
                                    value={formik.values.dateStamp}
                                    onChange = {formik.handleChange}
                                    disabled={!isEditing}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                    Figure Release Date: </InputGroup.Text>
                                <Form.Control
                                    style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                    id="releaseDate"
                                    name="releaseDate"
                                    type="text"
                                    placeholder="Enter Figure Release Date:"
                                    value={formik.values.releaseDate}
                                    onChange = {formik.handleChange}
                                    disabled={!isEditing}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                    Figure Joint Count: </InputGroup.Text>
                                <Form.Control
                                    style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                    id="jointCount"
                                    name="jointCount"
                                    type="text"
                                    placeholder="Enter Figure Joint Count:"
                                    value={formik.values.jointCount}
                                    onChange = {formik.handleChange}
                                    disabled={!isEditing}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                    Figure Accessory Count: </InputGroup.Text>
                                <Form.Control
                                    style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                    id="accessoryCount"
                                    name="accessoryCount"
                                    type="text"
                                    placeholder="Enter Figure Accessory Count:"
                                    value={formik.values.accessoryCount}
                                    onChange = {formik.handleChange}
                                    disabled={!isEditing}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                                    Figure Accessory Details: </InputGroup.Text>
                                <Form.Control
                                    style={{backgroundColor: '#243447', borderColor: '#243447', color: '#F0F0F0'}}
                                    id="accessoryDetails"
                                    name="accessoryDetails"
                                    type="text"
                                    placeholder="Enter Figure Accessory Details:"
                                    value={formik.values.accessoryDetails}
                                    onChange = {formik.handleChange}
                                    disabled={!isEditing}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <div style={{marginTop:20, display: 'flex', flexDirection: 'row'}}>
                                <Button style={{ backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold', marginRight: 10}}
                                disabled={!isEditing}>
                                    <input
                                        type='file'
                                        onChange={handleFileSelect}
                                        onClick={handleFileClick}
                                        accept='image/*'
                                        ref={inputRef}
                                    />
                                </Button>
                                <div style={{width: 200, height: 200}}>
                                    <Image
                                        src={selectedFile}
                                        alt=''
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'fill'
                                        }}/>
                                </div>
                            </div>
                        </Form.Group>

                        <div>
                        {!isEditing ? (
                                <>
                                    <Button
                                        style={{backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold', flex: 1, marginRight: 20}}
                                        onClick={() => setIsEditing(!isEditing)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        style={{backgroundColor: '#E10600', borderColor: '#E10600', color: '#FFFFFF', fontWeight: 'bold', flex: 1}}
                                        onClick={handleDelete}>
                                        Delete
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        style={{backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold', flex: 1, marginRight: 20}}
                                        onClick={formik.handleSubmit}>
                                        Save
                                    </Button>
                                    <Button
                                        style={{backgroundColor: '#E10600', borderColor: '#E10600', color: '#FFFFFF', fontWeight: 'bold', flex: 1}}
                                        onClick={() => setIsEditing(false)}>
                                        Cancel
                                    </Button>
                                </>
                            )}
                        </div>
                    </Form>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EditBA20152017