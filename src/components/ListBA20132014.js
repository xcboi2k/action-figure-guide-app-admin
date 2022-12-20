import React, { useEffect, useState } from 'react'
import { Button, Table} from "react-bootstrap";

import useBA20132014Store from '../hooks/useBA20132014Store';

const ListBA20132014 = ({ getFigureID }) => {
    const[figures, setFigures] = useState([]);

    useEffect(() => {
        getFigures();
    }, [])

    const getFigures = async() => {
        const data = await useBA20132014Store.getAllBA20132014();
        console.log(data);
        setFigures(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    const deleteHandler = async(id) => {
        await useBA20132014Store.deleteBA20132014(id);
        getFigures();
    };

    return (
        <>
            <div className="mb-2" onClick={getFigures}>
                <Button style={{marginBottom: 5, backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}>
                    Refresh List
                </Button>
            </div>

            <Table striped bordered hover size="sm" style={{ backgroundColor: '#243447', borderColor: '#F1D00A', color:'#F0F0F0'}}>
            <thead>
                <tr>
                <th>#</th>
                <th>Number</th>
                <th>Name</th>
                <th>Version</th>
                <th>Date Stamp</th>
                <th>Release Date</th>
                <th>Joint Count</th>
                <th>Accessory Count</th>
                <th>Accessory Details</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {figures.map((doc, index) => {
                    return(
                        <tr key={doc.id}>
                            <td style={{ color:'#F0F0F0'}}>{index + 1}</td>
                            <td style={{ color:'#F0F0F0'}}>{doc.figure_number}</td>
                            <td style={{ color:'#F0F0F0'}}>{doc.figure_name}</td>
                            <td style={{ color:'#F0F0F0'}}>{doc.figure_version}</td>
                            <td style={{ color:'#F0F0F0'}}>{doc.figure_date_stamp}</td>
                            <td style={{ color:'#F0F0F0'}}>{doc.figure_release_date}</td>
                            <td style={{ color:'#F0F0F0'}}>{doc.figure_joint_count}</td>
                            <td style={{ color:'#F0F0F0'}}>{doc.figure_accessory_count}</td>
                            <td style={{ color:'#F0F0F0'}}>{doc.figure_accessory_details}</td>
                            <td>
                                <Button
                                style={{backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}}
                                className="edit"
                                onClick={(e) => getFigureID(doc.id)}
                                >
                                Edit
                                </Button>
                                <Button
                                style={{backgroundColor: '#243447',borderColor: '#F1D00A', color: '#F1D00A', fontWeight: 'bold'}}
                                className="delete"
                                onClick={(e) => deleteHandler(doc.id)}
                                >
                                Delete
                                </Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            </Table>
        </>
    )
}

export default ListBA20132014