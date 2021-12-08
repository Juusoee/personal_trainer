import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



export default function AddCustomer(props) {

    // useState definitions
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

    /* Click handler starts here  */
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    /* Click handler ends here  */
    // Input handler
    const handleInputChange = (event) => {
        setCustomer({ ...customer, [event.target.name]: event.target.value })
    }
    // Function to add customer
    const addCustomer = () => {
        props.saveCustomer(customer)
        handleClose();
    }

    return (
        <Container fluid>
            {/* Button for customer add starts */}
            <Button variant="secondary" className="mt-3" size="sm" onClick={handleClickOpen}>
                Add Customer
            </Button>
            {/* Button for customer add ends */}
            {/* Dialog for custome adding starts */}
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
                    <Button variant="primary" size="sm" onClick={addCustomer}>Save</Button>
                </DialogActions>
            </Dialog>
            {/* Dialog for custome adding starts */}
        </Container>
    )
}