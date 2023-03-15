import React, { useState, useEffect } from 'react'
import { Form, Alert, InputGroup, Button } from "react-bootstrap";

import AddEX20142015FormModal from './forms/AddEX20142015FormModal';

const AddEX20142015Head = () => {
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => setOpenModal(true)
    
    return (
        <>
            <AddEX20142015FormModal show={openModal} setShow={setOpenModal}/>
            <div style={{marginTop:20, display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                <h1 style={{color: '#F1D00A', fontWeight: 'bold'}}>Exclusives 2014-2015</h1>
                <Button 
                    style={{backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}
                    onClick={handleOpenModal}>
                    Add Figure
                </Button>
            </div>
        </>
    )
}

export default AddEX20142015Head