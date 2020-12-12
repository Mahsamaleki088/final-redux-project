import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from '../components/DatePicker'

export default function FormDialog({open,handleClose}) {  

  return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your new item
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Id"
            type="text"
            fullWidth
          />
           <TextField
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
          />
           <TextField            
            margin="dense"
            id="state"
            label="State"
            type="text"
            fullWidth
          /> 
          <DatePicker/>    
          <DatePicker/>        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
  );
}
