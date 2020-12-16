import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from '../components/DatePicker'
import moment from 'moment';

export default function FormDialog({open,handleClose,handleAdd,handleUpdate,updatedItem}) {  
  
  const [todo, setTodo]=useState(updatedItem?updatedItem: {
    id: "", 
    title: "",
    state: "",
    url: "", 
    createdAt: "", 
    updatedAt: ""
  })

  useEffect(() => {
    setTodo(updatedItem?updatedItem: {
      id: "", 
      title: "",
      state: "",
      url: "", 
      createdAt: "", 
      updatedAt: ""
    }
      )
  }, [open])
  
  return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your new item
          </DialogContentText>
          <TextField
            onChange={(event)=>setTodo({...todo, [event.target.name]:event.target.value})}
            value={todo.id}
            name="id"
            autoFocus
            margin="dense"
            id="name"
            label="Id"
            type="text"
            fullWidth
          />
           <TextField
            onChange={(event)=>setTodo({...todo, [event.target.name]:event.target.value})}
            value={todo.title}
            name="title"
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
          />
           <TextField
            onChange={(event)=>setTodo({...todo, [event.target.name]:event.target.value})}     
            value={todo.state}
            name="state"       
            margin="dense"
            id="state"
            label="State"
            type="text"
            fullWidth
          /> 
          <TextField
            onChange={(event)=>setTodo({...todo, [event.target.name]:event.target.value})}     
            value={todo.url}
            name="url"       
            margin="dense"
            id="url"
            label="Url"
            type="text"
            fullWidth
          /> 
          <DatePicker 
          onChange={(date)=>setTodo({...todo, createdAt:moment(date).format('YYYY-MM-DD')
        })}     
          value={todo.createdAt}
          name="createdAt"   />    
          <DatePicker
          onChange={(date)=>setTodo({...todo, updatedAt:moment(date).format('YYYY-MM-DD')
        })}     
          value={todo.updatedAt}
          name="updatedAt"   />        
        </DialogContent>
        <DialogActions>
        <Button onClick={updatedItem?handleUpdate(todo): handleAdd(todo)} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
  );
}