import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Container from 'react-bootstrap/Container';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default function Customers() {

    const APIcustomer = 'https://customerrest.herokuapp.com/api/customers';

    const [customers, setCustomers] = useState([]);
    useEffect(() => fetchDataCustomers(), [])

    const fetchDataCustomers = () => {
        fetch(APIcustomer)

            .then(res => res.json())
            .then(data => setCustomers(data.content))

    }

    const columns = [
        { headerName: "Firstname", field: "firstname", sortable: true, filter: true },
        { headerName: "Lastname", field: "lastname", sortable: true, filter: true },
        { headerName: "Street Address", field: "streetaddress", sortable: true, filter: true },
        { headerName: "Postal Code", field: "postcode", sortable: true, filter: true },
        { headerName: "City", field: "city", sortable: true, filter: true }
    ]
    return (
        <Container className="ag-theme-material" style={{ height: '1500px', width: '70%', margin: 'auto' }}>
           
            <AgGridReact
                columnDefs={columns}
                rowData={customers}>
            </AgGridReact>
        </Container>
    )
}