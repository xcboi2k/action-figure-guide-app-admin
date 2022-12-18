import React from 'react'
import { Button, Table} from "react-bootstrap";

const ListBA20132014 = () => {
    return (
        <>
            <div className="mb-2">
                <Button variant="dark edit">
                Refresh List
                </Button>
            </div>

            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Figure Number</th>
                <th>Figure Name</th>
                <th>Figure Version</th>
                <th>Figure Date Stamp</th>
                <th>Figure Release Date</th>
                <th>Figure Joint Count</th>
                <th>Figure Accessory Count</th>
                <th>Figure Accessory Details</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>Padme Amidala</td>
                    <td>Episode 2</td>
                    <td>2010</td>
                    <td>2012</td>
                    <td>15</td>
                    <td>2</td>
                    <td>Blaster, Cape</td>
                <td>
                    <Button
                    variant="secondary"
                    className="edit"
                    >
                    Edit
                    </Button>
                    <Button
                    variant="danger"
                    className="delete"
                    >
                    Delete
                    </Button>
                </td>
                </tr>
            </tbody>
            </Table>
        </>
    )
}

export default ListBA20132014