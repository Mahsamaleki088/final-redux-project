import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addItem,
  updateItem,
} from './features/todo/todoSlice';
import AppBar from './components/AppBar'
import Table from './components/Table'
import { Container } from '@material-ui/core';
import Dialog from './components/Dialog'


function App() {
  
  
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [updatedItem, setUpdatedItem]=React.useState(null);

  const handleClickOpen =(todo)=>()=> {    
    setUpdatedItem(todo);
    setOpen(true);
  };
  const handleCreate = (todo)=>() => {
    dispatch(addItem(todo))
    handleClose();
  };
  const handleUpdate = (todo)=>() => {
    dispatch(updateItem(todo))
    handleClose();
  };
  
  const handleClose = () => {
    setUpdatedItem(null);
    setOpen(false);
  };
  return (
    <div className="App">
    <Dialog open={open} handleClose={handleClose} handleAdd={handleCreate} handleUpdate={handleUpdate} updatedItem={updatedItem}/>  
    <AppBar/>
    <Container maxWidth="lg">   
    <Table handleClickOpen={handleClickOpen} />
    </Container>
    
    </div>
  );
}

export default App;
