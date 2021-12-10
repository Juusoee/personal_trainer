import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';
import DeleteIcon from "@material-ui/icons/Delete";
import Footer from '../Components/Footer';


export default function Customers() {
    /* APIkey for Customers */
    const APIcustomer = 'https://customerrest.herokuapp.com/api/customers';
    const APItrainings = 'https://customerrest.herokuapp.com/api/trainings';
    /* APIkey for Customers */

    /* useState & useEffect definitions starts */
    const [customers, setCustomers] = useState([]);
    useEffect(() => fetchDataCustomers(), [])
    /* useState & useEffect definitions ends */

    /* API fetch for customer data */
    const fetchDataCustomers = () => {
        fetch(APIcustomer)
            .then(res => res.json())
            .then(data => setCustomers(data.content))
    }
    /* API fetch for customer data */

    /* CRUD Definitions */
    const deleteCustomer = (params) => {
        if (window.confirm('Are you sure?')) {
            fetch(params.links[1].href, { method: 'DELETE' })
                .then(res => fetchDataCustomers())
                .catch(err => console.error(err))
        }
    }

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
    /* CRUD Definitions */

    /* Column definitions starts here */
    const columns = [
        {
            headerName: "", width: 40,
            cellRendererFramework: (params) => <EditCustomer updateCustomer={updateCustomer} customer={params.data} />
        },
        {
            headerName: "", field: "links.href", width: 40,
            cellRendererFramework: (params) =>
                <DeleteIcon size="sm" onClick={() => deleteCustomer(params.data)}>Delete</DeleteIcon>
        },
        {
            headerName: "", width: 60,
            cellRendererFramework: (params) =>
                <AddTraining saveTrainings={saveTrainings} customerID={params.data} />
        },
        { headerName: "Firstname", field: "firstname", sortable: true, filter: true, resizable: true, width: 130 },
        { headerName: "Lastname", field: "lastname", sortable: true, filter: true, resizable: true, width: 130 },
        { headerName: "Street Address", field: "streetaddress", sortable: true, filter: true, resizable: true, width: 150 },
        { headerName: "Postal Code", field: "postcode", sortable: true, filter: true, resizable: true, width: 140 },
        { headerName: "City", field: "city", sortable: true, filter: true, resizable: true, width: 150 },
        { headerName: "Phone", field: "phone", sortable: true, filter: true, resizable: true, width: 150 },
        { headerName: "Email", field: "email", sortable: true, filter: true, resizable: true, width: 200 },
    ]
    /* Column definitions ends here */


    return (
        <div className="ag-theme-material mt-3" style={{ height: '900px', width: '85%', margin: 'auto' }}>
            <AddCustomer saveCustomer={saveCustomer} />
            <AgGridReact
                columnDefs={columns}
                rowData={customers}>
            </AgGridReact>
            <Footer />
        </div>

    )
}