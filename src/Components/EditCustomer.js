import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from "@material-ui/icons/Edit";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


export default function EditCustomer(props) {

    /* useState definitions starts here */
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState(
        {
            firstname: '',
            lastname: '',
            streetaddress: '',
            postcode: '',
            city: '',
            email: '',
            phone: '',
        })
    /* useState definitions ends here */

    /* Click handler starts here */
    const handleClickOpen = () => {
        setOpen(true);
        setCustomer({
            firstname: props.customer.firstname,
            lastname: props.customer.lastname,
            streetaddress: props.customer.streetaddress,
            postcode: props.customer.postcode,
            city: props.customer.city,
            phone: props.customer.phone,
            email: props.customer.email
        })
    };
    const handleClose = () => {
        setOpen(false);
    };
    /* Click handler starts here */

    // Input handler
    const handleInputChange = (event) => {
        setCustomer({ ...customer, [event.target.name]: event.target.value })
    }

    // Definitions for customer update
    const updateCustomer = () => {
        props.updateCustomer(customer, props.customer.links[1].href)
        handleClose();
    }

    return (
        <Container fluid>
            <EditIcon variant="info" size="sm" onClick={handleClickOpen}>
                Edit
            </EditIcon>
            {/* Dialog for customer edit starts here */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Car</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="firstname"
                        value={customer.firstname}
                        label="Firstname"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e => handleInputChange(e)}
                    />
                    <TextField
                        margin="dense"
                        name="lastname"
                        value={customer.lastname}
                        label="Lastname"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e => handleInputChange(e)}
                    />
                    <TextField
                        margin="dense"
                        name="streetaddress"
                        value={customer.streetaddress}
                        label="Street Address"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e => handleInputChange(e)}
                    />
                    <TextField
                        margin="dense"
                        name="postcode"
                        value={customer.postcode}
                        label="Postal Code"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e => handleInputChange(e)}
                    />
                    <TextField
                        margin="dense"
                        name="city"
                        value={customer.city}
                        label="City"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e => handleInputChange(e)}
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        value={customer.phone}
                        label="Phone"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e => handleInputChange(e)}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        value={customer.email}
                        label="Email"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e => handleInputChange(e)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="primary" size="sm" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" size="sm" onClick={updateCustomer}>Save</Button>
                </DialogActions>
            </Dialog>
            {/* Dialog for customer edit ends here */}
        </Container>
    )
}