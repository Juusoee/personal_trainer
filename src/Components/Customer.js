import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from 'moment';


export default function Customers(props) {
    // APIkey for Customers
    const APIcustomer = 'https://customerrest.herokuapp.com/api/customers';
    const APItrainings = 'https://customerrest.herokuapp.com/api/trainings';

    /* useState & useEffect definitions starts */
    const [customers, setCustomers] = useState([]);
    useEffect(() => fetchDataCustomers(), [])
    /* useState & useEffect definitions ends */

    // API fetch for customer data
    const fetchDataCustomers = () => {
        fetch(APIcustomer)
            .then(res => res.json())
            .then(data => setCustomers(data.content))
    }

    // Definitions for customer delete
    const deleteCustomer = (params) => {
        if (window.confirm('Are you sure?')) {
            fetch(params.links[1].href, { method: 'DELETE' })
                .then(res => fetchDataCustomers())
                .catch(err => console.error(err))
        }
    }

    // Definitions for customer saving
    const saveCustomer = (customer) => {
        fetch(APIcustomer, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => fetchDataCustomers())
            .catch(err => console.error(err))
    }

    // Definitions for customer update
    const updateCustomer = (customer, params) => {
        fetch(params, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => fetchDataCustomers())
            .catch(err => console.error(err))
    }

    /* Definitions for saving training starts */
    const saveTrainings = (trainings) => {
        fetch(APItrainings, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trainings)
        })
        console.log(trainings)
    }
    /* Definitions for saving training ends*/

    /* Column definitions starts here */
    const columns = [
        { headerName: "Firstname", field: "firstname", sortable: true, filter: true, width: 150, resizable: true },
        { headerName: "Lastname", field: "lastname", sortable: true, filter: true, width: 150, resizable: true },
        { headerName: "Street Address", field: "streetaddress", sortable: true, filter: true, width: 200, resizable: true },
        { headerName: "Postal Code", field: "postcode", sortable: true, filter: true, width: 120, resizable: true },
        { headerName: "City", field: "city", sortable: true, filter: true, width: 120, resizable: true },
        { headerName: "Phone", field: "phone", sortable: true, filter: true, width: 150, resizable: true },
        { headerName: "Email", field: "email", sortable: true, filter: true, width: 150, resizable: true },
        {
            headerName: "", width: 40,
            cellRendererFramework: (params) => <EditCustomer updateCustomer={updateCustomer} customer={params.data} />
        },
        {
            headerName: "", field: "links.href", width: 40,
            cellRendererFramework: (params) =>
                <DeleteIcon variant="danger" size="sm" onClick={() => deleteCustomer(params.data)}>Delete</DeleteIcon>
        },
        {
            headerName: "", width: 60,
            cellRendererFramework: (params) =>
                <AddTraining saveTrainings={saveTrainings} customerID={params.data} />
        }
    ]


    return (
        <Container className="ag-theme-material" style={{ height: '100vh', width: '100%', margin: 'auto' }}>
            <AddCustomer saveCustomer={saveCustomer} />
            <AgGridReact
                columnDefs={columns}
                rowData={customers}>
            </AgGridReact>
        </Container>
    )
}