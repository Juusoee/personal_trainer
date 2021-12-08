import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import DeleteIcon from "@material-ui/icons/Delete";
import moment from 'moment';

export default function Training(props) {

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
        { headerName: "Activity", field: "activity", sortable: true, filter: true, resizable: true  },
        { headerName: "Duration (min)", field: "duration", sortable: true, filter: true, resizable: true  },
        {
            headerName: "Date", field: "date",
            cellRenderer: (data) => {
                return moment(data.value).subtract(2, 'hours').format('DD/MM/YYYY HH:mm');

            }, sortable: true, filter: true
        },
        {headerName: "Customer", field: "name",sortable: true, filter: true, width: 150,resizable: true, valueGetter: function(params){
            return params.data.customer.firstname + " " + params.data.customer.lastname;
        }},
        {
            headerName: "", field: "links.href", width: 100,
            cellRendererFramework: (params) =>
                <DeleteIcon variant="danger" size="sm" onClick={() => deleteTraining(params.data)}>Delete</DeleteIcon>
        },
    ]
    /* Column definitions ends here */

    return (
        <Container className="ag-theme-material" style={{ height: '1500px', width: '100%', margin: 'auto' }}>
            <AgGridReact
                columnDefs={columns}
                rowData={trainings}>
            </AgGridReact>
        </Container>
    )
}