import React, { useState, useEffect } from 'react'
import { Form, Alert, InputGroup, Button } from "react-bootstrap";

import AddBA20152017FormModal from './forms/AddBA20152017FormModal';

const AddBA20152017Head = () => {
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => setOpenModal(true)
    
    return (
        <>
            <AddBA20152017FormModal show={openModal} setShow={setOpenModal}/>
            <div style={{marginTop:20, display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                <h1 style={{color: '#F1D00A', fontWeight: 'bold'}}>Basic Assortment 2015-2017</h1>
                <Button 
                    style={{backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}
                    onClick={handleOpenModal}>
                    Add Figure
                </Button>
            </div>
        </>
    )
}

export default AddBA20152017Head