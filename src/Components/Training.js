import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { format } from 'date-fns'
import Container from 'react-bootstrap/Container';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default function Training () {

    const APItrainings = 'https://customerrest.herokuapp.com/api/trainings';

    const [trainings, setTrainings] = useState([]);

    useEffect(()=>fetchDataTrainings(),[])

    const fetchDataTrainings = () => {
        fetch(APItrainings)
            .then(res => res.json())
            .then(data => setTrainings(data.content))
    }


    const columns =  [
        {headerName: "Activity", field: "activity", sortable:true, filter:true},
        {headerName: "Duration (min)", field: "duration", sortable:true, filter:true},
        {headerName: "Date", field: "date", sortable:true, filter:true}
    ]


    return(
        <Container className="ag-theme-material" style={{ height: '1500px', width: '70%', margin: 'auto' }}>
            <AgGridReact
                columnDefs={columns}
                rowData={trainings}>
            </AgGridReact>
        </Container>
    )
}