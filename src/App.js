import React from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItem,
  removeItem,
  selectTodos,
} from './features/todo/todoSlice';
import AppBar from './components/AppBar'
import Table from './components/Table'
import { TextField, Container } from '@material-ui/core';
import Dialog from './components/Dialog'

function createData(id,title,state,url,createdAt,updatedAt) {
  return { id,title,state,url,createdAt,updatedAt};
}
const rows = [
  createData(121,'Test','Active','https://material-ui-pickers.dev/','2020-12-11','2020-12-11'),
  createData(121,'Test','Active','https://material-ui-pickers.dev/','2020-12-11','2020-12-11'),
  createData(121,'Test','Active','https://material-ui-pickers.dev/','2020-12-11','2020-12-11'),
  createData(121,'Test','Active','https://material-ui-pickers.dev/','2020-12-11','2020-12-11')
];
function App() {
  const todos = useSelector(selectTodos);
  
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  console.log(open)

  const handleClickOpen =()=> {

    setOpen(true);
  };
  const handleCreate = (todo)=>() => {
    dispatch(addItem(todo))
    console.log(todo)
    setOpen(false);
  };
  const handleUpdate = () => {
    setOpen(false);
  };
  const handleDelete = () => {
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
    <Dialog open={open} handleClose={handleClose} handleAdd={handleCreate} />  
    <AppBar/>
    <Container maxWidth="lg">
      <TextField id="standard-basic" fullWidth label="Standard" />      
    <Table handleClickOpen={handleClickOpen} rows={todos} />
    </Container>
    
    </div>
  );
}

export default App;
