import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import DeleteIcon from "@material-ui/icons/Delete";
import Footer from '../Components/Footer';



import moment from 'moment';

export default function Training() {

    // APIkey for trainings
    const APItrainings = 'https://customerrest.herokuapp.com/api/trainings';
    const APIgetTrainings = 'https://customerrest.herokuapp.com/gettrainings';

    /* useState definitions starts here */
    const [trainings, setTrainings] = useState([]);
    useEffect(() => fetchDataTrainings(), [])
    /* useState definitions ends here */

    // API fetch for training data
    const fetchDataTrainings = () => {
        fetch(APIgetTrainings)
            .then(res => res.json())
            .then(data => setTrainings(data))

    }

    /* Delete training */
    const deleteTraining = (data) => {
        if (window.confirm('Are you sure?')) {
            fetch(APItrainings + "/" + data.id, { method: 'DELETE' })
                .then(res => fetchDataTrainings())
                .catch(err => console.error(err))
        }
    }

    /* Column definitions starts here */
    const columns = [
        {
            headerName: "", field: "links.href",
            cellRendererFramework: (params) =>
                <DeleteIcon variant="danger" size="sm" onClick={() => deleteTraining(params.data)}>Delete</DeleteIcon>
        },
        { headerName: "Activity", field: "activity", sortable: true, filter: true, resizable: true },
        { headerName: "Duration (min)", field: "duration", sortable: true, filter: true, resizable: true },
        {
            headerName: "Date", field: "date",
            cellRenderer: (data) => {
                return moment(data.value).subtract(2, 'hours').format('DD/MM/YYYY HH:mm');

            }, sortable: true, filter: true
        },
        {
            headerName: "Customer", field: "name", sortable: true, filter: true, resizable: true, valueGetter: function (params) {
                return params.data.customer.firstname + " " + params.data.customer.lastname;
            }
        },

    ]
    /* Column definitions ends here */

    return (

        <div className="ag-theme-material mt-5" style={{ height: '600px', width: '70%', margin: 'auto' }} >
            <AgGridReact
                columnDefs={columns}
                rowData={trainings}>
            </AgGridReact>
            <Footer />
        </div>
    )
}