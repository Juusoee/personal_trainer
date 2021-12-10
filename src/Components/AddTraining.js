import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export default function AddNewTrainign(props) {

    /* useState definitions starts here */
    const [open, setOpen] = useState(false);
    const [trainings, setTrainings] = useState({
        activity: '',
        duration: '',
        date: '',
        customer: props.customerID.links[1].href
        
    });
    /* useState definitions ends here */

    /* click handler starts here */
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    /* click handler ends here */

    /* Input handler starts here */
    const handleInputChange = (event) => {
        setTrainings({ ...trainings, [event.target.name]: event.target.value });
    };
    /* Input handler ends here  */

    /* Function to add training stars here */
    const addTraining = () => {
        console.log(trainings)
        props.saveTrainings(trainings);
        handleClose();
    };
    /* Function to add training ends here */

    return (
        <Container>
            <FitnessCenterIcon variant="light" size="sm" onClick={handleClickOpen}>
            </FitnessCenterIcon>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Assign customer to training</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="activity"
                        value={trainings.activity}
                        label="Activity"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e => handleInputChange(e)}
                    />
                    <TextField
                        margin="dense"
                        name="duration"
                        value={trainings.duration}
                        label="Duration"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e => handleInputChange(e)}
                    />
                    <TextField
                        margin="dense"
                        name="date"
                        value={trainings.date}
                        label="Date"
                        type="datetime-local"
                        fullWidth
                        variant="standard"
                        onChange={e => handleInputChange(e)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="primary" size="sm" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" size="sm" onClick={addTraining}>Save</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}