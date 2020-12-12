import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import AppBar from './components/AppBar'
import Table from './components/Table'
import { TextField, Container } from '@material-ui/core';
import Dialog from './components/Dialog'


function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCreate = () => {
    setOpen(true);
  };
  const handleUpdate = () => {
    setOpen(true);
  };
  const handleDelete = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
    <Dialog open={open} handleClose={handleClose}/>  
    <AppBar/>
    <Container maxWidth="lg">
      <TextField id="standard-basic" fullWidth label="Standard" />      
    <Table handleClickOpen={handleClickOpen}/>
    </Container>
    
    </div>
  );
}

export default App;
